import { useState } from "react";

import { ModalContext } from "./ModalContext";

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setIsModalOpen(true);
    setActiveTodoId(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setActiveTodoId(null);
  };

  const value = {
    openModal,
    closeModal,
    isModalOpen,
    activeTodoId,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
