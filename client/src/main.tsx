import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  // Add scroll behavior to html element
  document.documentElement.style.scrollBehavior = "smooth";
});

createRoot(document.getElementById("root")!).render(<App />);
