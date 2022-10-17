document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault(event)
});

let createTaskForm = document.getElementById("create-task-form")

createTaskForm.addEventListener('click', submitTask)

function submitTask(event) {
  let ul = document.getElementById("tasks")
  let li = document.createElement("li")
  li.textContent = `${event.target }`
}