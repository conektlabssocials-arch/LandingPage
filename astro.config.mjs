import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://conektads.com',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
})
