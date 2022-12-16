const form = document.getElementById('create-task-form')
form.addEventListener("submit", (event) => {
  event.preventDefault()
  let description = document.getElementById('new-task-description')
  let list = document.getElementById('tasks')
  let task = description.value  
  list.append(task)
  let button = document.createElement("button")
  button.textContent = "x"
  button.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
  list.appendChild(button)
})

