import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test:{
    globals: true,
    environment: 'jsdom',
    tags: [
      { name: "frontend", description: "Tests related to the frontend application" },
      { name: "backend", description: "Tests related to the backend application" },
    ],
    coverage: {
      include: ["src/**/*"],
      exclude: [
        "src/assets",
        "src/*.css",
        "vite.*.ts", 
        "**/*.config.*", 
        "**/*.test.{ts,tsx, js, jsx}",
        "**/coverage/**",
        "**/node_modules/**",
        "**/dist/**",
      ],
    },
  },
});