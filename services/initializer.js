const db = require("../config/index");
const mongoose = require("mongoose");

const initializeService = async (startApp) => {
  db.connection = await mongoose.createConnection(process.env.MONGO_URI, {});

  await db.connection.once("open", () => {
    startApp();
    console.log("MongoDB database connection successfully");
  });
};

module.exports = {
  initializeService,
};
