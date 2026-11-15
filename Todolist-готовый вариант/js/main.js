import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandLers } from "./dom.js";

const todos = getTodosFromLocalStorage() || [];

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandLers(todos);
});
