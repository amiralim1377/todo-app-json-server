import {
  doneHandler,
  removeTodo,
} from "../../../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../../../types/Todo.interface";
import { useTodoContext } from "../../../../context/TodoContext/todoContext";
import { useModalContext } from "../../../../context/ModalContext/ModalContext";
import type { ModalStateType } from "../../../../context/ModalContext/ModalContextProvider";

const useTaskActions = (todoItem: ITodo) => {
  const { setTodoArray } = useTodoContext();
  const { openModal, closeModal } = useModalContext();

  const handleDoneTodo = async (todoId: number) => {
    try {
      const newTodo = { ...todoItem, completed: true };
      await doneHandler(todoId as number, newTodo);
      setTodoArray((prev) =>
        prev.map((todo) => (todo.id === todoId ? newTodo : todo)),
      );
    } catch (error) {
      console.error("Failed to complete todo:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await removeTodo(id as number);
      setTodoArray((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleOpenModal = (todoId: number, type: ModalStateType) => {
    const newUrl = new URLSearchParams();
    newUrl.set("id", String(todoId));
    window.history.pushState(null, "", `?${newUrl.toString()}`);
    openModal(todoId, type);
  };

  const handleCloseModal = () => {
    window.history.replaceState({}, "", window.location.pathname);
    closeModal();
  };

  return {
    handleCloseModal,
    handleOpenModal,
    handleDeleteTodo,
    handleDoneTodo,
  };
};

export { useTaskActions };
