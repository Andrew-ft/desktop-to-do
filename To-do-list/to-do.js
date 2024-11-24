function createList() {
    let inputTask = document.getElementById("to-do-input");
    let taskValue = inputTask.value;
   
    if (taskValue.trim() !== '') {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item');

        let button = document.createElement('input');
        button.type = 'checkbox';
        button.value = 'Remove';
        button.id = "remove-button";
        button.onclick = function() {
            if (button.checked) {
                taskDiv.style.textDecoration = "line-through";
                taskText.style.opacity = 0.5;
            } else {
                taskDiv.style.textDecoration = "none";
                taskText.style.opacity = 1;
            }
        }
        taskDiv.appendChild(button);

        let taskText = document.createElement('div');
        taskText.innerHTML = taskValue;
        taskDiv.appendChild(taskText);

        document.getElementById("list").appendChild(taskDiv);
        inputTask.value = '';
    } else {
        alert("Please enter a task.");
    }

}
