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

// Get desire Todo
export const getDesireTodo = (todoId: number) => {
  return apiRequests.get(`/todo/${todoId}`);
};

// Done-handler todo
export const doneHandler = (todoId: number, newTodo: ITodo) => {
  return apiRequests.put(`/todo/${todoId}`, newTodo);
};
// update todo
export const updateTodo = (id: number, todo: ITodo) => {
  return apiRequests.put<ITodo>(`/todo/${id}`, todo);
};
