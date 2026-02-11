# Gemini Business 官网逆向接口文档

## 基础信息

**官网地址：** `https://business.gemini.google`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_business`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-business)

## 模型列表

- `auto`
- `gemini-2.5-flash`
- `gemini-2.5-pro`
- `gemini-3-flash-preview`
- `gemini-3-pro-preview`
- `claude-sonnet-4-5`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值 | 说明                                | 适用范围      |
| -------- | ----------------------------------- | ------------- |
| `image`  | 调用图像生成能力（Nano Banana Pro） | `auto` 不可用 |
| `video`  | 调用视频生成能力（Veo 3.1）         | `auto` 不可用 |
| `search` | 调用搜索能力                        | `auto` 不可用 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
