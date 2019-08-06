document.addEventListener("DOMContentLoaded", () => {

// New task
  const submitButton = document.getElementById("submit");
  const todoList = document.querySelector("ul")
  const newTask = document.getElementById("new-task-description");

  submitButton.addEventListener("click", function(){

    event.preventDefault();
    let newLi = document.createElement("li");
    newLi.innerText = newTask.value ;
    todoList.append(newLi);

    const newDeleteButton = document.createElement("button");

    newDeleteButton.addEventListener("click", function(){
      item.parentNode.remove();
    })

    newDeleteButton.innerText = 'X';
    newLi.append(newDeleteButton);
    newTask.value = '';
  })

// Delete task
  const deleteButtons = document.querySelectorAll("button")

  function doThisOnceForEach(item){
    item.addEventListener("click", function(){
      item.parentNode.remove();
    })
  }

  deleteButtons.forEach(doThisOnceForEach);
});
