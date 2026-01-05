#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to render task segments
function renderTaskSegment(segment) {
  if (segment.kind === "text") {
    return segment.text;
  }
  if (segment.kind === "hover") {
    return `**${segment.trigger}** *(${segment.body})*`;
  }
  return "";
}

// Helper function to render tasks
function renderTasks(tasks) {
  if (!tasks || tasks.length === 0) return "";

  return tasks
    .map((task) => {
      if (task.type === "paragraph") {
        const content = task.segments.map(renderTaskSegment).join("");
        return `${content}`;
      }
      return "";
    })
    .join("\n\n");
}

// Main generation function
async function generateMarkdown() {
  try {
    // Import the metadata
    const { weeksMetadata, daysMetadata } = await import(
      path.join(__dirname, "src/components/dates-metadata.ts")
    );

    let markdown = "";

    // Title and intro
    markdown += `# How I Built Peak Blooms\n\n`;
    markdown += `A detailed journey documenting how I designed, developed, and deployed a modern web platform by Phineas Kibbey.\n\n`;

    // Table of Contents
    markdown += `## Table of Contents\n\n`;
    markdown += `- [Overview](#overview)\n`;
    markdown += `- [Architect's Note](#architects-note)\n`;
    markdown += `- [Dev Notes](#dev-notes)\n`;
    markdown += `- [Design System](#design-system)\n`;
    markdown += `- [The Journey](#the-journey)\n`;
    markdown += `- [Weekly Summaries](#weekly-summaries)\n`;
    markdown += `- [Daily Commits](#daily-commits)\n`;
    markdown += `- [Lessons Learned](#lessons-learned)\n\n`;

    // Overview section
    markdown += `## Overview\n\n`;
    markdown += `This document captures the complete development journey of Peak Blooms, a modern e-commerce platform built with Next.js, TypeScript, and modern web technologies.\n\n`;
    markdown += `**Architect’s Note:** A 30-day architectural sprint applying React 19 Server Components, SSR/ISR, CI practices, and AI-assisted workflows to validate high-velocity, production-grade delivery.\n\n`;
    markdown += `**Technologies Used:**\n`;
    markdown += `- Next.js with TypeScript\n`;
    markdown += `- BiomeJS for linting and formatting\n`;
    markdown += `- ShadCN/BaseUI for components\n`;
    markdown += `- Prisma for database management\n`;
    markdown += `- Better-Auth for authentication\n`;
    markdown += `- Vitest for unit testing\n`;
    markdown += `- Claude / Ollama (AI-assisted development)\n\n`;

    // The Journey section with weekly summaries
    markdown += `## The Journey\n\n`;
    markdown += `The project was completed over 4 weeks, each with distinct focus areas and milestones.\n\n`;

    // Weekly summaries
    markdown += `### Weekly Summaries\n\n`;

    for (const week of weeksMetadata) {
      markdown += `#### ${week.title}\n`;
      markdown += `**Week ${week.week}** | ${week.dateRange}\n\n`;
      markdown += `${week.description}\n\n`;
      markdown += `**Milestones:**\n`;
      for (const milestone of week.milestones) {
        markdown += `- ${milestone}\n`;
      }
      markdown += `\n`;
    }

    // Daily commits section
    markdown += `## Daily Commits\n\n`;
    markdown += `A day-by-day breakdown of the development process with detailed tasks and lessons learned.\n\n`;

    for (const day of daysMetadata) {
      markdown += `### ${day.date} - ${day.title}\n\n`;

      // Skills used
      if (day.skillsUsed && day.skillsUsed.length > 0) {
        markdown += `**Skills Used:** ${day.skillsUsed.join(", ")}\n\n`;
      }

      // Tasks
      if (day.tasks) {
        const taskContent = renderTasks(day.tasks);
        if (taskContent) {
          markdown += `**Work Completed:**\n\n`;
          markdown += `${taskContent}\n\n`;
        }
      }

      markdown += `---\n\n`;
    }

    // Architect's Note
    markdown += `## Architect's Note\n\n`;
    markdown += `A 30-day architectural sprint applying React 19 Server Components, SSR/ISR, CI practices, and AI-assisted workflows to validate high-velocity, production-grade delivery.\n\n`;

    // Dev Notes
    markdown += `## Dev Notes\n\n`;
    markdown += `This section summarizes how AI tools were used to accelerate work: boilerplate and component scaffolding, unit test generation, refactors, parsing CSV product data into mock datasets for the catalog, and generating asset prototypes for layouts and testing.\n\n`;

    // Design System
    markdown += `## Design System\n\n`;
    markdown += `A concise gallery of primary UI components and decisions around tokens, Tailwind usage, and BaseUI choices. See the /design-system route for an interactive showcase.\n\n`;

    // Lessons Learned section
    markdown += `## Lessons Learned\n\n`;
    markdown += `### Database Fidelity\n`;
    markdown += `Use local database for development and maintain a script that can seed the data to go along with the commits, so that the schema can always be recreated to match the git history.\n\n`;

    markdown += `### The 'Good Enough' Trap\n`;
    markdown += `Don't let 'perfect' be the enemy of 'shipped', but don't let 'shipped' be an excuse for messy code. If a component feels like it needs a rewrite, it probably does.\n\n`;

    // Write to file
    const outputPath = path.join(__dirname, "SITE_MARKDOWN.md");
    fs.writeFileSync(outputPath, markdown, "utf-8");
    console.log(`✓ Markdown generated successfully: ${outputPath}`);
    console.log(`✓ Total size: ${(markdown.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error("Error generating markdown:", error);
    process.exit(1);
  }
}

// Run the generator
generateMarkdown().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
