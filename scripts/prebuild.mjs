/**
 * prebuild.mjs
 *
 * Run BEFORE next build:
 * 1. Capture fresh screenshots of all project demo URLs
 * 2. Generate LQIP placeholders from all images in /public
 *
 * Usage: node scripts/prebuild.mjs
 */

import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const projects = [
  {
    slug: "synth-ai",
    url: "https://synth-ai.ganimalqudhaifi.my.id",
    file: "project-synth-ai.png",
  },
  {
    slug: "financial-records",
    url: "https://financial-records.ganimalqudhaifi.my.id",
    file: "project-financial-records.png",
  },
  {
    slug: "rains-karya-multindo",
    url: "https://rains-km.co.id/",
    file: "project-rains-karya-multindo.png",
  },
  {
    slug: "sudeci-exportir-indonesia",
    url: "https://sudeci-exportir-indonesia.vercel.app/",
    file: "project-sudeci-exportir.png",
  },
];

async function generateScreenshots() {
  console.log("\n📸 === Generating Screenshots ===");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });

  let success = 0;
  let failed = 0;

  for (const project of projects) {
    const outputPath = path.join(publicDir, project.file);
    const page = await context.newPage();

    try {
      console.log(`  Capturing ${project.slug}...`);
      await page.goto(project.url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: outputPath, fullPage: true });
      console.log(`  ✅ ${project.file}`);
      success++;
    } catch (error) {
      console.error(`  ❌ ${project.slug}: ${error.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`  Done: ${success} succeeded, ${failed} failed\n`);
}

async function generatePlaceholders() {
  console.log("🖼️ === Generating Placeholders ===");

  const { spawn } = await import("child_process");
  const script = path.resolve(__dirname, "../src/lib/generatePlaceholder.ts");
  const cwd = path.resolve(__dirname, "..");

  return new Promise((resolve, reject) => {
    const proc = spawn(
      process.platform === "win32" ? "npx.cmd" : "npx",
      ["tsx", script],
      { stdio: "inherit", cwd }
    );
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`generatePlaceholder.ts exited with code ${code}`));
    });
    proc.on("error", reject);
  });
}

async function main() {
  console.log("🏗️  Prebuild Script\n");

  try {
    await generateScreenshots();
  } catch (error) {
    console.error("Screenshot generation failed:", error.message);
    console.log("Continuing with placeholder generation...");
  }

  try {
    await generatePlaceholders();
  } catch (error) {
    console.error("Placeholder generation failed:", error.message);
  }

  console.log("✅ Prebuild complete!");
}

main();
