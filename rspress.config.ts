import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
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
  base:"/blog/",
  builderConfig: {
    output: {
      distPath: {},
      assetPrefix:"/blog/"
    },
  },
})
