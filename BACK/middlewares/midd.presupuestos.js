//IMPORTO LOS MODULOS NECESARIOS
const presupuestosService = require('../services/presupuestos.services')
const cors = require('cors')
const rateLimit = require("express-rate-limit");
const Joi = require('joi');
const { conceptoDTO } = require('../dto/presupuestos/conceptos.dto')


module.exports.limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, 
  message: 'Usted exedió el limite de accesos a la API'
});

module.exports.checkConcepto = async (req, res, next) => {
  try {
    await Joi.attempt(req.body, conceptoDTO, "Los datos enviados no son correctos")
    return next();
  } catch (e) {
    res.status(500).json({error: e.message })
  }
}
