import { defineConfig } from "vite";
import mdx from "@mdx-js/esbuild";
import react from "@vitejs/plugin-react";
import remarkGfm from "remark-gfm";
import path from "path";

export default defineConfig({
  plugins: [
    mdx({ remarkPlugins: [remarkGfm] }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".mdx", ".md"],
  },
});
