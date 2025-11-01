import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    hmr: {
      protocol: "wss",
      host: process.env.REPL_SLUG
        ? `${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
        : "localhost",
      clientPort: 443,
    },
    allowedHosts: [
      "all",
      "d3a52a2a-2e3a-4577-bbe6-690a0073f679-00-3kzahkd02swip.pike.replit.dev",
    ],
  },
});
