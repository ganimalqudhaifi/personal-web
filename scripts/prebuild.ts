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
import { generatePlaceholders } from "./generate-placeholder";

async function main() {
  console.log("🏗️  Prebuild Script\n");

  try {
    await generateScreenshots();
    console.log("Screenshots generated successfully.");
  } catch (error) {
    console.error("Screenshot generation failed:", (error as Error).message);
    console.log("Skipping placeholder generation.");
    return;
  }

  try {
    await generatePlaceholders();
    console.log("Placeholders generated successfully.");
  } catch (error) {
    console.error("Placeholder generation failed:", (error as Error).message);
    return;
  }

  console.log("✅ Prebuild complete!");
}

main();
