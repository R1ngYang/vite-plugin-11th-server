module.exports = {
  lang: 'en-US',
  title: '11th',
  description: '基于vue3.0的组件库',

  themeConfig: {

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Components', link: '/', activeMatch: '^/$|^/components/' },
      { text: 'gethub', link: 'https://github.com/R1ngYang/11th' },
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
        { text: '按钮组', link: '/components/button-group/' }
      ]
    },
    {
      text: '表单组件',
      children: [
        { text: '输入框', link: '/components/input/' }
      ]
    }
  ]
}