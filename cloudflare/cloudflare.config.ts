import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "cyber-eagles-robotics",
    compatibilityDate: "2026-10-18",
    workersDev: true,
    assets: {
      htmlHandling: "auto-trailing-slash",
      notFoundHandling: "404-page",
    },
  },
});
