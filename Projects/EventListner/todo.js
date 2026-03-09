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
        // saveTask();
        displayTask();
    }
    
 
}

///function to delete task
const removeTask = (i) => {
    tasks.splice(i, 1)
    //   saveTask();
    displayTask();
}



// clear all task