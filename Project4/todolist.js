const inputtask = document.getElementById('taskinput')
const addtaskbutton = document.getElementById('addtaskbutton')
const tasklist = document.getElementById('tasklist')

addtaskbutton.addEventListener('click', function(){
    const taskText  = inputtask.value;
    
    if(taskText!==""){
        const newTask = document.createElement('li');
        newTask.textContent=taskText;

        const removebtn = document.createElement('button');
        removebtn.textContent="Remove";
        removebtn.addEventListener('click', function(){
            tasklist.removeChild(newTask);
        });
        newTask.appendChild(removebtn);
        tasklist.appendChild(newTask);

        inputtask.value="";

    }
})
