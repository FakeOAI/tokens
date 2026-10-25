# Gemini AIStudio 官网逆向接口文档

## 基础信息

**官网地址：** `https://studio.google.com`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_aistudio`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-aistudio)

## 模型列表

- `gemini-4-argon`
- `gemini-3.8-flash`
- `gemini-3.5-flash-lite`
- `gemini-3.1-pro-preview`
- `gemini-3.6-flash`
- `gemini-3.1-flash-lite`
- `gemini-3-flash-preview`
- `gemini-nano-banana-2.1`
- `gemini-3.1-flash-lite-image`
- `gemini-3.1-flash-image`
- `gemini-3-pro-image`
- `gemini-2.5-flash-image`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值                              | 说明       |
| ------------------------------------- | ---------- |
| `1K` / `2K` / `4K`                    | 图片分辨率 |
| `minimal` / `low` / `medium` / `high` | 思考等级   |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    |                            -                             |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    |                            -                             |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |                            -                             |
