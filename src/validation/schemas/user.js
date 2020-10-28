const Joi = require("@hapi/joi");

module.exports = {
  register: {
    body: Joi.object({
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string()
        .min(12)
        .required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
    })
  },

}
