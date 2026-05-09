import { TaskListItem } from "../TaskListItem";
import type { ITodo } from "../../types/Todo.interface";
import { NoTasks } from "../NoTasks";
import { useTodoContext } from "../../context/TodoContext/todoContext";
import styles from "./index.module.css";
import { classNames } from "../../utility/classNames";

function TodoList() {
  const { todos } = useTodoContext();

  return (
    <div className="mt-1 w-full">
      <h1 className="mb-1.5 border-b border-zinc-300 text-left text-xl text-zinc-600 capitalize md:text-4xl">
        task
      </h1>
      <div className={classNames(styles.scrol, "max-h-72 overflow-y-scroll")}>
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
