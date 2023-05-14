import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://sc-portfolio.netlify.app",
  integrations: [sitemap()],
  output: "server",
  adapter: netlify()
});