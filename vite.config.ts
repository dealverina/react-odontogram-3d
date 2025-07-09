import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactOdontogram3D",
      formats: ["es", "umd"],
      fileName: (format) => `react-odontogram-3d.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "three"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          three: "THREE",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
