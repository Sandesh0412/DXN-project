import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";

// Resolve "src" relative to THIS file, not process.cwd(). This keeps the
// "@/" alias correct even when the dev server is launched from a parent
// directory (e.g. by an external launcher / preview harness).
const srcDir = fileURLToPath(new URL("./src", import.meta.url));

// SWC keeps HMR near-instant, matching the "Apple-style" expectation of
// fluid iteration during creative work.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
