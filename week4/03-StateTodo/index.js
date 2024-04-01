let globalId = 1;
let todoState = [];
let oldTodoState = [];

function addTodoToDom() {}

function removeTodoFromDom(todo) {}

function updateTodoInDom(oldTodo, newTodo) {}

function updateState(newTodos) {
  // calculate the diff b/w newTodos and oldTodos.
  // More specifically, find out what todos are -
  // 1. added
  // 2. deleted
  // 3. updated
  const added = [];
  const deleted = [];
  const updated = [];
  // calculate these 3 arrays
  // call addTodo, removeTodo, updateTodo functions on each of the
  // elements
  oldTodoState = newTodos;
}

function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  todoState.push({
    title: title,
    description: description,
    id: globalId++,
  });
  updateState(todoState);
}
