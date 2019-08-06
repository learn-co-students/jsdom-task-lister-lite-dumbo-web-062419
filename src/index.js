// Create task
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.querySelectorAll("input")[1]
  taskInput.addEventListener("click", function(event) {
    event.preventDefault()
    const taskText = document.getElementById("new-task-description");
    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.innerText = taskText.value;
    taskList.append(li);
  })
});

// Delete task
