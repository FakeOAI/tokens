# Windsurf 客户端逆向接口文档

## 基础信息

**官网地址：** `https://windsurf.com`

**Base URL:** `http://<你的IP>:<你的端口>/windsurf`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#windsurf)

## 模型列表

> [!WARNING]
> 在后台展开Token详情可以查看最新的可用模型

- `claude-opus-4-7-low`
- `claude-opus-4-7-medium`
- `claude-opus-4-7-high`
- `claude-opus-4-7-xhigh`
- `claude-opus-4-7-max`
- `claude-opus-4-6-thinking`
- `gpt-5-5-low`
- `claude-sonnet-4-6-thinking`
- `kimi-k2-6`
- `swe-1-6`
- `swe-1-6-fast`
- `deepseek-v4`
- `claude-opus-4-6`
- `gpt-5-4-none`
- `gpt-5-4-low`
- `gpt-5-4-medium`
- `gpt-5-4-high`
- `gpt-5-4-xhigh`
- `gpt-5-5-none`
- `gpt-5-5-medium`
- `gpt-5-5-high`
- `gpt-5-5-xhigh`
- `gpt-5-5-none-priority`
- `gpt-5-5-low-priority`
- `gpt-5-5-medium-priority`
- `gpt-5-5-high-priority`
- `gpt-5-5-xhigh-priority`
- `gpt-5-4-none-priority`
- `gpt-5-4-low-priority`
- `gpt-5-4-medium-priority`
- `gpt-5-4-high-priority`
- `gpt-5-4-xhigh-priority`
- `gpt-5-4-mini-low`
- `gpt-5-4-mini-medium`
- `gpt-5-4-mini-high`
- `gpt-5-4-mini-xhigh`
- `claude-sonnet-4-6`
- `claude-sonnet-4-6-1m`
- `claude-sonnet-4-6-thinking-1m`
- `gpt-5-3-codex-low`
- `gpt-5-3-codex-medium`
- `gpt-5-3-codex-high`
- `gpt-5-3-codex-xhigh`
- `gpt-5-3-codex-low-priority`
- `gpt-5-3-codex-medium-priority`
- `gpt-5-3-codex-high-priority`
- `gpt-5-3-codex-xhigh-priority`
- `kimi-k2-5`
- `glm-5`
- `glm-5-1`
- `minimax-m2-5`

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |                            -                             |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |                            -                             |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |                            -                             |
