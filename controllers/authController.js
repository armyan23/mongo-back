const bcrypt = require("bcrypt");

const Users = require("../models/user");
const { authValidations } = require("../validations/authValidations");
const { createBcrypt, jwtGenerator } = require("../utils/helpers");
const { uploadFile } = require("../utils/file");

const signUp = async (req, res) => {
  try {
    const { body, file } = req;

    const { error, value } = authValidations.signUp(body, file);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const userIsExist = await Users.findOne({ email: value.email });
    if (userIsExist) {
      return res.status(400).json({
        message: "The user already exist",
      });
    }

    let photo = null;
    if (file) {
      photo = await uploadFile("public/users", file);
    }

    const bcryptPassword = await createBcrypt(value.password);
    await Users.create({
      ...body,
      password: bcryptPassword,
      photo,
    });

    return res.send({
      data: {
        ...body,
        photo,
      },
      message: "Congratulations, You are successfully registered!",
    });
  } catch (e) {
    console.log("Error: signUp", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { body } = req;

    const { error, value } = authValidations.signIn(body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const user = await Users.findOne({ email: value.email });
    if (!user) {
      return res.status(400).json({
        message: "User Doesn't exist",
      });
    }

    const validPassword = await bcrypt.compare(value.password, user.password);
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
    console.log("Error: signIn", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const authenticated = async (req, res) => {
  try {
    const { user } = req;

    return res.send({
      data: user,
    });
  } catch (e) {
    console.log("Error: getProfile", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

module.exports = {
  signUp,
  signIn,
  authenticated,
};
