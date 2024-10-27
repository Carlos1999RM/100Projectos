window.addEventListener("DOMContentLoaded", (event) => {
  let card = document.querySelector(".layout__card");
  let header = document.querySelector(".card__header");
  let description = document.querySelector(".content__description");
  let btn = document.querySelector(".content__btn");

  btn.addEventListener("click", () => {
    card.Style.boxShadow = "0px 0px 14px black";
    header.Style.background = "#1B62CA";
    description.Style.opacity = 0.8;
    btn.Style.backgroundColor = "white";
    btn.Style.color = "#1B62C";
  });
});
