import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/Navbar/Navbar.css";
import "./components/About/About.css";
import "./components/Course/Course.css";
import "./components/Skills/Skills.css";
import "aos/dist/aos.css";
import "./App.css";
import AOS from "aos";

AOS.init({
  duration: 1000,
  once: true,
});

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
