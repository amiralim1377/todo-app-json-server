import { createContext, useContext } from "react";
import type { ITodo } from "../../types/Todo.interface";

export type TodoContextType = {
  todos: ITodo[];
  setTodoArray: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export function useTodoContext() {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }

  return context;
}
