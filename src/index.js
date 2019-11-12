document.addEventListener("DOMContentLoaded", function() {

  //we need to grab user input
  const taskInput = document.querySelector("#new-task-description")
  //console.log(taskDesc)

  //we need to grab a form
  const taskForm = document.querySelector("#create-task-form")
  //console.log(taskForm)

  //listen to when the form is submitted

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("yeeesssh")
    const newTask = taskInput.value

  //where do I want to the user input I just grabbed
  //I want to add it to the My Todo list.

  const myList = document.querySelector("#tasks")

  //we need a new line for each task
  const newLi = document.createElement('li')

  //right now, 'li' is empty, but we want to add the space for innerText
  newLi.innerText = newTask

  //to delete the task, I need to add a delete button
  const deleteButton = document.createElement('button')
  //how is it going to show up?
  deleteButton.innerText = 'Delete Me'

  //we need to be able to add a new todo to the ul
  myList.appendChild(newLi)
  //also need a delete button 
  newLi.appendChild(deleteButton)
  deleteButton.addEventListener('click', function(e) {
    newLi.remove()
    e.preventDefault()
  })

  taskForm.reset()

  })

});
