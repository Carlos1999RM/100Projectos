/*
window.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los elementos del menú de navegación
    const navItems = document.querySelectorAll('.nav__item');
    const pages = document.querySelectorAll('.main__page');

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Eliminar la clase 'active' de todos los elementos del menú
            navItems.forEach(nav => nav.classList.remove('nav__item--active'));
            // Agregar la clase 'active' al elemento del menú seleccionado
            item.classList.add('nav__item--active');

            // Ocultar todas las páginas
            pages.forEach(page => page.classList.remove('main__page--active'));
            // Mostrar la página correspondiente al elemento del menú seleccionado
            pages[index].classList.add('main__page--active');
        });
    });
});
*/

window.addEventListener("DOMContentLoaded", (event) => {
  let page = document.querySelectorAll(".main__page");
  let navItems = document.querySelectorAll(".nav__item");

  let desactive = () => {
    page.forEach((page) => {
      page.classList.remove("main__page--active");
    });

    navItems.forEach((page) => {
      navItems.classList.remove("nav__item--active")
    });
  };

  let navigation = () => {
    navItems.forEach((navItems, index) => {
      navItems.addEventListener("click", () => {
        desactive
        page[index].classList.add("main__page--active");
        navItems.classList.add("nav__item--active");
      });
    });
  };

  navigation();
});
