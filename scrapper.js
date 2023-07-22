const puppeteer = require("puppeteer");
require("dotenv").config();

const scanPage = async (url) => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  try {
    const page = await browser.newPage();

    await page.goto(url);

    const fullTitle = await page.title();

    return fullTitle;
  } catch (error) {
    await browser.close();
    throw new Error(error.message);
  } finally {
    await browser.close();
  }
};

module.exports = { scanPage };
