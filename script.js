const input = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", function () {

    const taskText = input.value;

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    const taskDiv = document.createElement("div");

    taskDiv.textContent = taskText;

    
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    input.value = "";

});