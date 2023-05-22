const dotenv = require("dotenv");

const initializeService = async () => {
  dotenv.config();
};

module.exports = {
  initializeService,
};
