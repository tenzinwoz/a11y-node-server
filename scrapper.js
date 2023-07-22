const puppeteer = require("puppeteer");

const scanPage = async (url) => {
  const browser = await puppeteer.launch();
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
