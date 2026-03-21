import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootEl = document.getElementById("root");

function showStartupError(title: string, details: string) {
  if (!rootEl) return;
  rootEl.innerHTML = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; color: #111827;">
      <h1 style="font-size: 20px; margin: 0 0 12px 0;">${title}</h1>
      <pre style="white-space: pre-wrap; background: #f3f4f6; padding: 12px; border-radius: 8px; overflow: auto;">${details}</pre>
    </div>
  `;
}

window.addEventListener("error", (event) => {
  const message = event.error?.stack || event.message || "Unknown startup error";
  showStartupError("Application startup error", String(message));
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = (event.reason && (event.reason.stack || event.reason.message)) || String(event.reason);
  showStartupError("Unhandled promise rejection", String(reason));
});

try {
  if (!rootEl) {
    throw new Error("Root element '#root' not found in index.html");
  }
  createRoot(rootEl).render(<App />);
} catch (error) {
  const details = error instanceof Error ? error.stack || error.message : String(error);
  showStartupError("React render failed", details);
}
