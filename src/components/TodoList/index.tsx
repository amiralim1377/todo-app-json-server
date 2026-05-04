import { useEffect, useState } from "react";
import { TaskListItem } from "../TaskListItem";
import { apiFetch } from "../../services/apiFetch";
import type { ITodo } from "../../types/Todo.interface";

function TodoList() {
  const [todosArray, setTodoArray] = useState<Array<ITodo>>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiFetch("http://localhost:4000/todo", "Get");
        setTodoArray(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, []);
  return (
    <div className="mt-2 w-full">
      <h1 className="text-left text-xl text-zinc-600 capitalize md:text-4xl">
        task
      </h1>
      <div className="overflow-y-scroll">
        {todosArray?.map((todoItem: ITodo) => {
          return <TaskListItem key={todoItem.id} todoItem={todoItem} />;
        })}
      </div>
    </div>
  );
}

export { TodoList };
