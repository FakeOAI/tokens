# Adobe Firefly 官网逆向接口文档

## 基础信息

**官网地址：** `https://firefly.adobe.com/`

**Base URL:** `http://<你的IP>:<你的端口>/adobe`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#flow)

## 模型列表

- `gpt-image-1.5`
- `gpt-image-2`
- `nano-banana`
- `nano-banana-pro`
- `nano-banana-2`
- `veo-3-1`
- `veo-3-1-fast`
- `sora-2`
- `seedance-2`
- `seedance-2-fast`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值                                                                                                                       | 说明               |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `480p`、 `720p`、`1080p`                                                                                                       | 生成视频的分辨率   |
| `9:16`、`16:9`                                                                                                                 | 生成视频的比例     |
| `4s`、`6s`、`8s`、`12s`                                                                                                        | 生成视频的时长     |
| `fl`                                                                                                                           | 是否生成首尾帧视频 |
| `1K`、`2K`、`4K`                                                                                                               | 生成图片的分辨率   |
| `8:1`、`4:1`、`2:3`、<br/>`1:1`、`3:2`、`21:9`、<br/>`16:9`、`5:4`、`4:3`、<br/>`3:2`、`1:1`、`4:5`、<br/>`3:4`、`2:3`、`9:16` | 生成视频图片比例   |

## 额外参数说明

| 参数   | 描述                                                                       | 取值范围/选项      | 默认值 | 备注                                           |
| ------ | -------------------------------------------------------------------------- | ------------------ | ------ | ---------------------------------------------- |
| `n`    | 图片或视频生成不同变体的数量                                               | 1-4                | 1      | 视频接口不支持此参数，仅对话接口和图片接口支持 |
| `size` | 生成图片或视频的尺寸，格式为 `widthxheight`，例如 `1024x1024`、`1920x1080` | 任意符合格式的数值 | -      | 宽大于高为横屏，高大于宽为竖屏                 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |                            -                             |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
