import { apiFetch } from "../../services/apiFetch";
import type { ITodo } from "../../types/Todo.interface";
import { classNames } from "../../utility/classNames";
import { getRandomEmoji } from "../../utility/getRandomEmoji";
import { getTimeDifference } from "../../utility/getTimeDifference";

interface TaskListItemProps {
  todoItem: ITodo;
}

function TaskListItem({ todoItem }: TaskListItemProps) {
  const { completed, dueDate, id, todo } = todoItem;
  const isCompleted = completed ? "Did it" : "mark as Done";

  console.log(dueDate);

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
    <div
      className={classNames(
        completed
          ? "border-gray-3000 cursor-default border bg-gray-200 text-gray-500"
          : "",
        "mt-1 flex overflow-hidden rounded-xl border border-zinc-300",
      )}
    >
      <div className="flex-1 p-1 text-sm capitalize md:p-3">
        <span>{todo}</span>
        <span>-</span>
        <span className="font-bold">
          {completed
            ? `you did it ${getRandomEmoji()} `
            : "you must do it until: "}
        </span>
        <span>{completed ? "" : getTimeDifference(dueDate)}</span>
      </div>
      <button
        onClick={() => handleDoneTodo(id)}
        disabled={completed}
        className={classNames(
          completed
            ? "border border-t-transparent border-b-transparent bg-gray-200 text-gray-500"
            : "bg-amber-300 text-black hover:bg-amber-200",
          "cursor-pointer p-1 text-xs text-wrap capitalize transition-all md:p-3",
        )}
      >
        {isCompleted}
      </button>
      <button
        disabled={completed}
        className={classNames(
          completed
            ? "bg-gray-200 text-gray-500"
            : "bg-accent hover:bg-accent/80 text-white",
          "cursor-pointer p-1 text-sm capitalize md:p-3",
        )}
      >
        edit
      </button>
      <button
        onClick={() => handleDeleteTodo(id)}
        className="cursor-pointer overflow-hidden bg-red-800 p-1 text-sm text-white capitalize hover:bg-red-700/80 md:p-3"
      >
        delete
      </button>
    </div>
  );
}

export { TaskListItem };
