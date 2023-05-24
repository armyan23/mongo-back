const Users = require("../models/user");

const getPeople = async (req, res) => {
  try {
    const users = await Users.find().select([
      "-password",
      "-__v",
      "-createdAt",
      "-updatedAt",
      "-email",
      "-gender",
    ]);

    return res.send({
      data: users,
    });
  } catch (e) {
    console.log("Error: getProfile", e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getPeople,
};
