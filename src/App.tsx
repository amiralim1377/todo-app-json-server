import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodoHeader } from "./components/TodoHeader";

export default function App() {
  return (
    <div className="felx min-h-screen w-full items-center justify-center">
      <TodoHeader />
      <AddTodoForm />
    </div>
  );
}
