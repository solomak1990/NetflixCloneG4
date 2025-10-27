import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/netflixClone/", // 👈 must match your repo name
  base: "/", 
});
