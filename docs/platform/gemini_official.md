# Gemini 官网逆向接口文档

## 基础信息

**官网地址：** `https://gemini.google.com`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_official`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-官网)

## 模型列表

### Flash 系列模型

| 模型名称                      | 功能说明                    | 特殊要求                             |
| ----------------------------- | --------------------------- | ------------------------------------ |
| `gemini-2.5-flash-free`       | 基础对话模型                | 无需加号即可调用，不支持图片文件分析 |
| `gemini-2.5-flash`            | 标准对话模型                | -                                    |
| `gemini-2.5-flash-imagen`     | 图像生成模型（Nano Banana） | -                                    |
| `gemini-2.5-flash-canvas`     | Canvas 创作能力             | -                                    |
| `gemini-2.5-flash-deepsearch` | 深度研究模型                | -                                    |
| `gemini-2.5-flash-storybook`  | Storybook 故事创作          | -                                    |

### Pro 系列模型

| 模型名称                    | 功能说明                        | 特殊要求                             |
| --------------------------- | ------------------------------- | ------------------------------------ |
| `gemini-2.5-pro`            | 专业对话模型                    | -                                    |
| `gemini-2.5-pro-deepsearch` | 深度研究模型（Pro）             | -                                    |
| `gemini-2.5-pro-video`      | 视频生成模型（Veo 3.1）         | 默认返回 base64，返回 URL 需配置 OSS |
| `gemini-2.5-pro-canvas`     | Canvas 创作能力（Pro）          | -                                    |
| `gemini-2.5-pro-imagen`     | 图像生成模型（Nano Banana Pro） | -                                    |
| `gemini-2.5-pro-storybook`  | Storybook 故事创作（Pro）       | -                                    |

## 支持的接口

> [!WARNING]
>
> 图片接口需要额外付费开通

### 对话接口

OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.5-flash",
    "stream": true
}'
```

### 图片接口

官方文档：`https://platform.openai.com/docs/api-reference/images/create`

::: code-group

```bash [文生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/generations' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="gemini-2.5-flash-imagen"'
```

```bash [图生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/edits' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="gemini-2.5-flash-imagen"'
```

:::

## 额外参数说明

| 参数                  | 描述                                         | 取值范围/选项    | 默认值  |
| --------------------- | -------------------------------------------- | ---------------- | ------- |
| `return_origin_image` | 调用 `imagen` 系列模型时是否返回原图         | `true` / `false` | `false` |
| `remove_watermark`    | 调用 `imagen` 系列模型时是否去除图片中的水印 | `true` / `false` | `false` |
