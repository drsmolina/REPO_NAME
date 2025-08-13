import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const basePath = "/REPO_NAME/";

export default defineConfig({
  plugins: [react()],
  base: basePath
});
