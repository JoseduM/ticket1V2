//Definicipón de variables
const url = 'http://localhost:300';
const contenedor = document.querySelector('tbody');
let resultados = '';

var modalIngreso = new bootstrap.Modal(document.getElementById('modalIngreso'));
const formIngreso = document.querySelector('form');
const concepto = document.getElementById('concepto');
const ingreso = document.getElementById('ingreso');
let opcion = '';

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
}) 

btnAgregar.addEventListener('click', ()=> {
  concepto.value = '';
  ingreso.value = '';
  modalIngreso.show();
  opcion = 'crear'
})

const mostrar = (ingresos) => {
  ingresos.forEach(element => {
    resultados += 
     ` <tr>
        <td>${element.concepto}</td>
        <td>${element.ingreso}</td>
        <td class='text-center'>
          <a class='btnEditar btn btn-primary'>Editar</a>
          <a class='btnBorrar btn btn-danger'>Borrar</a>
        </td>
        
      </tr>`
  });
  contenedor.innerHTML = resultados

}


fetch(url)
  .then(response => response.json())
  .then( data => mostrar(data))
  .catch( error => console.log(error))