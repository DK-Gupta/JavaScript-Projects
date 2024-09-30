const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Add remove button for each task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(removeBtn);
        taskList.appendChild(newTask);

        // Clear input field
        taskInput.value = "";
    }
    else{
        alert("Please enter a task")
    }
});
