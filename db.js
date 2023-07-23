const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;
const connectToDb = async () => {
  try {
    const client = await new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = await client.db(process.env.DB_NAME);
    console.log("Connected to Database");
  } catch (error) {
    throw new Error(error);
  }
};
const getDb = () => {
  return db;
};
module.exports = { connectToDb, getDb };
