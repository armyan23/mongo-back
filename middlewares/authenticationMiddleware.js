const jwt = require("jsonwebtoken");
const Users = require("../models/user");

authenticationMiddleware = async (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token) {
      return res.status(401).send({
        message: "Not Authorization!",
      });
    }

    const payload = jwt.verify(token, `${process.env.JWT_SECRET}`);
    const user = await Users.findOne({ _id: payload.id }).select([
      "-password",
      "-__v",
    ]);

    if (!user) {
      return res.status(401).send({
        message: "User didn't found.",
      });
    }

    req.user = user;
    req.id = payload.id;

    next();
  } catch (err) {
    return res.status(403).send({
      status: 403,
      message: "Invalid token.",
    });
  }
};

module.exports = authenticationMiddleware;
