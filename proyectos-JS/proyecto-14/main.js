"use strict";

const sueldos = [1000, 2000, 3000, 4000, 5000, 6000];
let sueldoUsuario = parseInt(prompt("¿Cual es tu sueldo?"));

function buscarSueldos(salarios, miSueldo) {
  let búsqueda = salarios.filter((salario) => salario >= miSueldo);

  let ordenar = búsqueda.sort((a, b) => a - b);

  console.log("Hay varios salarios mayores a " + miSueldo + ", son estos:");

  for (let i in ordenar) console.log(ordenar[i]);
}

buscarSueldos(sueldos, sueldoUsuario);
