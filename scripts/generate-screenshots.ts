/**
 * generate-screenshots.ts
 *
 * Runs Playwright to take full-page screenshots of each project's demo URL
 * and saves them as PNG files in the /public directory.
 *
 * Usage: npx tsx scripts/generate-screenshots.ts
 */
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright";
import { projectList } from "../src/features/projects/data/ProjectList";

const publicDir = path.resolve(__dirname, "../public");

const projects = projectList.map((p) => ({
  slug: p.slug,
  url: p.demoLink,
  file: path.basename(p.imagePath),
}));

export async function generateScreenshots() {
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
        waitUntil: "load",
        timeout: 30000,
      });

      // Wait for animations to finish after page load

      // Extra wait for any lazy-loaded content
      await page.waitForTimeout(2000);

      await page.screenshot({
        path: outputPath,
        fullPage: true,
      });

      console.log(`✅ Saved: ${project.file}`);
    } catch (error) {
      console.error(`❌ Failed to capture ${project.slug}:`, (error as Error).message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("🎉 All screenshots generated!");
}

// Run directly when called as a standalone script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateScreenshots();
}
