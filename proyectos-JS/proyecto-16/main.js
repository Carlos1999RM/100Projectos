window.addEventListener("DOMContentLoaded", () => {
  console.log(screen.width, screen.height, window.location.href);

  let data = document.querySelector("#data");

  data.innerHTML += "<h2>Anchura: " + window.innerWidth + "pixeles </h2>";
  data.innerHTML += "<h2>Altura: " + window.innerHeight + "pixeles </h2>";
  data.innerHTML += "<h2>URL: " + window.location.href + " </h2>";

  window.open("https://www.instant-gaming.com/en/", "blank");
});
