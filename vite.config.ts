import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env.GITHUB_ACTIONS ? "/TrainSuite/" : "/",
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "static",
  },
});
