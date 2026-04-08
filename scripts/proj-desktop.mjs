import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const outDir = "./scripts/proj-desktop";
if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise(r => setTimeout(r, 1500));

await page.evaluate(() => document.getElementById("projects")?.scrollIntoView());
await new Promise(r => setTimeout(r, 600));

// Get screenshot height and card info
const info = await page.evaluate(() => {
  const cards = document.querySelectorAll("#projects article");
  return Array.from(cards).map(c => {
    const img = c.querySelector("div[style*='height']");
    return {
      cardH: Math.round(c.getBoundingClientRect().height),
      imgH: img ? Math.round(img.getBoundingClientRect().height) : 0,
      imgStyle: img?.getAttribute("style")?.slice(0, 60) || "",
    };
  });
});

console.log("Card info:", JSON.stringify(info, null, 2));

await page.screenshot({ path: `${outDir}/projects.png`, fullPage: false });
await browser.close();
