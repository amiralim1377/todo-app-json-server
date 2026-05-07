import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MainProvider } from "./provider/mainProvider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <MainProvider>
    <App />
  </MainProvider>,
);
