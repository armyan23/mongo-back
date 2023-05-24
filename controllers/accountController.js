const { createBcrypt } = require("../utils/helpers");
const { uploadFile, deleteImage } = require("../utils/file");
const accountValidations = require("../validations/accountValidations");

const getAccount = async (req, res) => {
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

const updateAccountName = async (req, res) => {
  try {
    const { user, body } = req;

    if (body.name) {
      user.name = body.name;
      await user.save();
    }

    return res.send({
      data: user,
      message: "Updated account name!",
    });
  } catch (e) {
    console.log("Error: updateProfile", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const updateAccountPassword = async (req, res) => {
  try {
    const { user, body } = req;

    const { error, value } = accountValidations.password(body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    user.password = await createBcrypt(value.password);
    await user.save();

    return res.send({
      message: "Updated Account password.",
    });
  } catch (e) {
    console.log("Error: updateProfile", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const updateAccountPhoto = async (req, res) => {
  try {
    const { user, file } = req;
    const error = accountValidations.photo(file);

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    let photo = null;
    if (file) {
      await deleteImage(user.photo);
      photo = await uploadFile("public/users", file);
    }

    user.photo = photo;
    await user.save();

    return res.send({
      user,
      message: "Updated Account photo",
    });
  } catch (e) {
    console.log("Error: updateProfile", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

const updateAccountDelete = async (req, res) => {
  try {
    const { user } = req;

    await deleteImage(user.photo);

    user.photo = null;
    await user.save();

    return res.send({
      user,
      message: "Account photo deleted.",
    });
  } catch (e) {
    console.log("Error: updateProfile", e);
    return res.status(500).json({
      message: "Internal Error",
    });
  }
};

module.exports = {
  getAccount,
  updateAccountName,
  updateAccountPassword,
  updateAccountPhoto,
  updateAccountDelete,
};
