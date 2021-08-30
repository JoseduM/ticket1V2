const Joi = require("joi");

module.exports.conceptoDTO = Joi.object().keys({
  concepto: Joi.string().min(3).max(50),
  tabla:Joi.string().min(8)
})
