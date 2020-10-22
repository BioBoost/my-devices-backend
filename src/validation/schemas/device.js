const Joi = require("@hapi/joi");

module.exports = {
  create: {
    body: Joi.object({
      name: Joi.string().required(),
      type: Joi.string(),
      description: Joi.string(),
      location: Joi.string(),
      image: Joi.string(),
      hostname: Joi.string()
    })
  },

}
