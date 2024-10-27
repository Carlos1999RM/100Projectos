"use strict";

let sueldo = parseInt(prompt("¿Cuánto cobras?", 0));
let resultado = document.getElementById("resultado");

switch (true) {
  case 500:
    resultado.innerHTML = "Trabajas a media jornada o puede que más";
    break;

  case 1000:
    resultado.innerHTML = "Sueldo normalito";
    break;

  case 1700:
    resultado.innerHTML = "Por encima de la media";
    break;

  case 2500:
    resultado.innerHTML = "Sueldo en condiciones";
    break;

  default:
    resultado.innerHTML = "No cobras na";
    break;
}
