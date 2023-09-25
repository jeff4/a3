import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // value below should be the fully qualified URL	
  site: "https://example.netlify.app",
  integrations: [preact()]
});