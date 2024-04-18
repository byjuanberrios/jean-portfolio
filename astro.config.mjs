import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

const projectId = SANITY_PROJECT_ID;
const dataset = SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sanity({
    projectId: projectId,
    dataset: dataset,
    useCdn: true,
  }), react()]
  // redirects: {
  //   '/': '/home'
  // }
});