/**
 * prebuild.ts
 *
 * Run BEFORE next build:
 * 1. Capture fresh screenshots of all project demo URLs
 * 2. Generate LQIP placeholders from all images in /public
 *
 * Usage: npx tsx scripts/prebuild.ts
 */

import { generateScreenshots } from "./generate-screenshots";
import { generatePlaceholders } from "../src/lib/generatePlaceholder";

async function main() {
  console.log("🏗️  Prebuild Script\n");

  try {
    await generateScreenshots();
  } catch (error) {
    console.error("Screenshot generation failed:", (error as Error).message);
    console.log("Continuing with placeholder generation...");
  }

  try {
    await generatePlaceholders();
  } catch (error) {
    console.error("Placeholder generation failed:", (error as Error).message);
  }

  console.log("✅ Prebuild complete!");
}

main();
