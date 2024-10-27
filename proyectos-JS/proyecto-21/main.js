window.addEventListener("DOMContentLoaded", (e) => {
  // Seleccionar elementos del DOM

  let inventarioDom = document.querySelector(".main__inventario");
  let cajas = document.querySelector(".inventario__caja");
  let estanteriaDom = document.querySelector(".almacen__estanteria");

  console.log(inventarioDom, cajas, estanteriaDom);

  // Poner un id único a cada caja movible

  cajas.forEach((caja, i) => {
    caja.setAttribute("id", "caja" + i);

    caja.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("id", e.target.id);
    });
  });

  // Establecer cada hueco de la estantería como un hueco
  // dónde puedo soltar un elemento

  estanteria.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  estanteria.addEventListener("drop", (e) => {
    e.preventDefault();

    let cajaId = e.dataTransfer.getData("id");

    if (cajaId && cajaId != "") {
      let caja = document.querySelector("#" + cajaId);

      e.target.appendChild(caja);
      this.style.boxShadow = "none";
    }
  });
});
