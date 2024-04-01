const addTodo = document.querySelector(".addTodo");

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   const todoInput = document.querySelector(".todo");
//   const timeInput = document.querySelector(".time");
//   const pTodo = document.createElement("p");
//   const pTime = document.createElement("p");
//   const button = document.createElement("button");
//   pTodo.textContent = todoInput.value;
//   pTime.textContent = timeInput.value;
//   button.innerHTML = "Complete";
//   button.addEventListener("click", () => {
//     button.innerHTML = "Completed";
//   });
//   addTodo.appendChild(pTodo);
//   addTodo.appendChild(pTime);
//   addTodo.appendChild(button);
// });

function addRandomTodos(data) {
  data.map((todo) => {
    const pTodo = document.createElement("p");
    const pTime = document.createElement("p");
    const button = document.createElement("button");
    pTodo.textContent = todo.todo;
    pTime.textContent = todo.Desctiption;
    button.innerHTML = "Complete";
    button.addEventListener("click", () => {
      button.innerHTML = "Completed";
    });
    addTodo.appendChild(pTodo);
    addTodo.appendChild(pTime);
    addTodo.appendChild(button);
  });
}

async function getTodo() {
  const response = await fetch("http://localhost:8080/randomTodos");
  const data = await response.json();
  console.log(data);
  addRandomTodos(data);
}

window.onload = getTodo();
