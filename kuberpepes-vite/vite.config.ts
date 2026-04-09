import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  test:{
    globals: true,
    tags: [
      { name: "frontend", description: "Tests related to the frontend application" },
      { name: "backend", description: "Tests related to the backend application" },
    ],
  },
});