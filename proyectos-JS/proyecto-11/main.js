"use strict";
let frase = "Este curso tiene muchos proyectos web";

let palabra = prompt(
  `En esta frase "${frase}" ¿qué palabra querrías reemplazar?`
);

let reemplazo = prompt(
  `Has elegido reemplazar la palabra "${palabra}" ¿por que palabra la quieres sustituir?`
);

function reemplazar(palabraOriginal, palabraReemplazo) {
  let busqueda = frase.search(palabraOriginal);

  if (busqueda && busqueda != -1) {
    let fraseFinal = frase.replace(palabraOriginal, palabraReemplazo);
  } else {
    let fraseFinal = "Esa palabra no existe";
  }

  return fraseFinal;
}

alert(reemplazar(palabra, reemplazo));
