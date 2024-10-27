const actualYear = new Date().getFullYear();

let year = 1999;
let result = 0;

do {
  year = parseInt(prompt("¿En que año naciste?"));
} while (year < 1900);

result = actualYear - year;

alert("Tienes " + result + "  años de vida");
