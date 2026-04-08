import puppeteer from "puppeteer";

const projects = [
  { name: "spl", url: "https://spl-tournament-up.vercel.app" },
  { name: "medgallery", url: "https://medical-gallery-xi.vercel.app" },
  { name: "seo-analyzer", url: "https://seo-analyzer-frontend-blue.vercel.app/" },
  { name: "ssitm", url: "https://ssitm.vercel.app/" },
];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });

for (const p of projects) {
  console.log(`Screenshotting ${p.name}...`);
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setCacheEnabled(false);
    await page.goto(p.url, { waitUntil: "networkidle2", timeout: 35000 });
    await new Promise(r => setTimeout(r, 2500));
    // Scroll down 120px to skip navbar and show actual hero content
    await page.evaluate(() => window.scrollTo(0, 120));
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({
      path: `./public/assets/screenshots/${p.name}.png`,
      clip: { x: 0, y: 0, width: 1280, height: 800 }
    });
    await page.close();
    console.log(`  ✓ ${p.name}.png`);
  } catch (e) {
    console.log(`  ✗ ${p.name}: ${e.message}`);
  }
}

await browser.close();
console.log("Done.");
