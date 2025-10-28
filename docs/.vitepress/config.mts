import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "Tokens",
  description: "管理逆向Token的平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始接入", link: "/llm/prepare" },
      { text: "计费标准", link: "/others/platform-pricing" },
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
          { text: "Codex", link: "codex" },
          { text: "Grok", link: "grok" },
          { text: "Claude 官网逆向", link: "claude" },
          { text: "Claude API（Claude Code）", link: "claude_api" },
          { text: "Cursor", link: "cursor" },
          { text: "Gemini API", link: "gemini" },
          { text: "Gemini 官网逆向", link: "gemini_official" },
          { text: "Sora", link: "sora" },
          { text: "Flow", link: "flow" },
        ],
      },
      {
        text: "其他",
        base: "/others/",
        link: "high-level-play",
        collapsed: false,
        items: [
          { text: "高阶玩法", link: "high-level-play" },
          { text: "全局参数", link: "global-params" },
          { text: "平台计费标准", link: "platform-pricing" },
          { text: "代理计费标准", link: "proxy-pricing" },
          { text: "联系作者", link: "contact" },
        ],
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
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
