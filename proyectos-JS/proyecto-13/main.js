"use strict";

let concesionario = [
  {
    marca: "mercedes",
    modelos: ["clase a", "clase b", "clase c"],
  },
  {
    marca: "audi",
    modelos: ["a4", "a5", "a8"],
  },
  {
    marca: "renault",
    modelos: ["clio", "capture", "megane"],
  },
];

function mostrar(datos) {
  datos.forEach((marca) => {
    console.log(marca);
  });
}
mostrar(concesionario);
