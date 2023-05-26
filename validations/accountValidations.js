const Joi = require("joi");

const accountValidations = {
  password: function (body) {
    const schema = Joi.object({
      password: Joi.string().min(6).max(30).required(),
    });

    return schema.validate(body);
  },

  photo: function (file) {
    if (file?.originalname && !file?.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return {
        message: "Please upload a valid image file - jpg|jpeg|png",
      };
    }
  },
};

module.exports = accountValidations;
