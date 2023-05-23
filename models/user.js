const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../config/index");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    dateOfBirthday: {
      type: Date,
    },
    gender: {
      type: String,
    },
    photo: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Users" }
);

const Users = db.connection.model("Users", userSchema);
module.exports = Users;
