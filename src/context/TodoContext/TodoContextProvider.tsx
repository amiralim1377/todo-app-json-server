import { useEffect, useMemo, useState } from "react";
import { TodoContext } from "./todoContext";
import { getTodo } from "../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../types/Todo.interface";

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todosArray, setTodoArray] = useState<ITodo[]>([]);

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

  const value = useMemo(() => {
    const sortedTodos = [...todosArray].sort(
      (a, b) => Number(a.completed) - Number(b.completed),
    );

    return {
      todos: sortedTodos,
      setTodoArray,
    };
  }, [todosArray]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
