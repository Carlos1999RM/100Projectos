window.addEventListener("DOMContentLoaded", () => {
  let btnPrev = document.querySelector(".btns__prev");
  let btnNext = document.querySelector(".btns__next");
  let progressBar = document.querySelector(".steps__bar");
  let stepsCircle = document.querySelectorAll(".steps__step");

  let progress = 0; // altura barra progreso
  let counter = 1; // contador de pasos

  btnPrev.addEventListener("click", () => {
    counter--;
    progress -= 25;

    if (counter < 1) {
      counter = stepsCircle.length;
    }

    progressBar.style.height = progress + "%";

    // Deshabilita botones
    disableBtns(progress)

    // Activar bordes

    let disableBtns = (progress) => {
      if (progress >= 100) {
        btnNext.setAttribute("disables", "true");
        btnNext.classList.add("disable");
      } else {
        btnNext.removeAttribute("disables");
        btnNext.classList.remove("disable");
      }

      if (progress <= 0) {
        btnPrev.removeAttribute("disables", "true");
        btnPrev.classList.add("disable");
      } else {
        btnPrev.removeAttribute("disable");
        btnPrev.classList.remove("disable");
      }
    };
  });
});
