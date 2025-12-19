import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  // For GitHub Pages: use "/" for user/org pages, "/repo-name/" for project pages
  // Set VITE_BASE environment variable if deploying to project pages
  const base = env.VITE_BASE?.startsWith("/") ? env.VITE_BASE : "/";

  return {
    base,
    server: {
      host: "::",
      port: 3000,
    },
    build: {
      // Output to repo-level docs for GitHub Pages
      // (within the repository root)
      outDir: "docs",
      emptyOutDir: true,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
