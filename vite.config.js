import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures paths are relative during deployment
  build: {
    rollupOptions: {
      external: ["typed.js"], // Exclude 'typed.js' from bundling
    },
  },
});