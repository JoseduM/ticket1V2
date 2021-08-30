const midd = require('../middlewares/midd.presupuestos');
const presupuestosServices = require('../services/presupuestos.services');
const presupuestosControllers = require('../controllers/presupuestos.controllers')

//modulos

module.exports = (app) => {
  app.post('/nuevoproyecto', presupuestosControllers.nuevoProyecto)
  app.post('/nuevoConcepto', midd.checkConcepto, presupuestosControllers.nuevoConcepto)  
  app.get('/mostrar',presupuestosControllers.mostrar )
  app.delete('/borrar', presupuestosControllers.eliminar )
  app.post('/monto',presupuestosControllers.montos)
}