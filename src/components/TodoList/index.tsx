import { useEffect, useState } from "react";
import { TaskListItem } from "../TaskListItem";
import type { ITodo } from "../../types/Todo.interface";
import { NoTasks } from "../NoTasks";
import { getTodo } from "../../services/Axios/Requests/todos/Todo";

function TodoList() {
  const [todosArray, setTodoArray] = useState<Array<ITodo>>([]);
  const sortedTodo = [...todosArray].sort(
    (a, b) => Number(a.completed) - Number(b.completed),
  );
  useEffect(() => {
    const getData = async () => {
      try {
        const { data: dataArray } = await getTodo();
        setTodoArray(dataArray);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getData();
  }, []);

  return (
    <div className="mt-1 w-full">
      <h1 className="text-left text-xl text-zinc-600 capitalize md:text-4xl">
        task
      </h1>
      <div className="max-h-72 overflow-y-scroll">
        {todosArray.length > 0 ? (
          sortedTodo?.map((todoItem: ITodo) => {
            return <TaskListItem key={todoItem.id} todoItem={todoItem} />;
          })
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
}

export { TodoList };
