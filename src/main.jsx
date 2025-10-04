import React from "react";
import ReactDOM from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App";
import "./index.css";

// Inject Vercel Speed Insights only in production builds
if (import.meta.env.PROD) {
  try {
    injectSpeedInsights();
  } catch (e) {
    // Silently ignore to avoid breaking runtime if package changes
    console.warn("Speed Insights injection failed", e);
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
