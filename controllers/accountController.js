const getProfile = async (req, res) => {
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

const updateProfile = async (req, res) => {
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
  getProfile,
  updateProfile,
};
