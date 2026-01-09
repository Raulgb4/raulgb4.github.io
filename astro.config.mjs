// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // ✅ URL CANÓNICA del sitio (con nombre del repo)
  site: "https://raulgb4.github.io/curriculum-vitae",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(), // ✅ genera sitemap automáticamente
  ],
});
