# Grok 官网逆向接口文档

## 基础信息

**官网地址：** `https://grok.com`

**Base URL:** `http://<你的IP>:<你的端口>/grok`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#grok)

## 模型列表

- `auto`
- `grok-3`
- `grok-4`
- `grok-4-1-thinking-1129`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值     | 说明             | 适用模型 |
| ------------ | ---------------- | -------- |
| `deepsearch` | 调用深度研究能力 | 全系模型 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
