document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".main__form");
  const input = document.querySelector(".form__input");
  const taskList = document.querySelector(".form__list");

  // Function to add a new task
  function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.classList.add("list__item");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("list__task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task__check");

    const taskParagraph = document.createElement("p");
    taskParagraph.classList.add("task__text");
    taskParagraph.textContent = taskText;

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash", "list__delete");

    // Append elements
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskParagraph);
    taskDiv.appendChild(deleteIcon);
    listItem.appendChild(taskDiv);
    taskList.appendChild(listItem);

    // Add event listener to delete task
    deleteIcon.addEventListener("click", () => {
      listItem.remove();
    });

    // Add event listener to mark task as completed
    checkbox.addEventListener("change", () => {
      taskParagraph.classList.toggle("task__completed", checkbox.checked);
    });
  }

  // Add task on form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      input.value = "";
    }
  });

  // Initial tasks for demonstration
  const initialTasks = [
    "Tarea de prueba 1",
    "Tarea de prueba 2",
    "Tarea de prueba 3",
    "Tarea de prueba 4",
  ];
  initialTasks.forEach((task) => addTask(task));
});
