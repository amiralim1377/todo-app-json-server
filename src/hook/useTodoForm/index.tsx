import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { todoSchema } from "../../components/AddTodoForm/TodoShema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addTodos, updateTodo } from "../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../types/Todo.interface";
import { localDate } from "../../utility/localDate";

interface UseTodoFormOptions {
  initialTodo?: ITodo;
  mode?: "add" | "edit";
}

const useTodoForm = ({ initialTodo, mode = "add" }: UseTodoFormOptions) => {
  type TodoFormValues = z.infer<typeof todoSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
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
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      updateTodo(todoObj.id!, todoObj)
        .then((res) => {
          console.log(res.data);
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
