import type { ReactNode } from "react";
import TodoContextProvider from "../../context/TodoContext/TodoContextProvider";
import ModalContextProvider from "../../context/ModalContext/ModalContextProvider";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TodoContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </TodoContextProvider>
  );
};

export { MainProvider };
