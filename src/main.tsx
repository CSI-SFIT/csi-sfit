import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Remove full-page gear loader after React has mounted
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("global-loader");
  if (loader) {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 500);
  }
});
