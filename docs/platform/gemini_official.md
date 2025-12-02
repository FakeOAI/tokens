# Gemini 官网逆向接口文档

## 基础信息

**官网地址：** `https://gemini.google.com`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_official`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-官网)

### 模型列表

| 模型名称                | 特殊说明                             |
| ----------------------- | ------------------------------------ |
| `gemini-2.5-flash-free` | 无需加号即可调用，不支持图片文件分析 |
| `gemini-2.5-flash`      | -                                    |
| `gemini-2.5-pro`        | 已废弃，请使用 `gemini-3-pro`        |
| `gemini-3-pro`          | -                                    |

**模型参数组合**

所有模型都支持使用 `-` 连接符组合参数，例如：`gemini-2.5-pro-imagen`

**支持的参数**

| 参数         | 说明                            | 适用模型            |
| ------------ | ------------------------------- | ------------------- |
| `imagen`     | 调用图像生成能力（Nano Banana） | 全系模型            |
| `video`      | 调用视频生成能力（Veo 3.1）     | 仅支持 Pro 系列模型 |
| `canvas`     | 调用 Canvas 创作能力            | 全系模型            |
| `deepsearch` | 调用深度研究能力                | 全系模型            |
| `storybook`  | 调用故事创作能力                | 全系模型            |

## 支持的接口

> [!WARNING]
>
> 图片接口需要额外付费开通

### 对话接口

OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "gemini-2.5-flash",
    "stream": true
}'
```

### 图片接口

官方文档：`https://platform.openai.com/docs/api-reference/images/create`

::: code-group

```bash [文生图]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/generations' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="gemini-2.5-flash-imagen"'
```

```bash [图生图]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/edits' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="gemini-2.5-flash-imagen"'
```

:::

## 额外参数说明

| 参数                  | 描述                                                                                         | 取值范围/选项      | 默认值  |
| --------------------- | -------------------------------------------------------------------------------------------- | ------------------ | ------- |
| `return_origin_image` | 调用 `imagen` 系列模型时是否返回原图（2K、有水印），默认是 1K 且无水印                       | `true` / `false`   | `false` |
| `size`                | 调用 `imagen` 系列模型时生成图片的尺寸，格式为 `widthxheight`，例如 `1024x1024`、`1920x1080` | 任意符合格式的数值 | -       |
