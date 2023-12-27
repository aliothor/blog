import { join } from 'path'
import { env } from 'node:process'
import { defineConfig } from 'rspress/config'


export default defineConfig({
  root: join(__dirname, 'docs'),
  title: 'Aliothor',
  description: 'Aliothor Blog',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/aliothor/blog' }],
  },
  markdown: {
    mdxRs: true,
  },
  base: env.Vercel ? '/' : "/blog/",
  builderConfig: {
  },
})
