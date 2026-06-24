/**
 * generate-screenshots.mjs
 *
 * Runs Playwright to take full-page screenshots of each project's demo URL
 * and saves them as PNG files in the /public directory.
 *
 * Usage: node scripts/generate-screenshots.mjs
 */
import fs from "fs";
import path from "path";
import { chromium } from "playwright";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

const publicDir = path.resolve(__dirname, "../public");

async function generateScreenshots() {
  console.log("🚀 Launching Playwright browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });

  for (const project of projects) {
    const outputPath = path.join(publicDir, project.file);
    const page = await context.newPage();

    try {
      console.log(`📸 Capturing ${project.slug}...`);
      await page.goto(project.url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      // Extra wait for any lazy-loaded content
      await page.waitForTimeout(2000);

      await page.screenshot({
        path: outputPath,
        fullPage: true,
      });

      console.log(`✅ Saved: ${project.file}`);
    } catch (error) {
      console.error(`❌ Failed to capture ${project.slug}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("🎉 All screenshots generated!");
}

generateScreenshots();
