// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aimrferdy.net",
  output: "static",
  trailingSlash: "never",
  integrations: [
    mdx(),
    sitemap()
  ],
});
