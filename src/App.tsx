import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodoHeader } from "./components/TodoHeader";

export default function App() {
  return (
    <div className="felx min-h-screen w-full items-center justify-center">
      <TodoHeader />
      <div className="mx-auto flex w-full items-center justify-center p-2 md:p-6 xl:w-2/3">
        <AddTodoForm />
      </div>
    </div>
  );
}
