const express = require("express");
const { scanPage } = require("./scrapper");
const app = express();

app.use(express.json());

app.post("/api/a11y", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      res.status(400).send("No Application/Website URL Provided!");
    }
    const response = await scanPage(url);
    res.send(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
