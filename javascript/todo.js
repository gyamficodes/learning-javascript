
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





























// //Get fileds
// const taskInput = document.getElementById("task-input");
// const addTaskBtn = document.getElementById('add-task-btn');
// const tasklist = document.getElementById("task-list");

// //function to add task
// function addTask(){
//     const task = taskInput.value.trim();

//     if(task){
//    const li  =  document.createElement('li');
//         li.textContent = task;
//         tasklist.appendChild(li);
//         taskInput.value = "";
//     }
// }


// addTaskBtn.addEventListener('click', addTask);

// tasklist.addEventListener('click',(e) => {
//     if(e.target.tagName === "LI"){
//         e.target.remove();
//     }
// })





