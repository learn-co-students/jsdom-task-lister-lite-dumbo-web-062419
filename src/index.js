document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //console.log ("happy")
  let submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function(event){
    let tasks= document.getElementById("tasks");
    let li= document.createElement("li");

    let userTask = document.querySelector("#new-task-description").value;
    li.innerText= userTask;
    //for the delete function
    //li.addEventListener("contextmenu", deleteMe)
    

    tasks.append(li);
  // console.log (1);

   event.preventDefault();

  })

  
  li.addEventListener("contextmenu", deleteMe)
  listItems = document.querySelectorAll("li")
  listItems.forEach(function(ele){
    ele.addEventListener("contextmenu",deleteMe)
  })

  function deleteMe(event){
    event.preventDefault()
    event.target.remove()
  }



});
