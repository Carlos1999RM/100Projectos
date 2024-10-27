document.addEventListener("DOMContentLoaded", () => {
  const colorBoxes = document.querySelectorAll(".color-box");
  const colorValue = document.getElementById("color-value");

  colorBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const selectedColor = box.getAttribute("data-color");
      colorValue.textContent = `Color seleccionado: ${selectedColor}`;
    });
  });
});

/*
Explicación

HTML:

Se define una estructura básica con un div para contener la paleta de colores (color-palette) y otro div para mostrar el
color seleccionado.
Cada div dentro de la paleta tiene una clase color-box y un data-color con el valor del color.

CSS:

Se definen estilos para centrar el contenido en la página y darle un aspecto básico.
Las color-box tienen un tamaño fijo, un cursor de puntero, y un efecto de transformación al pasar el ratón sobre ellas.

JavaScript:

Se espera a que el DOM esté completamente cargado antes de ejecutar el script.
Se añaden event listeners a cada color-box para actualizar el contenido de color-value con el color seleccionado al
hacer clic.
Este es un ejemplo básico que puedes ampliar según tus necesidades, como añadir más colores, efectos visuales
adicionales o interacción más compleja.
*/
