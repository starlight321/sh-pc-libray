import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@sh/pc-library',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  base: '/pc-library',
  publicPath: '/pc-library/',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: 'Foo',
        path: '/components/Foo',
      },
      {
        title: 'Trend',
        path: '/components/trend',
      },
    ],
  },
  lessLoader: { javascriptEnabled: true },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
