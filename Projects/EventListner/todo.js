let tasks = [];

//function nto display task

const displayTask = () => {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += `<li>${tasks[i]} <button  onclick="removeTask(${i})">Delete</button></li>`;
    // document.getElementById("list").innerHTML = html;
  }
  document.getElementById("list").innerHTML = html;
};



//function to add task
const addTask = () => {
    let taskInput = document.getElementById("task");
    let text = taskInput.value;
    if(text !== ""){
       tasks.push(text);
        displayTask();
        text.value = "";
        saveTask();
        displayTask();
    }
    
 
}

///function to delete task
const removeTask = (i) => {
    tasks.splice(i, 1)
      saveTask();
    displayTask();
}



// clear all task
const  clearAll = () => {
 tasks.splice(0, tasks.length);
   saveTask();
 displayTask();
}


// save task to local storage
const saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load task from local storage
const loadTask = () => {
    let save = localStorage.getItem("tasks");
    if(save !== null){
        tasks = JSON.parse(save);
    }
};


loadTask();
displayTask();
