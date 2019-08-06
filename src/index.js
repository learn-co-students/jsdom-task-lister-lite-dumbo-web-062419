const ul = document.getElementById("tasks");

const submitButton = document.getElementById("submitButton");


submitButton.addEventListener("click", function(event){
  event.preventDefault();
  const li = document.createElement("li");
  let newTask = document.getElementById("new-task-description");
  li.innerText = newTask.value;
  ul.append(li);
})

// const delButton = document.getElementById("delButton")

// delButton.addEventListener("click", deleteAll);

// function deleteAll(){
//   const lis = document.querySelectorAll("li");
//   lis.forEach(function(item){
//     item.remove;
//   }) 
// }


