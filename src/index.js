document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
    
form.addEventListener("submit", function(event) {

      let tasks = document.getElementById("tasks");
      let text = document.querySelectorAll("input")[0];
      let li = document.createElement("li");
        
      tasks.appendChild(li).innerText = text.value;
      event.preventDefault();
    })

  
});