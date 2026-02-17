# Claude Code 终端逆向接口文档

## 基础信息

**官网地址：** `https://claude.com/product/claude-code`

**Base URL:** `http://<你的IP>:<你的端口>/claude_api`

**认证方式:** `Bearer Token`、`X-Api-Key请求头`

**Token 提取：** [点击查看](/others/extract-token.md#anthropic)

## 模型列表

- `claude-sonnet-4-20250514`
- `claude-opus-4-20250514`
- `claude-3-7-sonnet-20250219`
- `claude-3-opus-20240229`
- `claude-3-5-haiku-20241022`
- `claude-3-5-sonnet-20241022`
- `claude-3-5-sonnet-20240620`
- `claude-3-haiku-20240307`
- `claude-opus-4-1-20250805`
- `claude-sonnet-4-5-20250929`
- `claude-haiku-4-5-20251001`
- `claude-opus-4-5-20251101`
- `claude-opus-4-6`
- `claude-sonnet-4-6`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     | 适用范围                                                                                                                                                            |
| ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `thinking` | 开启思考模式 | `claude-3-opus-20240229`、<br>`claude-3-5-haiku-20241022`、<br>`claude-3-5-sonnet-20241022`、<br>`claude-3-5-sonnet-20240620`、<br>`claude-3-haiku-20240307` 不可用 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    |    -     |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
