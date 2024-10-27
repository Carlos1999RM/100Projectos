"use strict";

let tableContainer = document.querySelector(".tables");

let result = 0;

for (let i = 1; i <= 10; i++) {
  tableContainer.innerHTML += `<div class="tables__item">
     <h2 class="tables__title">
         Tabla del ${i}
     </h2>

     <ul class="tables__list" data-id=${i}>
     </ul>
    </div>
    `;

  // Bucle para sacar números para las operaciones tablas
  for (let n = 1; n <= 10; n++) {
    // Calcular resultado de la operación
    result = i * n;

    // Sacar caja donde mostrar operaciones
    let list = document.querySelectorAll(".tables__list");

    // Imprimir todas las operaciones
    list.forEach((list) => {
      let id = list.getAttribute("data-id");
      // let id = i;

      if (id == i) {
        list.innerHTML += `<li class="list__item">${
          i + " x " + n + " = " + result
        }</li>`;
      }
    });
  }
}
