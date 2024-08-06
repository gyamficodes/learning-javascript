
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




document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons and dropdown contents
    const buttons = document.querySelectorAll('[id^=ButtonPlay]');
    const contents = document.querySelectorAll('[id^=mycontent]');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the event from bubbling up

            const contentId = button.id.replace('ButtonPlay', 'mycontent');
            const content = document.getElementById(contentId);

            // Hide all other contents
            contents.forEach(c => {
                if (c !== content) {
                    c.classList.add('hidden');
                }
            });

            // Toggle visibility of the clicked content
            content.classList.toggle('hidden');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('[id^=ButtonPlay]') && !event.target.closest('[id^=mycontent]')) {
            // Hide all contents when clicking outside
            contents.forEach(content => {
                content.classList.add('hidden');
            });
        }
    });
});

















