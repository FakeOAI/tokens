import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tokens",
  description: "管理逆向Token的平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/markdown-examples" },
      { text: "演示站", link: "https://tokens-pool.top" },
    ],
    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/fakeoai/tokens" },
    ],
    footer: {
      copyright: "Copyright © 2025-present Tokens",
    },
  },
});
