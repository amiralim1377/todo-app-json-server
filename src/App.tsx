import { AddTodoForm } from "./components/AddTodoForm/AddTodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { TodoList } from "./components/TodoList";
import { useWindowSize } from "./hook/useWindowSize";
import { classNames } from "./utility/classNames";

export default function App() {
  const { width } = useWindowSize();
  return (
    <div className="">
      <div className="relative">
        <TodoHeader />
        {width >= 1024 && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform xl:w-3/5">
            <AddTodoForm />
          </div>
        )}
      </div>
      <div
        className={classNames(
          width > 1024 ? "mt-14" : "mt-2",
          "mx-auto flex w-full flex-col items-center justify-center p-2 md:p-5 xl:w-2/3",
        )}
      >
        {width < 1024 && <AddTodoForm />}
        <TodoList />
      </div>
    </div>
  );
}
