# Antigravity 客户端逆向接口文档

## 基础信息

**官网地址：** `https://antigravity.google`

**Base URL:** `http://<你的IP>:<你的端口>/antigravity`

**认证方式:** `Bearer Token`、`X-Goog-Api-Key请求头`、`URL参数key`

**Token 提取：** [点击查看](/others/extract-token.md#antigravity)

## 模型列表

- `gemini-2.5-flash`
- `gemini-2.5-flash-image`
- `gemini-2.5-flash-lite`
- `gemini-2.5-flash-thinking`
- `gemini-2.5-pro`
- `gemini-3-pro-image`
- `gemini-3-pro-low`
- `gemini-3-pro-high`
- `claude-sonnet-4-5`
- `claude-sonnet-4-5-thinking`
- `claude-opus-4-5-thinking`
- `gpt-oss-120b-medium`
- `gemini-3-flash`
- `claude-opus-4-6-thinking`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值           | 说明           | 适用范围                                           |
| ------------------ | -------------- | -------------------------------------------------- |
| `1K` / `2K` / `4K` | 指定图片分辨率 | `gemini-3-pro-image`、<br>`gemini-2.5-flash-image` |

## 额外参数说明

| 参数           | 描述                                              | 取值范围/选项      | 默认值 |
| -------------- | ------------------------------------------------- | ------------------ | ------ |
| `aspect_ratio` | 指定图片比例，仅对话和图片接口的 image 模型支持   | 任意比例           | `1:1`  |
| `image_size`   | 指定图片分辨率，仅对话和图片接口的 image 模型支持 | `1K` / `2K` / `4K` | `1K`   |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |                            -                             |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    |                            -                             |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |                            -                             |
