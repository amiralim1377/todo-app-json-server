import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <div className="">
      <div className="relative bg-red-300">
        <TodoHeader />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform xl:w-3/5">
          <AddTodoForm />
        </div>
      </div>
      <div className="mx-auto mt-14 flex w-full flex-col items-center justify-center p-2 md:p-5 xl:w-2/3">
        <TodoList />
      </div>
    </div>
  );
}
