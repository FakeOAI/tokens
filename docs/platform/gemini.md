# Gemini API 官方接口文档

## 基础信息

**官网地址：** `https://ai.google.dev/gemini-api/docs`

**Base URL:** `http://<你的IP>:<你的端口>/gemini`

**认证方式:** `Bearer Token`、`X-Goog-Api-Key请求头`、`URL参数key`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-api)

## 模型列表

> [!WARNING]
> 官网 API 支持的模型**基本上都支持**

- `gemini-2.5-flash`
- `gemini-2.5-pro`
- `gemini-3-pro-preview`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     | 适用范围                                                             |
| ---------- | ------------ | -------------------------------------------------------------------- |
| `thinking` | 开启思考模式 | `gemini-2.5-flash`、<br>`gemini-2.5-pro`、<br>`gemini-3-pro-preview` |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ❌    |    ❌    |    -     |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
