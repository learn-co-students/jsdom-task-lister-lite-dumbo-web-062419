const inputToDo = document.getElementById("new-task-description")
    const todoSubmit = document.getElementById("create-task-form")
    const list = document.getElementById("tasks")
  
document.addEventListener("DOMContentLoaded", () => {

  todoSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    
  
    // ONE WAY OF DOING (WITH INNERHTML)
  // let li = document.createElement("li")
    // li.innerText = inputToDo.value
    // list.appendChild(li)
  

    // ANOTHER WAY OF DOING 
  
    //STEPS
    // First Save the Input text area to variable; Helps with getting the value for input field
    // Second Save the Submit button of the input to variable; Help us to add event listener on that
    // Third Save the list <ul>  tag to variable, because you will need to add li tags on side that later
    // Fifth take the list variable and add the <li> tags to its innerHTML += and inside those li tags ${inputToDo.value}
    list.innerHTML += `<li>${inputToDo.value}</li>`
    inputToDo.value = null
  })
});

