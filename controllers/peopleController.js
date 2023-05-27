const Users = require("../models/user");

const getPeople = async (req, res) => {
  try {
    const { user } = req;
    const users = await Users.find({ email: { $ne: user.email } }).select([
      "-password",
      "-__v",
      "-createdAt",
      "-updatedAt",
      "-email",
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
