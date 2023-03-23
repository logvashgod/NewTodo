const todoNode = document.querySelector(".js-todos");
const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-button");

let todos = [];

function addTodo(text) {
  const todo = {
    text,
    done: false,
    id: `${Math.random()}`,
  };

  todos.push(todo);
}

function deleteTodo(id) {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.done = true;
    }
  });
}

function render() {
  let html = "";

  todos.forEach((todo) => {
    if (todo.done) {
      return;
    }
    html += `
    <div>${todo.text}</div>
    `;
  });

  todoNode.innerHTML = html;
}

btnNode.addEventListener("click", () => {
  const text = inputNode.value;

  addTodo(text);

  render();
});
