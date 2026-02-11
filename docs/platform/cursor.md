# Cursor 官网逆向接口文档

## 基础信息

**官网地址：** `https://cursor.com`

**Base URL:** `http://<你的IP>:<你的端口>/cursor`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#cursor)

## 模型列表

> [!WARNING]
> 在后台展开Token详情可以查看最新的可用模型

- `composer-1`
- `claude-4.5-opus-high`
- `claude-4.5-opus-high-thinking`
- `claude-4.5-sonnet`
- `claude-4.5-sonnet-thinking`
- `gpt-5.2-codex`
- `gpt-5.2-codex-high`
- `gpt-5.2-codex-low`
- `gpt-5.2-codex-xhigh`
- `gpt-5.2-codex-fast`
- `gpt-5.2-codex-high-fast`
- `gpt-5.2-codex-low-fast`
- `gpt-5.2-codex-xhigh-fast`
- `gpt-5.1-codex-max`
- `gpt-5.1-codex-max-high`
- `gpt-5.1-codex-max-low`
- `gpt-5.1-codex-max-xhigh`
- `gpt-5.1-codex-max-medium-fast`
- `gpt-5.1-codex-max-high-fast`
- `gpt-5.1-codex-max-low-fast`
- `gpt-5.1-codex-max-xhigh-fast`
- `gpt-5.2`
- `gpt-5.2-fast`
- `gpt-5.2-high`
- `gpt-5.2-high-fast`
- `gpt-5.2-xhigh`
- `gpt-5.2-xhigh-fast`
- `gpt-5.2-low`
- `gpt-5.2-low-fast`
- `gpt-5.1-high`
- `gemini-3-pro`
- `gemini-3-flash`
- `gpt-5.1-codex-mini`
- `gpt-5.1-codex-mini-high`
- `gpt-5.1-codex-mini-low`
- `claude-4.5-haiku`
- `claude-4.5-haiku-thinking`
- `grok-code-fast-1`
- `claude-4-sonnet`
- `claude-4-sonnet-thinking`
- `claude-4-sonnet-1m`
- `claude-4-sonnet-1m-thinking`
- `gpt-5-mini`
- `gemini-2.5-flash`
- `kimi-k2-instruct`

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
