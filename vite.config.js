import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
  }, // default: 5173
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3007",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
