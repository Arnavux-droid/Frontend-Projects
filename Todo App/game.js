const input = document.getElementById("single-task");
const taskContainer = document.getElementById("tasks");
const form = document.getElementById("task-area");
const h1 = document.querySelector('h1');

form.addEventListener('submit',function(e){
    e.preventDefault();
    addTask();
});

function addTask(){

    const taskText = input.value.trim();
    if(taskText==='')return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add("task"); //Add styling class

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add('delete');
    deleteBtn.onclick = () => li.remove();

    
    li.appendChild(deleteBtn);
    taskContainer.appendChild(li);
    input.value = '';
}


