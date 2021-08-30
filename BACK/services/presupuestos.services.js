//Importar modulos 
const dbPresupuestos = require('../models/presupuestos.model');
const presupuestoModel = require('../models/presupuestos.model')
const jwt = require('jsonwebtoken');
const { func } = require('joi');



//exportar modulos

module.exports.crearProyecto = async (proyecto) => {
  try {
    let proyectoNuevo = [
      proyecto.fecha,
      proyecto.proyecto,
      proyecto.version
    ]
    let resultado = await presupuestoModel.nuevoProyecto(proyectoNuevo)
    return 'REGISTRO COMPLETO'
  } catch (error) {
    console.log(`error en services crear concepto:${error}`)
    throw new Error('Error en la creacion del concepto')
  }
}


module.exports.crearConcepto = async (concepto) => {
  try {
    let resultado = await presupuestoModel.nuevoConcepto(concepto)
    return 'Registro completado'
  } catch (error) {
    console.log(`error en services crear concepto:${error}`)
    throw new Error('Error en la creacion del concepto')
  }
}

module.exports.lista = async (tabla) => {
  try {
    let resultado = await presupuestoModel.mostrar(tabla)
    return resultado
  }
  catch (error) {
    console.log(`error en services listaConceptos:${error}`)
    throw new Error('Error en la obtención de conceptos ')
  }
}

module.exports.borrarConcepto = async (concepto) => {
  try {
    let resulado = await presupuestoModel.eliminarConcepto(concepto)
  } catch (error) {
    console.log('error en services borrar concepto')
    throw new Error('Error en la eliminación de conceptos')
  }
}

module.exports.agregarMonto = async (monto) => {
  try {
    let conceptoID = await presupuestoModel.consegirID('concepto', monto.concepto, 'concepto_' + monto.tabla)

    let proyectoID = await presupuestoModel.consegirID('proyecto', monto.proyecto, 'presupuestos')

    let tabla = monto.tabla

    if (tabla == 'recursos') {
      console.log('dentro del if')
      let montoNuevo = [
        conceptoID,
        proyectoID,
        monto.fecha,
        monto.monto,
        monto.porcentaje
      ]
      let resultado = await presupuestoModel.nuevoMonto(montoNuevo, tabla)
    }
    else {
      console.log('dentro del if')
      let montoNuevo = [
        conceptoID,
        proyectoID,
        monto.fecha,
        monto.monto
      ]
      let resultado = await presupuestoModel.nuevoMonto(montoNuevo, tabla)
    }

    


  } catch (error) {
    console.log(`Error en la asignación de monto agregarMonto: ${error}`)
    throw new Error('Error en la asignación del monto')
  }
}

