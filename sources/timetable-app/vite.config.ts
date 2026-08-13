import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "full-reload-on-hot-update",
      handleHotUpdate({ server }) {
        server.ws.send({ type: "full-reload" });
        return [];
      },
    },
  ],
  build: {
    sourcemap: false,
    minify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "react", test: "react|react-dom" },
            { name: "modules", test: "[\\\\/]node_modules" },
          ],
        },
      },
    },
  },
});
