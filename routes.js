const express = require("express");
const { getDb } = require("./db");
const router = express.Router();

const { scanPage } = require("./scrapper");

router.post("/a11y", async (req, res) => {
  const db = getDb();
  try {
    const { url, appName } = req.body;
    if (!url || !appName) {
      res.status(400).send("Website Name and URL are required!");
    }
    const response = await scanPage(url);

    const saveRes = await db.collection("results").insertOne({
      appName,
      ...response,
    });

    res.send(saveRes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
