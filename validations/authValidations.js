const Joi = require("joi");

const authValidations = {
  signUp: function (body, file) {
    const schema = Joi.object({
      name: Joi.string().min(1).max(30).required(),
      password: Joi.string().min(1).max(30).required(),
      email: Joi.string().email().required(),
      dateOfBirthday: Joi.date().required(),
      gender: Joi.string().allow("", null),
      photo: Joi.string().allow("", null),
    });

    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return {
        error: {
          details: [
            {
              message: "Please upload a valid image file - jpg|jpeg|png",
            },
          ],
        },
      };
    }

    return schema.validate(body);
  },
  signIn: function (body) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    return schema.validate(body);
  },
};

module.exports.authValidations = authValidations;
