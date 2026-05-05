import { useWindowSize } from "../../hook/useWindowSize";
import {
  doneHandler,
  getTodo,
  removeTodo,
} from "../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../types/Todo.interface";
import { classNames } from "../../utility/classNames";
import { getRandomEmoji } from "../../utility/getRandomEmoji";
import { getTimeDifference } from "../../utility/getTimeDifference";

interface TaskListItemProps {
  todoItem: ITodo;
}

function TaskListItem({ todoItem }: TaskListItemProps) {
  const { completed, dueDate, id, todo } = todoItem;
  const { width } = useWindowSize();

  const isCompleted = completed
    ? "Did it"
    : width < 500
      ? "Done"
      : "mark as Done";

  const handleDeleteTodo = async (id: number) => {
    try {
      await removeTodo(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneTodo = async (todoId: number) => {
    try {
      const { data: todoData } = await getTodo();
      const lookingTodo = todoData.find((todo: ITodo) => todo.id == todoId);
      if (lookingTodo) {
        const newTodo = { ...lookingTodo, completed: true };
        await doneHandler(todoId, newTodo);
      }
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
      <div className="flex-1 p-1 text-xs capitalize sm:text-sm md:p-3">
        <span>{todo}</span>
        <span>-</span>
        <span className="font-bold">
          {completed
            ? `you did it ${getRandomEmoji()} `
            : width > 320
              ? "you must do it until: "
              : "until:"}
        </span>
        <span>{completed ? "" : getTimeDifference(dueDate)}</span>
      </div>
      {!completed && (
        <button
          onClick={() => handleDoneTodo(id as number)}
          disabled={completed}
          className={classNames(
            completed
              ? "border border-t-transparent border-b-transparent bg-gray-200 text-gray-500"
              : "bg-amber-300 text-wrap text-black hover:bg-amber-200",
            "cursor-pointer p-1 text-xs capitalize transition-all md:p-3",
          )}
        >
          {isCompleted}
        </button>
      )}

      <button
        disabled={completed}
        className={classNames(
          completed
            ? "cursor-not-allowed border-l border-l-zinc-500 bg-gray-200 text-gray-500"
            : "bg-accent hover:bg-accent/80 cursor-pointer text-white",
          "p-1 text-sm capitalize md:p-3",
        )}
      >
        edit
      </button>

      <button
        onClick={() => handleDeleteTodo(id as number)}
        className={classNames(
          completed ? "" : "",
          "cursor-pointer overflow-hidden bg-red-800 p-1 text-sm text-white capitalize hover:bg-red-700/80 md:p-3",
        )}
      >
        delete
      </button>
    </div>
  );
}

export { TaskListItem };
