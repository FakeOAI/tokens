# Gemini 官网逆向接口文档

## 基础信息

**官网地址：** `https://gemini.google.com`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_official`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-官网)

### 模型列表

- `gemini-3-fast`
- `gemini-3-thinking`
- `gemini-3-pro`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值     | 说明                            | 适用模型 |
| ------------ | ------------------------------- | -------- |
| `imagen`     | 调用图像生成能力（Nano Banana） | 全系模型 |
| `video`      | 调用视频生成能力（Veo 3.1）     | 全系模型 |
| `canvas`     | 调用 Canvas 创作能力            | 全系模型 |
| `deepsearch` | 调用深度研究能力                | 全系模型 |
| `storybook`  | 调用故事创作能力                | 全系模型 |

## 额外参数说明

| 参数                  | 描述                                                                                         | 取值范围/选项      | 默认值  |
| --------------------- | -------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `return_origin_image` | 调用 `imagen` 系列模型时是否返回原图（2K、除了 Ultra 号都有水印），默认是 1K 且无水印        | `true` / `false`   | `false` |
| `size`                | 调用 `imagen` 系列模型时生成图片的尺寸，格式为 `widthxheight`，例如 `1024x1024`、`1920x1080` | 任意符合格式的数值 | -       |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
