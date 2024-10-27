window.addEventListener("DOMContentLoaded", () => {
  HTMLFormControlsCollection.forEach((formControl) => {
    let label = formControl.firstElementChild;
    let input = formControl.lastElementChild;

    input.addEventListener("focus", () => {
      label.classList.remove("blur");
      label.classList.add("focus");
    });

    input.addEventListener("blur", () => {
      if (input.value.trim() == "") {
        label.classList.remove("focus");
        label.classList.add("blur");
      }
    });
  });
});
