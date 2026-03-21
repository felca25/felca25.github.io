// vite.config.ts
import { defineConfig } from "file:///Users/felipeandrade/Desktop/felca25.github.io/node_modules/vite/dist/node/index.js";
import mdx from "file:///Users/felipeandrade/Desktop/felca25.github.io/node_modules/@mdx-js/esbuild/index.js";
import react from "file:///Users/felipeandrade/Desktop/felca25.github.io/node_modules/@vitejs/plugin-react/dist/index.mjs";
import remarkGfm from "file:///Users/felipeandrade/Desktop/felca25.github.io/node_modules/remark-gfm/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/felipeandrade/Desktop/felca25.github.io";
var vite_config_default = defineConfig({
  plugins: [
    mdx({ remarkPlugins: [remarkGfm] }),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".mdx", ".md"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZmVsaXBlYW5kcmFkZS9EZXNrdG9wL2ZlbGNhMjUuZ2l0aHViLmlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZmVsaXBlYW5kcmFkZS9EZXNrdG9wL2ZlbGNhMjUuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9mZWxpcGVhbmRyYWRlL0Rlc2t0b3AvZmVsY2EyNS5naXRodWIuaW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IG1keCBmcm9tIFwiQG1keC1qcy9lc2J1aWxkXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgcmVtYXJrR2ZtIGZyb20gXCJyZW1hcmstZ2ZtXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbWR4KHsgcmVtYXJrUGx1Z2luczogW3JlbWFya0dmbV0gfSksXG4gICAgcmVhY3QoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICAgIGV4dGVuc2lvbnM6IFtcIi5qc1wiLCBcIi50c1wiLCBcIi5qc3hcIiwgXCIudHN4XCIsIFwiLmpzb25cIiwgXCIubWR4XCIsIFwiLm1kXCJdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULFNBQVMsb0JBQW9CO0FBQ3pWLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJLEVBQUUsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQUEsSUFDbEMsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLFFBQVEsU0FBUyxRQUFRLEtBQUs7QUFBQSxFQUNuRTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
