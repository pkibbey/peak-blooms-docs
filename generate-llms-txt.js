#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Run the generator
generateLLMSTxt().catch((error) => {
  console.error("Error generating LLMS.txt:", error);
  process.exit(1);
});
