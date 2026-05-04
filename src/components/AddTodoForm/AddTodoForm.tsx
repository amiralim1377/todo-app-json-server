import { useId } from "react";
import { apiFetch } from "../../services/apiFetch";
import { useForm, type SubmitHandler } from "react-hook-form";

type TodoObjType = {
  todo: string;
  completed: boolean;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

function AddTodoForm() {
  const todoId = useId();
  const dateId = useId();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoObjType>();
  const today = new Date().toISOString().split("T")[0];

  const onSubmit: SubmitHandler<TodoObjType> = (data) => {
    const { todo, dueDate } = data;
    const localDate = new Date(`${dueDate}T23:59:59`);

    const todoObj: TodoObjType = {
      todo,
      completed: false,
      dueDate: localDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    apiFetch("http://localhost:4000/todo", "POST", todoObj)
      .then((data) => console.log(data))
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid min-h-24 w-full grid-cols-1 justify-items-center gap-1 md:grid-cols-[2fr_2fr_1fr]"
      >
        <div className="flex w-full flex-col gap-1 text-zinc-500 capitalize">
          <label className="hidden md:block" htmlFor={todoId}>
            write your todo below
          </label>
          <input
            id={todoId}
            type="text"
            placeholder="add Todo here"
            className="rounded-md border border-zinc-600 px-2 py-2 placeholder:text-zinc-500"
            {...register("todo", {
              required: "you should entre your Todo first.",
              maxLength: {
                value: 20,
                message: "you Todo should be at least 20 character",
              },
            })}
          />
          {errors.todo && (
            <span className="justify-self-start text-left text-xs text-red-500">
              {errors.todo.message}
            </span>
          )}
        </div>
        <div className="flex w-full flex-col gap-1 text-zinc-500 capitalize">
          <label className="hidden text-nowrap md:block" htmlFor={dateId}>
            when should Todo be Done?
          </label>
          <input
            id={dateId}
            type="date"
            min={today}
            className="w-full rounded-md border border-zinc-600 px-4 py-2 placeholder:text-zinc-500"
            {...register("dueDate", {
              required: "jsut select a day",
            })}
          />
          {errors.dueDate && (
            <span className="text-xs text-red-500">
              {errors.dueDate.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="hover:bg-secondary bg-primary mt-0 h-11 w-full cursor-pointer justify-self-end rounded-md px-4 py-3 text-xs text-white capitalize transition-colors md:mt-7 md:w-2/3"
        >
          add
        </button>
      </form>
    </>
  );
}

export { AddTodoForm };
