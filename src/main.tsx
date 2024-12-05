import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      id="root"
      className="max-w-screen-xl mx-auto p-8 text-center antialiased"
    >
      <App />
    </div>
  </StrictMode>
);
