import type { ITodo } from "../../../../types/Todo.interface";
import apiRequests from "../../configs/config";

// add todo
export const addTodos = (todo: ITodo) => {
  return apiRequests.post("/todo", todo);
};

// remove todo
export const removeTodo = (todoId: number) => {
  return apiRequests.delete(`/todo/${todoId}`);
};

// Get Todo

export const getTodo = () => {
  return apiRequests.get("/todo");
};

// Done-handler todo
export const doneHandler = (todoId: number, newTodo: ITodo) => {
  return apiRequests.put(`/todo/${todoId}`, newTodo);
};
