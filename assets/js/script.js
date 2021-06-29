var buttonEl = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    //creates new task item
var listItemE1 = document.createElement("li");
    //styles the task item
listItemE1.className = "task-item";
     //adds the text.
listItemE1.textContent = "This is a new task.";
     //Append this element to the task list.
tasksToDoE1.appendChild(listItemE1);
}

buttonEl.addEventListener("click", createTaskHandler);

