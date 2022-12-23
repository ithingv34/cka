const { getFilesOf } = require('./util.js');

module.exports = {
  base: '/devops_stack/',
  assetsPublicPath: '/',
  title: " Certified Kubernetes Administrator (CKA)",
  plugins: ['@vuepress/last-updated'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      ['/', 'Certified Kubernetes Administrator (CKA)'],
      {
        title: 'CKA',
        path: '/src/CKA/',
        children: getFilesOf('src/CKA'),
      },
      {
        title: 'ClusterArchitecture',
        path: '/src/ClusterArchitecture/',
        children: getFilesOf('src/ClusterArchitecture'),
      },
      {
        title: 'Workloads Scheduling',
        path: '/src/Workloads Scheduling/',
        children: getFilesOf('src/Workloads Scheduling'),
      },
      {
        title: 'Services Networking',
        path: '/src/Services Networking/',
        children: getFilesOf('src/Services Networking'),
      },
      {
        title: 'Storage',
        path: '/src/Storage/',
        children: getFilesOf('src/Storage'),
      },
      {
        title: 'TroubleShooting',
        path: '/src/TroubleShooting/',
        children: getFilesOf('src/TroubleShooting'),
      }
    ],
    repo: 'ithingv34/devops_stack',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'main',
    editLinkText: '잘못된 부분이 있다면 수정해주세요🙌!',
  },
};
