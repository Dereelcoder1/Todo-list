function currentDate() {
    let dateTime = document.querySelector('.date-time');
    dateTime.innerText = new Date().toLocaleString();
};
setInterval(currentDate, 1000);

let userTodo = document.querySelector('#user-todo');
let userDate = document.querySelector('#user-date');
let userAddButton = document.querySelector('#user-add-button');
let warn = document.querySelector('#warn');
let todos = document.querySelector('.todos');

userAddButton.addEventListener('click', function() {
    if (userTodo.value === "" || userDate.value === "") {
        warn.textContent = "input Valid details"
        
    }
    else{
        warn.textContent = "";
        const todoItem = document.createElement('div');
        todoItem.innerHTML = `<div class="todo">
        <div class="todo-line"></div>
        <h1>${userTodo.value}</h1>
        <p>${userDate.value}</p>
        <h2 class="close">+</h2>
    </div>`;
    todos.appendChild(todoItem);

    userDate.value = "";
    userTodo.value = "";

    const closeBtn = todoItem.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        todoItem.remove();
    });

    };
});

// Clear All Todos 

document.querySelector('.clr').addEventListener('click', function() {
    todos.innerHTML = "";
})