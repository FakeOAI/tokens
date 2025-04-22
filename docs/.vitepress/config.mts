import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "Tokens",
  description: "管理逆向Token的平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始接入", link: "/llm/prepare" },
      { text: "演示站", link: "https://tokens-pool.top" },
    ],
    sidebar: [
      {
        text: "简介",
        base: "/guide/",
        collapsed: false,
        items: [
          { text: "什么是 Tokens？", link: "what-is-tokens" },
          { text: "快速开始", link: "getting-started" },
        ],
      },
      {
        text: "LLM",
        base: "/llm/",
        link: "prepare",
        collapsed: false,
        items: [
          { text: "ChatGPT", link: "chatgpt" },
          { text: "Grok", link: "grok" },
          { text: "Claude", link: "claude" },
          { text: "Cursor", link: "cursor" },
          { text: "Windsurf", link: "windsurf" },
          { text: "Gemini API", link: "gemini" },
          { text: "Gemini 官网逆向", link: "gemini_official" },
          { text: "Sora", link: "sora" },
        ],
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
    socialLinks: [
      { icon: "github", link: "https://github.com/fakeoai/tokens" },
    ],

    footer: {
      copyright: "Copyright © 2025-present Tokens",
    },
  },
});
