module.exports = {
  base:"./",
  title: 'Stride.blog',  // 设置网站标题
  description: 'Stride的博客',
  head:[
    ['meta',{name:"keywords",content:"stide的博客"}],
    ['meta',{name:"author",content:"stide"}],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // base: '/v1/adroi-h5/adroiapi/',
  themeConfig: {
    lastUpdated:"更新时间",
    nav: [
      { text: '主页', link: '/' },
      { text: '学习笔记', link: '/study/' },
      { text: 'Github', link: 'https://github.com/xuanmaihaier/' }
    ],
    sidebarDepth: 2
  }
}
