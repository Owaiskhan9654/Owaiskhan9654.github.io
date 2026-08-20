import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// User site (owaiskhan9654.github.io) is served from the domain root.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
});
