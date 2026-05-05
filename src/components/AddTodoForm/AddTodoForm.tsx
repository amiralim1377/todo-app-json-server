import { useId } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addTodos } from "../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../types/Todo.interface";
import { todoSchema } from "./TodoShema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";

function AddTodoForm() {
  const todoId = useId();
  const dateId = useId();

  type TodoFormValues = z.infer<typeof todoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
  });
  const today = new Date().toISOString().split("T")[0];

  const onSubmit: SubmitHandler<TodoFormValues> = (data) => {
    const { todo, dueDate } = data;
    const localDate = new Date(`${dueDate}T23:59:59`);

    const todoObj: ITodo = {
      todo,
      completed: false,
      dueDate: localDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    addTodos(todoObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 justify-items-center gap-1 rounded-md border border-zinc-500 bg-white p-6 md:grid-cols-[2fr_2fr_1fr]"
      >
        <div className="relative flex w-full flex-col gap-1 pb-5 text-zinc-500 capitalize">
          <label className="hidden md:block" htmlFor={todoId}>
            write your todo below
          </label>
          <input
            id={todoId}
            type="text"
            placeholder="add Todo here"
            className="rounded-md border border-zinc-600 px-2 py-2 placeholder:text-zinc-500"
            {...register("todo")}
          />
          {errors.todo && (
            <span className="absolute bottom-0 left-0 text-left text-xs text-red-500">
              {errors.todo.message}
            </span>
          )}
        </div>

        <div className="relative flex w-full flex-col gap-1 text-zinc-500 capitalize">
          <label className="hidden text-nowrap md:block" htmlFor={dateId}>
            when should Todo be Done?
          </label>
          <input
            id={dateId}
            type="date"
            min={today}
            className="w-full rounded-md border border-zinc-600 px-4 py-2 placeholder:text-zinc-500"
            {...register("dueDate")}
          />
          {errors.dueDate && (
            <span className="absolute bottom-0 left-0 text-xs text-red-500">
              {errors.dueDate.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-secondary mt-0 h-11 w-full cursor-pointer justify-self-end rounded-md text-xs text-white capitalize transition-colors md:mt-7 md:w-2/3"
        >
          add
        </button>
      </form>
    </>
  );
}

export { AddTodoForm };
