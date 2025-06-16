import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://praz.garden',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap()
  ]
})
