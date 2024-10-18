
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = false;
recognition.lang = 'en-US';

document.querySelector('#voicerecorder').addEventListener('click', () => {
    recognition.start();
    document.querySelector('#feedback').textContent = 'listening......';
});

recognition.addEventListener('result', (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    document.querySelector('#feedback').textContent = `You said: "${command}"`;
    processCommand(command);
});

document.querySelector('#addingtask').addEventListener('click', () => {
    const task = document.querySelector('#inputtask').value.trim();
    if (task) {
        addTask(task); 
        document.querySelector('#inputtask').value = ''; 
    } else {
        alert('Please enter a task or use voice commands!');
    }
});


function processCommand(command) {
    if (command.includes('add')) {
        const task = command.replace('add', '').trim();
        addTask(task);
    } else if (command.includes('remove')) {
        const task = command.replace('remove', '').trim();
        removeTask(task);
    } else {
        document.querySelector('#feedback').textContent = 'Command not recognized.';
    }
}



function addTask(task) {
    const taskList = document.querySelector('#tasklist');
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskList.appendChild(taskItem);
}

function removeTask(task) {
    const taskListItems = document.querySelectorAll('#tasklist li');
    taskListItems.forEach((taskItem) => {
        if (taskItem.textContent.toLowerCase() === task.toLowerCase()) {
            taskItem.remove();
        }
    });
}

function readTasks() {
    const taskItems = document.querySelectorAll('#tasklist li');
    if (taskItems.length === 0) {
        const utterance = new SpeechSynthesisUtterance("You have no tasks in your list.");
        window.speechSynthesis.speak(utterance);
        return;
    }

    let tasksText = "Your tasks are: ";
    taskItems.forEach((taskItem, index) => {
        tasksText += `${index + 1}. ${taskItem.textContent}. `;
    });

    const utterance = new SpeechSynthesisUtterance(tasksText);
    window.speechSynthesis.speak(utterance);
}