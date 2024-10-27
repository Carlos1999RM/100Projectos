document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(".nav__btn");
    let listNav = document.querySelector(".layout__list");

    btn.addEventListener("click", () => {
        btn.classList.toggle("nav__btn--active");
        listNav.classList.toggle("layout__list--show");
    });

    // Toggle active page
    const listItems = document.querySelectorAll('.list__item');
    const pages = document.querySelectorAll('.pages__page');

    listItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            pages.forEach(page => page.classList.remove('page--active'));
            pages[index].classList.add('page--active');
            listNav.classList.remove('layout__list--show');
            btn.classList.remove('nav__btn--active');
        });
    });

    // Add click functionality to images
    const pageImages = document.querySelectorAll('.pages__page');

    pageImages.forEach((page, index) => {
        page.addEventListener('click', () => {
            pages.forEach(p => p.classList.remove('page--active'));
            pages[index].classList.add('page--active');
        });
    });
});
