# Kiro 客户端逆向接口文档

## 基础信息

**官网地址：** `https://app.kiro.dev`

**Base URL:** `http://<你的IP>:<你的端口>/kiro`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#kiro)

## 模型列表

- `auto`
- `claude-sonnet-4.5`
- `claude-sonnet-4`
- `claude-haiku-4.5`
- `claude-opus-4.5`
- `claude-opus-4.6`
- `claude-sonnet-4.6`
- `deepseek-3.2`
- `minimax-m2.1`
- `qwen3-coder-next`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     | 适用范围                                                  |
| ---------- | ------------ | --------------------------------------------------------- |
| `thinking` | 开启思考模式 | `auto`、`deepseek-3.2`、<br>`qwen3-coder-next` 不可用 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |                            -                             |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |                            -                             |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |                            -                             |
