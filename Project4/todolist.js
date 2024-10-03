const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks =[];
addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText !== "") {
        tasks.push(taskText);
        updatelist();
        
    }
    else{
        alert("Please enter a task")
    }

    function updatelist(){
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
});
