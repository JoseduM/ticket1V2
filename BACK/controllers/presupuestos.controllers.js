const presupuestosServices = require('../services/presupuestos.services');


module.exports.nuevoProyecto = async (req, res) => {
  try {
    console.log('dentro post')
    let proyecto = req.body
    console.log(proyecto)
    let resultado = presupuestosServices.crearProyecto(proyecto)
    res.status(200).send('Proyecto agregado')

  } catch (error) {
    console.log(error)
    res.status(400).send('Ocurrió un error')
  }
}

module.exports.nuevoConcepto = async (req, res) => {
  try {
    let ingreso = req.body;
    let resultado = await presupuestosServices.crearConcepto(ingreso);
    res.status(200).send('Concepto agregado')
  } catch (error) {

    res.status(400).send('Ocurrio un error inesperado')
  }

}

module.exports.mostrar = async (req, res) => {
  try {
    let tabla = req.body
    let resultado = await presupuestosServices.lista(tabla)
    res.status(200).json(resultado)
  } catch (error) {
    console.log(error)
    res.status(400).send('Ocurrió un error inesperado')
  }
}

module.exports.eliminar = async (req,res) => {
  try {
    let concepto = req.body
    let resultado = await presupuestosServices.borrarConcepto(concepto)
    res.status(200).send('concepto eliminado correctamente')

  }catch (error) {
    console.log(error)
    res.status(400).send('Ocurrió un error inesperado')
  }
}


module.exports.montos =  async (req,res) => {
  try {
    let monto = req.body;
    let resultado = await presupuestosServices.agregarMonto(monto)
    return res.status(200).send('Monto agregado')

  }catch (error) {
    console.log(error)
    res.status(400).send('Ocurrió un error inesperado')
  }
}