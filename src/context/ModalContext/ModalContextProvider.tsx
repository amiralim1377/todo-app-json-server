import { useState } from "react";

import { ModalContext } from "./ModalContext";

export type ModalStateType = "edit" | "delete" | null;

export type ModalStateProps = {
  isOpen: boolean;
  type: ModalStateType;
  id: number | null;
};

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState<ModalStateProps>({
    isOpen: false,
    type: null,
    id: null,
  });

  const openModal = (modalId: number, type: ModalStateType) => {
    setIsModalOpen({ isOpen: true, id: modalId, type });
  };
  const closeModal = () => {
    setIsModalOpen({ isOpen: false, id: null, type: null });
  };

  const value = {
    openModal,
    closeModal,
    isModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
