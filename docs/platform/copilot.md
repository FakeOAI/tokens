# Copilot 客户端逆向接口文档

## 基础信息

**官网地址：** `https://www.copilot.com/`

**Base URL:** `http://<你的IP>:<你的端口>/copilot`

**认证方式:** `Bearer Token`、`X-Goog-Api-Key请求头`、`URL参数key`

**Token 提取：** [点击查看](/others/extract-token.md#copilot)

## 模型列表

- `claude-opus-4.6`
- `claude-sonnet-4.6`
- `claude-haiku-4.5`
- `claude-sonnet-4`
- `gemini-3.1-pro-preview`
- `gemini-3-flash-preview`
- `gemini-3-pro`
- `gemini-2.5-pro`
- `gemini-2.5-flash`
- `gpt-5.4`
- `gpt-5.4-mini`
- `gpt-5-mini`
- `gpt-5.3-codex`
- `gpt-5.2-codex`

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 | 备注 |
| :--------------------------------------------------------------------- | :------: | :------: | :--: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |  -   |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    |  -   |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ✅    |    ✅    |  -   |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ❌    |    ❌    |  -   |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |  -   |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |  -   |
