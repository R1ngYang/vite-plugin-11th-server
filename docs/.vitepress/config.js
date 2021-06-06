module.exports = {
  lang: 'en-US',
  title: '11th',
  description: '基于vue3.0的组件库',

  themeConfig: {

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Components', link: '/components/', activeMatch: '^/$|^/components/' },
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
        { text: '输入框', link: '/components/input/' },
        { text: '数字输入框', link: '/components/input-number/' },
      ]
    },
    {
      text: '布局组件',
      children: [
        { text: '表格布局', link: '/components/layout/table/' }

      ]
    },
    {
      text: '工具',
      children: [
        { text: '输入框拓展', link: '/components/input-ext/' },
      ]
    }
  ]
}