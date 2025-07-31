let todoInput=document.querySelector(".todoTitle");
let todoForm=document.querySelector("#todoForm");
let todoContainer=document.querySelector(".todoContainer");

todoArray=[]
    fetch("https://localhost:5000/todos")
    .then(response => response.json())
    .then(data => {
        todoArray=data
        showAllTodos(todoArray);
    })
todoForm.addEventListener("submit", function(e) {
     e.preventDefault();
    let value=inputValue();
    let newTodo={
       id:Math.floor(Math.random*10000),
       title:value  
    }
    todoArray.push(newTodo);
    showAllTodos(todoArray);
    todoInput.value="";
    addToDo(newTodo)
    todoInput.value=""
});
function inputValue() {
    return todoInput.value;
}
function addToDo(todo){
    let li =document.createElement("li");
    li.innerHTML=`<div>
                <input type="checkbox" name="" id="check1">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">+</button>
                    <button class="delete">-</button>
                    <p>well done</p>
                </div>
            </div>`
          todoContainer.appendChild(li); 
}
function showAllTodos(todoArray){
    todoContainer.innerHTML = "";
    todoArray.forEach(todo=>{
        addToDo(todo);
    })
}
