document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("tasks")
  const taskForm = document.getElementById("create-task-form")

  taskForm.addEventListener("submit", addTaskToList) 
    
  function addTaskToList(event) {
    event.preventDefault()
  
    const newTask = document.getElementById("new-task-description").value
  
    const liTask = document.createElement("li")
    liTask.innerText = newTask
    taskList.append(liTask)
    event.target.reset();
  }

});

