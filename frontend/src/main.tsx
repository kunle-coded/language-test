import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TestProvider } from "./contexts/TestContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TestProvider>
      <App />
    </TestProvider>
  </StrictMode>
);
