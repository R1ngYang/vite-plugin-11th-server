module.exports = {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Components', link: '/', activeMatch: '^/$|^/components/' }
    ],

    sidebar: {
      '/components/': getComponentsSidebar(),
      '/': getComponentsSidebar()
    }
  }
}

function getComponentsSidebar() {
  return [
    {
      text: '基础组件',
      children: [
        { text: '图标', link: '/components/icon/' },
        { text: '按钮', link: '/components/button/' },
        { text: '输入框', link: '/components/input/' },
        { text: 'Configuration', link: '/components/configuration' },
        { text: 'Asset Handling', link: '/components/assets' },
        { text: 'Markdown Extensions', link: '/components/markdown' },
        { text: 'Using Vue in Markdown', link: '/components/using-vue' },
        { text: 'Deploying', link: '/components/deploy' }
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/components/frontmatter' },
        { text: 'Global Computed', link: '/components/global-computed' },
        { text: 'Global Component', link: '/components/global-component' },
        { text: 'Customization', link: '/components/customization' },
        {
          text: 'Differences from Vuepress',
          link: '/components/differences-from-vuepress'
        }
      ]
    }
  ]
}