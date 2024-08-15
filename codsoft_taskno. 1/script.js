let lists = document.querySelector(".list");
let taskfeild = document.querySelector("#tasks");
let addbtn = document.querySelector("#addbtn");
let listitems = document.querySelector(".listitems");

function addtask(){
    if(taskfeild.value ===""){
        alert("please enter a task");
    }
    else{
        const li = document.createElement('li');
            li.innerHTML = `<span>${taskfeild.value}</span> <button id='editTask' onclick="editTask(this)">Edit</button><button id='dltTask' onclick = "removetask(this)"> Remove </button>`;
            listitems.appendChild(li);
            taskfeild.value = "";
            listitems.classList.remove("hide");
    }

}

function removetask(button){
    const task = button.parentNode;
    task.parentNode.removeChild(task);
    if (listitems.children.length === 0) {
        listitems.classList.add('hide');
    }
}

function editTask(button){
    let task = button.parentNode;
    const span = task.querySelector("span");
    let currentText = span.textContent;
    span.innerHTML = `<input id='newtext' type = "text" value ='${currentText}'>`;
    const input = document.querySelector("#newtext");
    button.textContent ="Save";
    button.onclick = () => saveTask(button);  


    function saveTask(button) {
        const newtext = input.value;
       span.innerHTML = newtext;
       if (input.value === "") {
        alert("Please enter a task");
        listitems.classList.add("hide");
    }
        button.textContent = "Edit";
        button.onclick = () => editTask(button);
    
    }
}






