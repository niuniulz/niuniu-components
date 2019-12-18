module.exports = {
  base: '/niuniu-components/',
  title: 'niuniu-component',
  description: '组件使用',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '组件',
        link: '/components/'
      },
      { text: '关于', link: '/about/' },
      { text: 'Gitee', link: 'https://gitee.com/niuniulz/niuniu-components' },
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
  markdown: {
    lineNumbers: true
  }
}