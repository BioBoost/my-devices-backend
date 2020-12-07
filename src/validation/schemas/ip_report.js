const Joi = require("@hapi/joi");

module.exports = {
  create: {
    body: Joi.object({
      time: Joi.string().required(),
      mac: Joi.string().required(),
      ip: Joi.string().required(),
      hostname: Joi.string()
    })
  },

}
