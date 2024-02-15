import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://lstrobel.com',
	integrations: [mdx(), sitemap(), astroImageTools],
});
