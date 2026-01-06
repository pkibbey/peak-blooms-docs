import fs from "node:fs/promises";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText, jsonSchema } from "ai";
import { v4 as uuid } from "uuid";

// LMStudio local provider (default URL)
const lmstudio = createOpenAICompatible({
  name: "lmstudio",
  baseURL: "http://localhost:1234/v1",
  supportsStructuredOutputs: true,
});

// JSON schema for day metadata (matches existing generated file shape)
const schema = jsonSchema({
  type: "object",
  properties: {
    id: { type: "string" },
    date: { type: "string" },
    title: { type: "string" },
    screenshot: { type: "string" },
    skillsUsed: { type: "array", items: { type: "string" } },
    tasks: {
      type: "array",
      items: {
        type: "object",
        properties: { text: { type: "string" } },
        required: ["text"],
      },
    },
    theme: { type: "string" },
  },
  required: ["id", "date"],
});

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node scripts/generate-day-metadata.mjs <commits.json>");
  process.exit(1);
}

let raw;
try {
  raw = await fs.readFile(filePath, "utf8");
} catch (err) {
  console.error(`Failed to read file ${filePath}:`, err.message || err);
  process.exit(1);
}

let commitsData;
try {
  commitsData = JSON.parse(raw);
} catch (err) {
  console.error(`Invalid JSON in ${filePath}:`, err.message || err);
  process.exit(1);
}

// Filter commits data to messages-only for prompt to reduce token usage
function filterCommitsToMessages(raw) {
  // If input is an array of per-day objects
  if (Array.isArray(raw)) {
    return raw.map((day) => ({
      date: day.date,
      commitCount:
        day.commitCount ??
        (Array.isArray(day.commits) ? day.commits.length : 0),
      messages: (day.commits || []).map(
        (c) => c.commit?.message || c.message || "",
      ),
    }));
  }

  // If input is a single per-day object
  if (raw && Array.isArray(raw.commits) && raw.date) {
    return {
      date: raw.date,
      commitCount: raw.commitCount ?? raw.commits.length,
      messages: raw.commits.map((c) => c.commit?.message || c.message || ""),
    };
  }

  // If input is a flat commits array, bucket by date
  if (raw && Array.isArray(raw.commits)) {
    const buckets = {};
    for (const c of raw.commits) {
      const date = (c.commit?.author?.date || "").split("T")[0] || "unknown";
      buckets[date] = buckets[date] || [];
      buckets[date].push(c);
    }
    return Object.keys(buckets)
      .sort()
      .map((date) => ({
        date,
        commitCount: buckets[date].length,
        messages: buckets[date].map(
          (c) => c.commit?.message || c.message || "",
        ),
      }));
  }

  return raw;
}

const filteredData = filterCommitsToMessages(commitsData);
const beforeBytes = Buffer.byteLength(
  raw ?? JSON.stringify(commitsData),
  "utf8",
);
const afterBytes = Buffer.byteLength(JSON.stringify(filteredData), "utf8");
console.log(
  `Filtered commits payload: ${beforeBytes} -> ${afterBytes} bytes (~${Math.round((beforeBytes - afterBytes) / 4)} tokens saved).`,
);

const prompt = `You will be given commits data in JSON form. For each day represented in the input, generate one DayMetadata object that adheres to the following schema: ${JSON.stringify(
  schema,
  null,
  2,
)}\n\nInput commits data:\n${JSON.stringify(filteredData, null, 2)}\n\nConstraints:\n- Return only a single JSON array of DayMetadata objects (no explanation or extra output).\n- Each DayMetadata must include at least \`id\` and \`date\`.\n- \`screenshot\` should be /screenshots/{date}.png when applicable.\n- \`title\` should be concise (3-6 words) and derived from the commits.\n- \`tasks\` should be an array of objects with a single \`text\` property.\n- \`skillsUsed\` should be short tags like Testing, UI, Database.\n- \`theme\` should be one of: foundation, core-features, data-architecture, performance.\n- Return valid JSON only.`;

try {
  const res = await generateText({
    model: lmstudio("google/gemma-3n-e4b"),
    prompt,
    temperature: 0.2,
    maxRetries: 0,
  });

  // The model should return a JSON array as text. Parse and print it.
  const rawText = res.text ?? (res.output ? JSON.stringify(res.output) : "");
  // Strip Markdown code fences if present (```json ... ```)
  const text = rawText
    .replace(/^\s*```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    console.error("Model did not return valid JSON:", err.message || err);
    console.error("Raw model output:\n", rawText);
    process.exit(1);
  }

  // Accept a single object by wrapping it in an array for convenience
  if (!Array.isArray(parsed)) {
    if (parsed && typeof parsed === "object" && (parsed.id || parsed.date)) {
      parsed = [parsed];
    } else {
      console.error(
        "Expected a JSON array of day metadata objects, got:",
        typeof parsed,
      );
      console.error(JSON.stringify(parsed, null, 2));
      process.exit(1);
    }
  }

  // Ensure each parsed item uses a UUID v4 for `id` (replace date or non-UUID IDs)
  for (const item of parsed) {
    if (!item || typeof item !== "object") continue;
    const hasUuid =
      typeof item.id === "string" &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        item.id,
      );
    if (!hasUuid) {
      const old = item.id;
      item.id = uuid();
      console.log(
        `Assigned UUID ${item.id} (replaced id: ${old ?? "<missing>"}) for date ${item.date ?? "unknown"}`,
      );
    }
  }

  // Upsert parsed entries into src/generated/day-metadata.generated.json
  const targetPath = "src/generated/day-metadata.generated.json";
  let existing = [];
  try {
    const existingRaw = await fs.readFile(targetPath, "utf8");
    existing = JSON.parse(existingRaw);
    if (!Array.isArray(existing)) existing = [];
  } catch (e) {
    // If file doesn't exist or is invalid, start with empty array
    existing = [];
  }

  let added = 0;
  let updated = 0;
  for (const item of parsed) {
    if (!item || typeof item !== "object") continue;
    if (!item.id) {
      console.warn("Skipping item without id:", JSON.stringify(item));
      continue;
    }
    const idx = existing.findIndex((e) => e.id === item.id);
    if (idx === -1) {
      existing.push(item);
      added++;
    } else {
      existing[idx] = item;
      updated++;
    }
  }

  // Write back the file
  try {
    await fs.mkdir("src/generated", { recursive: true });
    await fs.writeFile(
      targetPath,
      JSON.stringify(existing, null, 2) + "\n",
      "utf8",
    );
    console.log(
      `Wrote ${added} added, ${updated} updated entries to ${targetPath}`,
    );
    console.log(JSON.stringify(parsed, null, 2));
  } catch (err) {
    console.error(`Failed to write ${targetPath}:`, err.message || err);
    process.exit(1);
  }
} catch (err) {
  console.error("Generation failed:", err);
  process.exit(1);
}
