const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function createBcrypt(password, saltRound = 10) {
  const salt = await bcrypt.genSalt(saltRound);

  return await bcrypt.hash(password, salt);
}

function jwtGenerator(id) {
  const payload = { id };

  return jwt.sign(payload, `${process.env.JWT_SECRET}`, { expiresIn: "30d" });
}

module.exports = {
  createBcrypt,
  jwtGenerator,
};
