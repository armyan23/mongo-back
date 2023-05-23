const bcrypt = require("bcrypt");
const { createBcrypt, jwtGenerator } = require("../utils/helpers");
const Users = require("../models/user");

const signUp = async (req, res) => {
  try {
    const { body } = req;

    const userIsExist = await Users.findOne({ email: body.email });
    if (userIsExist) {
      return res.status(400).json({
        message: "The user already exist",
      });
    }

    const bcryptPassword = await createBcrypt(body.password);

    const user = await Users.create({
      ...body,
      password: bcryptPassword,
    });

    return res.send({
      data: user,
      message: "Congratulations, You are successfully registered!",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        message: "User Doesn't exist",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).send({
        message: "Password not valid.",
      });
    }

    const userToken = jwtGenerator(user.id);

    return res.send({
      data: userToken,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

module.exports = {
  signUp,
  signIn,
};
