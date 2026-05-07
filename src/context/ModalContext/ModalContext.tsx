import { createContext, useContext } from "react";

export type ModalContextType = {
  openModal: (id: number) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  activeTodoId: number | null;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider",
    );
  }

  return context;
}
