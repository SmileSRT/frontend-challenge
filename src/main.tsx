import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import { HashRouter } from "react-router";
import RootLayout from "./shared/ui/root-layout.tsx";
import "./shared/ui/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <RootLayout>
        <App />
      </RootLayout>
    </HashRouter>
  </StrictMode>
);
