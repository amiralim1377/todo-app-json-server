import { TaskListItem } from "../TaskListItem";
import type { ITodo } from "../../types/Todo.interface";
import { NoTasks } from "../NoTasks";
import { useTodoContext } from "../../context/TodoContext/todoContext";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="mt-1 w-full">
      <h1 className="text-left text-xl text-zinc-600 capitalize md:text-4xl">
        task
      </h1>
      <div className="max-h-72 overflow-y-scroll">
        {todos.length > 0 ? (
          todos?.map((todoItem: ITodo) => {
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
