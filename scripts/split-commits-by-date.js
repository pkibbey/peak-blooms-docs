import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the commits.json file
const commitsPath = path.join(__dirname, "commits.json");
const commitsData = JSON.parse(fs.readFileSync(commitsPath, "utf-8"));

// Create a directory for commits by date
const commitsDir = path.join(__dirname, "commits-by-date");
if (!fs.existsSync(commitsDir)) {
  fs.mkdirSync(commitsDir, { recursive: true });
}

// Group commits by date
const commitsByDate = {};

commitsData.commits.forEach((commit) => {
  // Extract the date from the commit author date
  const dateStr = commit.commit.author.date;
  const date = new Date(dateStr);
  const dateKey = date.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  if (!commitsByDate[dateKey]) {
    commitsByDate[dateKey] = [];
  }

  commitsByDate[dateKey].push(commit);
});

// Write separate JSON files for each date
let filesCreated = 0;
Object.entries(commitsByDate).forEach(([date, commits]) => {
  const fileName = `${date}.json`;
  const filePath = path.join(commitsDir, fileName);

  const fileData = {
    date,
    commitCount: commits.length,
    commits,
  };

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  console.log(`Created ${fileName} with ${commits.length} commits`);
  filesCreated++;
});

console.log(
  `\n✓ Successfully split ${commitsData.totalCommits} commits into ${filesCreated} date-based files`,
);
console.log(`Files saved to: ${commitsDir}`);
