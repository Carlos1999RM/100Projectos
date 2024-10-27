"use strict";
let marca = "BMW",
  velocidad = 200,
  stock = true,
  modelos = ["A1", "A2", "A3"];

let frase = `Tenemos coches de la marca ${marca},
  van a una velocidad máxima de ${velocidad}km/h.
  
  Disponemos de estos modelos en stock ${stock}: <br/>`;

modelos.forEach((modelo) => {
  frase += `${modelo} <br/>`;
});

let caja = document.querySelector("#caja");
caja.innerHTML = frase;
