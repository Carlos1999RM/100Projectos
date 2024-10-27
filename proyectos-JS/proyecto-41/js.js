"use strict";
window.addEventListener("load", (event) => {
  let articles = document.querySelectorAll(".article__article");

  let show = () => {
    const windowHeight = window.innerHeight;

    articles.forEach((article) => {
      let articleHeight = article.getBoundingClientRect().top;

      if (articleHeight < windowHeight) {
        article.classList.add("article__article--show");
      } else {
        article.classList.remove("article__article--show");
      }
    });
  };

  show();

  window.addEventListener("scroll", show);
});
