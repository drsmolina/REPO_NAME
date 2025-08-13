import { defineConfig } from "vite";

// GitHub Pages serves the site from https://<user>.github.io/REPO_NAME,
// so assets need this subpath prefix to resolve correctly.
const basePath = "/REPO_NAME/";

export default defineConfig({
  base: basePath
});
