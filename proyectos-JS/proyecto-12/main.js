"use strict";

let animales = ["perro", "gato", "león", "tigre", "mapache", "delfín"];

const recorrerMostrar = () => {
  document.write("<h1>Proyecto 12 JS - Carlos Richarte </h1>");

  for (let i = 0; i < animales.length; i++) {
    let parrafo = `<p>Este animal es ${animales[i]}</p>`;

    document.write(parrafo);
  }
};

recorrerMostrar();