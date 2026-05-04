import { apiFetch } from "../../services/apiFetch";
import type { ITodo } from "../../types/Todo.interface";

interface TaskListItemProps {
  todoItem: ITodo;
}

function TaskListItem({ todoItem }: TaskListItemProps) {
  const { completed, dueDate, id, todo, createdAt, updatedAt } = todoItem;
  const isCompleted = completed ? "Did it" : "Done";

  const handleDeleteTodo = async (id: number) => {
    try {
      const data = await apiFetch(`http://localhost:4000/todo/${id}`, "DELETE");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneTodo = async (todoId: number) => {
    try {
      const todoData = await apiFetch("http://localhost:4000/todo", "GET");
      const lookingTodo = todoData.find((todo: ITodo) => todo.id == todoId);
      console.log(lookingTodo);
      const newTodo = { ...lookingTodo, completed: true };
      console.log(newTodo);
      const sendNewTodo = await apiFetch(
        `http://localhost:4000/todo/${todoId}`,
        "PUT",
        newTodo,
      );
      console.log(sendNewTodo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-1 flex overflow-hidden rounded-xl border border-zinc-300">
      <div className="flex-1 p-1 text-sm capitalize md:p-3">
        <span>{todo}</span>
        <span>-</span>
        <span>unitl:{dueDate}</span>
        <span>-</span>
        <span>createdAt:{createdAt}</span>
      </div>
      <button
        onClick={() => handleDoneTodo(id)}
        className="bg-secondary cursor-pointer p-1 text-sm text-white capitalize md:p-3"
      >
        {isCompleted}
      </button>
      <button className="bg-accent cursor-pointer p-1 text-sm text-white capitalize md:p-3">
        edit
      </button>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="cursor-pointer overflow-hidden bg-red-800 p-1 text-sm text-white capitalize md:p-3"
      >
        delete
      </button>
    </div>
  );
}

export { TaskListItem };
