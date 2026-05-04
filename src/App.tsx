import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <div className="">
      <TodoHeader />
      <div className="mx-auto flex w-full flex-col items-center justify-center p-2 md:p-6 xl:w-2/3">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}
