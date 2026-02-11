# Sora 官网逆向接口文档

## 基础信息

**官网地址：** `https://sora.chatgpt.com`

**Base URL:** `http://<你的IP>:<你的端口>/sora`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#openai)

## 模型列表

| 模型名称      | 功能说明           |
| ------------- | ------------------ |
| `sora_image`  | 图像生成           |
| `sora_video`  | 视频生成（旧版本） |
| `sora_video2` | 视频生成（Sora2）  |

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值                 | 说明                                                                 | 适用模型      |
| ------------------------ | -------------------------------------------------------------------- | ------------- |
| `portrait` / `landscape` | 生成视频的方向，默认竖屏                                             | `sora_video2` |
| `10s` / `15s` / `25s`    | 生成视频时长，默认 10 秒                                             | `sora_video2` |
| `hd`                     | 生成高清视频，只有 Pro 订阅类型的账户可用                            | `sora_video2` |
| `pro`                    | 使用 Pro 版本模型生成视频，只有 Pro 订阅类型的账户可用，默认基础版本 | `sora_video2` |
| `storyboard`             | 故事板实现更精细的视频生成细节控制                                   | `sora_video2` |

## 额外参数说明

| 参数                   | 描述                                                                        | 取值范围/选项                                                   | 默认值  | 备注                                                                                                              |
| ---------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `size`                 | 生成图片或视频的尺寸，格式为 `widthxheight`，例如 `1024x1024`、`1920x1080`  | 任意符合格式的数值                                              | -       | 图片：宽高相同为 `1:1`，宽大于高为 `3:2`，高大于宽为 `2:3`；视频：宽大于高为横屏，高大于宽为竖屏                  |
| `n`                    | 生成不同变体的数量                                                          | 1-4                                                             | 1       | -                                                                                                                 |
| `watermark`            | 是否保留 Sora2 视频生成后的水印                                             | `true` / `false`                                                | `false` | -                                                                                                                 |
| `duration`或`seconds`  | Sora2 视频生成时长                                                          | 10、15、25                                                      | 10      | -                                                                                                                 |
| `hd`                   | 是否生成高清视频，需使用 `sora_video2-pro` 且时长不可为 25s                 | `true` / `false`                                                | `false` | -                                                                                                                 |
| `private`              | 是否开启隐私模式，为 `true` 时视频不会发布且无法 `remix`                    | `true` / `false`                                                | `false` | -                                                                                                                 |
| `style`                | 视频风格，仅 `sora_video2` 模型支持                                         | `thanksgiving`、`comic`、`news`、`selfie`、`nostalgic`、`anime` | -       | `thanksgiving`（感恩节）、`comic`（漫画）、`news`（新闻）、`selfie`（自拍）、`nostalgic`（复古）、`anime`（动漫） |
| `storyboard`           | 是否使用故事板实现更精细的视频生成细节控制                                  | `true` / `false`                                                | `false` | -                                                                                                                 |
| `character_url`        | 创建角色需要的视频链接，注意视频中不能出现真人，否则会失败                  | `url` / `base64`                                                | -       | 需开通角色接口权限才生效                                                                                          |
| `character_timestamps` | 视频角色出现的秒数范围，格式 {start},{end}, 注意 end-start 的范围 1 ～ 3 秒 | `string`                                                        | `0,3`   | 需开通角色接口权限才生效                                                                                          |
| `character_create`     | 创建视频完成后，会自动根据生成的视频创建角色                                | `true` / `false`                                                | `false` | 需开通角色接口权限才生效                                                                                          |
| `character_from_task`  | 可以根据已经生成的任务 id，来创建角色                                       | `string`                                                        | -       | 需开通角色接口权限才生效                                                                                          |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Characters`](/others/api-reference.md#v1characters) 接口            |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
