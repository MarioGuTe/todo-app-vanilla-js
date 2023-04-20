// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const selectContainer = document.querySelector(".select");
const todoFilter = document.querySelector(".filter-todo");
const todoContainer = document.querySelector(".todo-container");
const todoList = document.querySelector(".todo-list");
const items = todoList.children;

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("click", filter);

// Functions

function addTodo(e) {
  e.preventDefault();
  // crear el div contenedor de todos los todos
  const listDiv = document.createElement("div");
  listDiv.classList.add("todo");
  todoList.appendChild(listDiv);

  //   crear nuevo todo
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  listDiv.appendChild(newTodo);
  todoInput.value = "";

  // crear button para tarea completada
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"><i/>';
  completeButton.classList.add("complete-btn");
  listDiv.appendChild(completeButton);
  //   crear un button para borrar todos
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"><i/>';
  listDiv.appendChild(trashButton);
  // event listener para borrar un todo
}

function deleteCheck(e) {
  const item = e.target;
  // si la primera (es decir index 0) clase de item es "trash-btn"
  // parentElement nos lleva un nivel más arriba del target de item (su elemento padre)
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  } else if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filter(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
          break;
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
