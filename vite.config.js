import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
  ],
});
