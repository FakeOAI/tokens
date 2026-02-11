import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "Tokens",
  description: "管理逆向Token的平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
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
        base: "/platform/",
        collapsed: false,
        items: [
          {
            text: "OpenAI",
            items: [
              { text: "ChatGPT 官网逆向", link: "chatgpt" },
              { text: "Codex 终端逆向", link: "codex" },
              { text: "Sora 官网逆向", link: "sora" },
            ],
          },
          {
            text: "Anthropic",
            items: [
              { text: "Claude 官网逆向", link: "claude" },
              { text: "Claude Code 终端逆向", link: "claude_api" },
            ],
          },
          {
            text: "Google",
            items: [
              { text: "Gemini 官方API", link: "gemini" },
              { text: "Gemini 官网逆向", link: "gemini_official" },
              { text: "Gemini Business 官网逆向", link: "gemini_business" },
              { text: "Gemini Cli 终端逆向", link: "gemini_cli" },
              { text: "Flow 官网逆向", link: "flow" },
              { text: "Antigravity 客户端逆向", link: "antigravity" },
            ],
          },
          { text: "Grok 官网逆向", link: "grok" },
          { text: "Cursor 客户端逆向", link: "cursor" },
          { text: "Kiro 客户端逆向", link: "kiro" },
        ],
      },
      {
        text: "其他",
        base: "/others/",
        link: "high-level-play",
        collapsed: false,
        items: [
          { text: "高阶玩法", link: "high-level-play" },
          { text: "储存配置", link: "storage" },
          { text: "接口文档", link: "api-reference" },
          { text: "额外参数", link: "extra-params" },
          { text: "Token提取", link: "extract-token" },
          { text: "后台鉴权", link: "admin-auth" },
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
