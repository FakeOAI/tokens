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

## 支持的接口

> [!WARNING]
>
> 图片接口需要额外付费开通

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [普通对话]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [图片理解]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "图片里面有什么内容"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [音频理解]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "音频里面讲了什么"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [视频理解]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "视频里面讲了什么"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [函数调用]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": "What is the weather like in Boston today?"
    }],
    "tools": [{
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"]
                    }
                },
                "required": ["location"]
            }
        }
    }],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [代码执行]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": "What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50."
    }],
    "tools": [{
        "type": "function",
        "function": {
            "name": "codeExecution"
        }
    }],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

:::

### 图片接口

官方文档：`https://platform.openai.com/docs/api-reference/images/create`

::: code-group

```bash [文生4K图]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/images/generations' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="gemini-3-pro-image"'
--form 'image_size="4K"'
```

```bash [图生4K图]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1/images/edits' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="gemini-3-pro-image"'
--form 'image_size="4K"'
```

:::

### Gemini API 原生格式

官方文档：`https://ai.google.dev/gemini-api/docs`

::: code-group

```bash [非流式]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-low:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"你是什么模型?"}]}]}'
```

```bash [流式]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-low:streamGenerateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"你是什么模型?"}]}]}'
```

```bash [文生4K图]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-image:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"画小猫"}]}],"generationConfig":{"responseModalities":["TEXT","IMAGE"],"imageConfig":{"aspectRatio":"1:1","imageSize":"4K"}}}'
```

```bash [图生4K图]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-image:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"换一个风格"},{"inline_data":{"mime_type":"image/jpeg","data":"$IMG_BASE64"}}]}],"generationConfig":{"responseModalities":["TEXT","IMAGE"],"imageConfig":{"aspectRatio":"1:1","imageSize":"4K"}}}'
```

```bash [联网搜索]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-2.5-flash:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"今日金价是多少？"}]}],"tools":[{"googleSearch":{}}]}'
```

```bash [思考模式]
curl -X POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-high:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"9.8和9.11谁大"}]}],"generationConfig":{"thinkingConfig":{"includeThoughts":true,"thinkingLevel":"high"}}}'
```

:::

## 额外参数说明

| 参数           | 描述                                              | 取值范围/选项      | 默认值 |
| -------------- | ------------------------------------------------- | ------------------ | ------ |
| `aspect_ratio` | 指定图片比例，仅对话和图片接口的 image 模型支持   | 任意比例           | `1:1`  |
| `image_size`   | 指定图片分辨率，仅对话和图片接口的 image 模型支持 | `1K` / `2K` / `4K` | `1K`   |
