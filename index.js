const express = require("express");
const { connectToDb } = require("./db");
const appRoutes = require("./routes");

const app = express();

app.use(express.json());

connectToDb().then(() => {
  app.use("/api", appRoutes);
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
