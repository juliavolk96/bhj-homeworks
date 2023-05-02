// Находим необходимые элементы на странице
const tasksForm = document.getElementById("tasks__form");
const tasksInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

function addTask(title) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
    <div class="task__title">
      ${title}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;
  tasksList.appendChild(task);
  const removeBtn = task.querySelector(".task__remove");
  removeBtn.addEventListener("click", () => {
    task.remove();
  });
}

tasksForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = tasksInput.value.trim();
  if (title) {
    addTask(title);
    tasksInput.value = "";
  }
});

tasksInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    tasksForm.dispatchEvent(new Event("submit"));
  }
});