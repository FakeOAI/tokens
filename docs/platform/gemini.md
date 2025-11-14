# Gemini API 官方接口文档

## 基础信息

**官网地址：** `https://ai.google.dev/gemini-api/docs`

**Base URL:** `http://<你的IP>:<你的端口>/gemini`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-api)

## 模型列表

> [!WARNING]
> 官网 API 支持的模型都支持

### Flash 系列

| 模型名称                                    | 功能说明                        |
| ------------------------------------------- | ------------------------------- |
| `gemini-2.0-flash`                          | Gemini 2.0 Flash                |
| `gemini-2.0-flash-preview-image-generation` | Gemini 2.0 Flash 图像生成预览版 |
| `gemini-2.5-flash`                          | Gemini 2.5 Flash                |
| `gemini-2.5-flash-preview-05-20`            | Gemini 2.5 Flash 预览版         |
| `gemini-2.5-flash-preview-tts`              | Gemini 2.5 Flash TTS 预览版     |
| `gemini-2.5-flash-thinking`                 | Gemini 2.5 Flash 思考模式       |

### Pro 系列

| 模型名称                     | 功能说明                  |
| ---------------------------- | ------------------------- |
| `gemini-2.5-pro`             | Gemini 2.5 Pro            |
| `gemini-2.5-pro-preview-tts` | Gemini 2.5 Pro TTS 预览版 |
| `gemini-2.5-pro-thinking`    | Gemini 2.5 Pro 思考模式   |

## 支持的接口

### 对话接口

OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

Gemini 官方文档：`https://ai.google.dev/gemini-api/docs`

::: code-group

```bash [普通对话]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

```bash [图像生成]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画小猫"}],
    "model": "gemini-2.0-flash-exp-image-generation",
    "stream": true
}'
```

```bash [图片理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

```bash [音频理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

```bash [视频理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

```bash [函数调用]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

```bash [代码执行]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

:::
