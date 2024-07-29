
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const taskList = document.querySelector("#task-list");


 function addTask(){
    task = taskInput.value.trim();

    if(task){
        let li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
        taskInput.value = "";
    }
 }


addTaskBtn.addEventListener('click', addTask);

taskList.addEventListener('click',(e) => {
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
})



































