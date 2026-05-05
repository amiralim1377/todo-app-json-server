import { useWindowSize } from "../../hook/useWindowSize";

import type { ITodo } from "../../types/Todo.interface";
import { classNames } from "../../utility/classNames";
import { getRandomEmoji } from "../../utility/getRandomEmoji";
import { getTimeDifference } from "../../utility/getTimeDifference";
import NewCustomModal from "../ui/newCustomModal";
import { EditTodoForm } from "../EditTodoForm";
import { isCompleted } from "./utility/isCompleted";
import { useTaskActions } from "./custom-hook/useTaskActions";

export interface TaskListItemProps {
  todoItem: ITodo;
}

function TaskListItem({ todoItem }: TaskListItemProps) {
  const { completed, dueDate, id, todo } = todoItem;
  const { width } = useWindowSize();
  const {
    handleCloseModal,
    handleOpenModal,
    handleDeleteTodo,
    handleDoneTodo,
    openModal,
  } = useTaskActions(todoItem);

  // Helper variables for cleaner tsx
  const isMobile = width <= 320;
  const baseContainerClass =
    "mt-1 flex overflow-hidden rounded-xl border border-zinc-300";
  const completedContainerClass =
    "border-gray-300 cursor-default bg-gray-200 text-gray-500";

  return (
    <>
      <div
        className={classNames(
          baseContainerClass,
          completed ? completedContainerClass : "",
        )}
      >
        <div className="flex-1 p-1 text-xs capitalize sm:text-sm md:p-3">
          <span>{todo}</span>
          <span>-</span>
          <span className="font-bold">
            {completed
              ? `you did it ${getRandomEmoji()} `
              : isMobile
                ? "until:"
                : "you must do it until: "}
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
            {isCompleted(completed, width)}
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
          onClick={() => handleOpenModal(id as number)}
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
      {openModal && (
        <NewCustomModal
          isOpen={openModal}
          title="edit"
          onClose={handleCloseModal}
          className="w-full md:max-w-225"
        >
          <EditTodoForm />
        </NewCustomModal>
      )}
    </>
  );
}

export { TaskListItem };
