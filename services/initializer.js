const db = require("../config/index");
const mongoose = require("mongoose");

const initializeService = async (startApp) => {
  // const response = await checkingMongodStatus();
  // if (response?.error) {
  //   console.log(response?.error?.message);
  // }
  console.log(process.env.MONGO_URI);
  db.connection = await mongoose.createConnection(process.env.MONGO_URI, {});

  await db.connection.once("open", () => {
    startApp();
    console.log("MongoDB database connection successfully");
  });
};

module.exports = {
  initializeService,
};
