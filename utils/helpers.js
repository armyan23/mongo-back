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

const randomId = (length = 20) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = {
  createBcrypt,
  jwtGenerator,
  randomId,
};
