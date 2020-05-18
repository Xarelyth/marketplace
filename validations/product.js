const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));
const { generateError } = require("../helpers");

const passwordSchema = Joi.string()
  .min(6)
  .alphanum()
  .max(150)
  .required()
  .error(generateError("Field must have between 6 and 50 types"));

const newProductSchema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .max(50)
    .min(2)
    .required()
    .error(generateError("Field must have between 2 and 50 characters")),
  description: Joi.string()
    .max(250)
    .min(2)
    .required()
    .error(generateError("Field must have between 2 and 250 characters.")),
  price: Joi.number().required(),
});
module.exports = {
  newProductSchema,
};
