var input = document.getElementById("input");
var todos = [];
var renderTodo = document.getElementById("renderTodo");
var mainDiv = document.getElementById("mainDiv");
var editDiv = document.getElementById("editDiv");
var editInput


function addTodo(){
if(!input.value) return ;


todos.push(input.value);
// console.log(todos);
input.value = '';

readTodo();
}

function readTodo(isDeleteAll){
    renderTodo.innerHTML = ``;

    if(isDeleteAll) return;


    console.log(todos)
    for(var i = 0 ; i < todos.length ; i++){

        renderTodo.innerHTML += `<li><span class="added-todo">${todos[i]}</span >
        <span><button onclick="editTodo(${i})"><i class="fa-solid fa-pen-to-square btn-bg-color"></i></button><button onclick="deleteTodo(${i})"><i class="fa-solid fa-trash btn-bg-color"></i></button></span></li>`;
    }
}


function editTodo(indexNumber){

    mainDiv.className = "mainDivChange";
    editDiv.className = "editDivChange";
    
    
    editDiv.innerHTML = `<div class="bg-image" style =""></div><div class = "editInput "><div class="input"><input type ="text" class = "editInputBox" id = "editInput" placeholder = "Edit"/><button class="btn-bg-color btn-add" onclick = "editInputSave(${indexNumber})"> Edit</button> </div><div class = "editTextOne">${todos[indexNumber]}</div></div>`
    
    
    
    
    

    // todos[indexNumber] = prompt("write updated value");
    readTodo();
}

function deleteTodo(indexNumber){
    
    todos.splice(indexNumber,1);
    readTodo();
}


function deleteAllTodo(){
    todos = [];
    readTodo(true);
}





function   editInputSave(i)  {
    editInput = document.getElementById('editInput');
    todos[i] = editInput.value;
    mainDiv.className = "mainDiv";
    editDiv.className = "editDiv";
    if(!todos[i]) return;
    readTodo();
}
