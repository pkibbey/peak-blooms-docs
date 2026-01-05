import * as fs from "node:fs";
import * as path from "node:path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Repository details
const owner = "pkibbey";
const repo = "peak-blooms";
const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("Error: GITHUB_TOKEN not found in environment variables");
  process.exit(1);
}

console.log(`Fetching commits from ${owner}/${repo}...`);

async function fetchAllCommits() {
  const allCommits = [];
  let page = 1;
  let hasMore = true;
  const perPage = 100;

  while (hasMore) {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}&page=${page}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "GitHub-Commits-Fetcher",
        },
      });

      if (!response.ok) {
        console.error(`API Error: ${response.status} - ${response.statusText}`);
        throw new Error(`Failed to fetch commits: ${response.statusText}`);
      }

      const commits = await response.json();

      if (commits.length === 0) {
        hasMore = false;
      } else {
        allCommits.push(...commits);
        console.log(`Fetched ${commits.length} commits (page ${page})`);
        page++;
      }
    } catch (error) {
      console.error(`Error fetching commits on page ${page}:`, error.message);
      throw error;
    }
  }

  return allCommits;
}

async function main() {
  try {
    const commits = await fetchAllCommits();

    const output = {
      repository: `${owner}/${repo}`,
      totalCommits: commits.length,
      fetchedAt: new Date().toISOString(),
      commits: commits,
    };

    const outputPath = path.join(__dirname, "commits.json");
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(
      `\n✓ Successfully saved ${commits.length} commits to commits.json`,
    );
  } catch (error) {
    console.error("Failed to fetch commits:", error);
    process.exit(1);
  }
}

main();
