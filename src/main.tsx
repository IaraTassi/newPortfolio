import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/Navbar/Navbar.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
