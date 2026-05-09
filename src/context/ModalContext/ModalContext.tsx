import { createContext, useContext } from "react";
import type { ModalStateProps, ModalStateType } from "./ModalContextProvider";

export type ModalContextType = {
  openModal: (modalId: number, type: ModalStateType) => void;
  closeModal: () => void;
  isModalOpen: ModalStateProps;
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
