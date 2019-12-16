const inputToDo = document.getElementById("new-task-description")
const todoSubmit = document.getElementById("create-task-form")
const list = document.getElementById("tasks")
document.addEventListener("DOMContentLoaded", () => {
  // I just type in the text box
  // When i click on the submit, add whatever added to Todos
  
});


todoSubmit.addEventListener('submit', function(event){
  event.preventDefault();

  // let li = document.createElement("li")
  // li.innerText = inputToDo.value
  // list.appendChild(li)
  
  list.innerHTML += `<li>${inputToDo.value}</li>`
  inputToDo.value = null
})