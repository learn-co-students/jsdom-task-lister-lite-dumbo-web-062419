document.addEventListener("DOMContentLoaded", () => {
  // your code here
  submitButton = document.querySelector("#submit-button")
  submitButton.addEventListener("click", function(e){
    tasks = document.querySelector("#tasks");
    newTask = document.querySelector("#new-task-description").value
    tasks.innerHTML += `<li>${newTask}</li>`
    e.preventDefault();
  });
});
