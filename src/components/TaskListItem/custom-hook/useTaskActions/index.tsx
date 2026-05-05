import { useState } from "react";
import {
  doneHandler,
  removeTodo,
} from "../../../../services/Axios/Requests/todos/Todo";
import type { ITodo } from "../../../../types/Todo.interface";

const useTaskActions = (todoItem: ITodo) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDoneTodo = async (todoId: number) => {
    try {
      const newTodo = { ...todoItem, completed: true };
      await doneHandler(todoId as number, newTodo);
    } catch (error) {
      console.error("Failed to complete todo:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await removeTodo(id as number);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleOpenModal = (todoId: number) => {
    const newUrl = new URLSearchParams();
    newUrl.set("id", String(todoId));
    window.history.pushState(null, "", `?${newUrl.toString()}`);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    window.history.replaceState({}, "", window.location.pathname);
    setOpenModal(false);
  };

  return {
    handleCloseModal,
    handleOpenModal,
    handleDeleteTodo,
    handleDoneTodo,
    openModal,
  };
};

export { useTaskActions };
