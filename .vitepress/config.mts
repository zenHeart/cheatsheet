import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cheatsheet",
  base: '/cheatsheet/',
  description: "save cheatsheet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'CheatSheet', 
        items: [
          {
            text: 'ACP',
            link: '/ACP/index'
          }
        ]
      }
    ],
    sidebar: [
      { text: 'ACP', link: '/ACP/index' },
    ],
  }
})
