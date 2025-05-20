const Joi = require("joi");

const sampleValidation = (data) =>
  Joi.object()
    .keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().required().email(),
    })
    .validate(data);

module.exports = { sampleValidation };
