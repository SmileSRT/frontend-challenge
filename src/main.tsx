import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import { BrowserRouter } from "react-router";
import RootLayout from "./shared/ui/root-layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout>
        <App />
      </RootLayout>
    </BrowserRouter>
  </StrictMode>
);
