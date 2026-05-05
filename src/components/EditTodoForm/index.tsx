import { useEffect, useId, useState } from "react";
import type { ITodo } from "../../types/Todo.interface";
import { getDesireTodo } from "../../services/Axios/Requests/todos/Todo";
import { useTodoForm } from "../../hook/useTodoForm";
import { dueDateString } from "../../utility/dueDateString";
import { getTodayDateString } from "../../utility/getTodayDateString";

function EditTodoForm() {
  const [editTodo, setEditTodo] = useState<ITodo>();
  const todoId = useId();
  const dateId = useId();
  const { handleSubmit, register, errors, onSubmit } = useTodoForm({
    initialTodo: editTodo,
    mode: "edit",
  });

  useEffect(() => {
    const getEditTodo = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        if (id) {
          const { data: todo } = await getDesireTodo(Number(id));

          setEditTodo(todo);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getEditTodo();
  }, []);

  if (!editTodo) return <p>Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-1 justify-items-center gap-3 rounded-md border border-zinc-500 bg-white p-3 md:grid-cols-[2fr_2fr_1fr] md:p-6"
    >
      <div className="relative flex w-full flex-col gap-1 pb-4 text-zinc-500 capitalize md:pb-5">
        <label className="hidden md:block" htmlFor={todoId}>
          write your todo below
        </label>
        <input
          id={todoId}
          defaultValue={editTodo?.todo}
          type="text"
          placeholder="add Todo here"
          className="rounded-md border border-zinc-600 px-2 py-2 text-xs placeholder:text-zinc-500 md:text-base"
          {...register("todo")}
        />
        {errors.todo && (
          <span className="absolute bottom-0 left-0 text-left text-xs text-[10px] text-red-500 md:text-xs">
            {errors.todo.message}
          </span>
        )}
      </div>

      <div className="relative flex w-full flex-col gap-1 pb-4 text-zinc-500 capitalize md:pb-5">
        <label className="hidden text-nowrap md:block" htmlFor={dateId}>
          when should Todo be Done?
        </label>
        <input
          id={dateId}
          type="date"
          defaultValue={dueDateString(editTodo.dueDate)}
          min={getTodayDateString()}
          className="w-full rounded-md border border-zinc-600 px-4 py-2 text-xs placeholder:text-zinc-500 md:text-base"
          {...register("dueDate")}
        />
        {errors.dueDate && (
          <span className="absolute bottom-0 left-0 text-[10px] text-red-500 md:text-xs">
            {errors.dueDate.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-secondary mt-0 h-8 w-full cursor-pointer justify-self-end rounded-md text-xs text-white capitalize transition-colors md:mt-7 md:h-11 md:w-2/3"
      >
        update
      </button>
    </form>
  );
}

export { EditTodoForm };
