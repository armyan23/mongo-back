const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const db = require("../config/index");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirthday: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
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
