const getAccount = async (req, res) => {
  try {
    return res.send({
      data: "getProfile",
    });
  } catch (e) {
    console.log("Error: getProfile", e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const updateAccount = async (req, res) => {
  try {
    return res.send({
      message: "Updated photo!",
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
  updateAccount,
};
