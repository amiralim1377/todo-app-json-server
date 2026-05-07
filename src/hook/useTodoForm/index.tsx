import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { todoSchema } from "../../components/AddTodoForm/TodoShema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addTodos, updateTodo } from "../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../types/Todo.interface";
import { localDate } from "../../utility/localDate";
import { useTodoContext } from "../../context/TodoContext/todoContext";
import { useModalContext } from "../../context/ModalContext/ModalContext";

interface UseTodoFormOptions {
  initialTodo?: ITodo;
  mode?: "add" | "edit";
}

const useTodoForm = ({ initialTodo, mode = "add" }: UseTodoFormOptions) => {
  const { setTodoArray } = useTodoContext();
  const { closeModal } = useModalContext();
  type TodoFormValues = z.infer<typeof todoSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TodoFormValues> = (data) => {
    const { todo, dueDate } = data;
    const localDateValue = localDate(dueDate);

    const todoObj: ITodo = {
      ...initialTodo,
      todo,
      dueDate: localDateValue,
      completed: initialTodo?.completed ?? false,
      createdAt: initialTodo?.createdAt ?? new Date(),
      updatedAt: new Date(),
    };

    if (mode === "add") {
      addTodos(todoObj)
        .then((res) => {
          setTodoArray((prev) => [...prev, res.data]);
        })
        .then(() => {
          reset();
        })
        .catch((err) => console.log(err));
    } else {
      updateTodo(todoObj.id!, todoObj)
        .then(() => {
          setTodoArray((prev) =>
            prev.map((todo) => (todo.id === todoObj.id ? todoObj : todo)),
          );
          closeModal();
        })
        .then(() =>
          window.history.replaceState({}, "", window.location.pathname),
        )
        .catch((err) => console.log(err.message));
    }
  };

  return { onSubmit, register, handleSubmit, errors };
};

export { useTodoForm };
