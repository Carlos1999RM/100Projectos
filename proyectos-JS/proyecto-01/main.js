"use strict";
let nombre = "Carlos";
let surname = "Richarte";
let age = 25;
let country = "Spain";
let knowledge = ("HTML", "CSS", "JS", "PHP");

console.log(`Hola soy ${nombre} ${surname} tengo ${age} años, vivo en ${country} y tengo los siguientes conocimientos:
${knowledge[0]}, ${knowledge[1]}, ${knowledge[2]}, ${knowledge[3]}.`);

age = 50;
knowledge.push("react");

console.log("Ahora tengo " + age + " años y he aprendido " + knowledge[4]);
