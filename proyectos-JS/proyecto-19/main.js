window.addEventListener("DOMContentLoaded", (event) => {
  // Definir variables seleccionando elementos del DOM
  let articles = document.querySelector(".layout__articles");
  let title = document.querySelector("#title");
  let subtitle = document.querySelector("#subtitle");
  let description = document.querySelector("#description");
  let form = document.querySelector(".form__create");

  let new__articles = [];

  function createArticle() {
    form.addEventListener("submir", (e) => {
      e.preventDefault();

      if (title.value && subtitle.value && description.value) {
        let article = {
          title: title.value,
          subtitle: subtitle.value,
          description: description.value,
        };

        new__articles.push(article);
      }

      console.log(new__articles);
    });
  }

  createArticle();
});
