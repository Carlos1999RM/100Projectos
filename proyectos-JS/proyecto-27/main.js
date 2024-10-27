window.addEventListener("DOMContentLoaded", () => {
  let left = document.querySelector(".main__article--left");
  let right = document.querySelector(".main__article--right");

  left.addEventListener("mouseenter", () => {
    left.classList.add("active");
    right.classList.add("inactive");
  });

  left.addEventListener("mouseleave", () => {
    left.classList.remove("active");
    right.classList.remove("inactive");
  });

  right.addEventListener("mouseenter", () => {
    right.classList.add("active");
    left.classList.add("inactive");
  });

  right.addEventListener("mouseleave", () => {
    right.classList.remove("active");
    left.classList.remove("inactive");
  });
});
