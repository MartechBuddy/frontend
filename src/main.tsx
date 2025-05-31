
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./hooks/use-theme";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="martechengine-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
