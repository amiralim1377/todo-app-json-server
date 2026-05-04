import React, { useId, useRef } from "react";
import { apiFetch } from "../../services/apiFetch";

type TodoObjType = {
  todo: string;
  completed: boolean;
  dueDate: string;
  createdAt: Date;
  updatedAt: Date;
};

function AddTodoForm() {
  const todoRef = useRef<HTMLInputElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const todoId = useId();
  const dateId = useId();
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const todoValue = todoRef.current!.value;
    const dueValue = dueDateRef.current!.value;

    const todoObj: TodoObjType = {
      todo: todoValue,
      completed: false,
      dueDate: dueValue,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    apiFetch("http://localhost:4000/todo", "POST", todoObj)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-1 p-2 md:flex-row md:space-x-6"
    >
      <div className="flex w-full flex-col gap-1 text-zinc-500 capitalize">
        <label className="hidden md:block" htmlFor={todoId}>
          write your todo below
        </label>
        <input
          id={todoId}
          ref={todoRef}
          type="text"
          placeholder="add Todo here"
          className="rounded-md border border-zinc-600 px-2 py-2 placeholder:text-zinc-500"
        />
      </div>
      <div className="flex w-full flex-col gap-1 text-zinc-500 capitalize">
        <label className="hidden text-nowrap md:block" htmlFor={dateId}>
          when should Todo be Done?
        </label>
        <input
          id={dateId}
          type="date"
          ref={dueDateRef}
          min={today}
          className="w-full rounded-md border border-zinc-600 px-4 py-2 placeholder:text-zinc-500"
        />
      </div>
      <button
        type="submit"
        className="hover:bg-secondary bg-primary mt-0 w-full cursor-pointer rounded-md px-4 py-2 text-white capitalize transition-colors md:mt-6 md:w-1/2"
      >
        add
      </button>
    </form>
  );
}

export { AddTodoForm };
