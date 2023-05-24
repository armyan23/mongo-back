const getPeople = async (req, res) => {
  try {
    return res.send({
      data: "getPeople",
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
