# Antigravity 客户端逆向接口文档

## 基础信息

**官网地址：** `https://antigravity.google`

**Base URL:** `http://<你的IP>:<你的端口>/antigravity`

**认证方式:** `Bearer Token`、`X-Goog-Api-Key请求头`、`URL参数key`

**Token 提取：** [点击查看](/others/extract-token.md#antigravity)

## 模型列表

| 模型名称                     |
| ---------------------------- |
| `gemini-3-pro-low`           |
| `gemini-3-pro-high`          |
| `claude-sonnet-4-5`          |
| `claude-sonnet-4-5-thinking` |
| `gpt-oss-120b-medium`        |

## 支持的接口

```bash [普通对话]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [图片理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
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
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [音频理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
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
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [视频理解]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
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
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [函数调用]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
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
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

```bash [代码执行]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
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
    "model": "gemini-3-pro-low",
    "stream": true
}'
```

:::

### Gemini API 原生格式

官方文档：`https://ai.google.dev/gemini-api/docs`

::: code-group

```bash [非流式]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-low/generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: Bearer <你的许可证>' \
--data-raw '{"contents":[{"parts":[{"text":"你是什么模型?"}]}]}'
```

```bash [流式]
curl --location --request POST 'http://<你的IP>:<你的端口>/antigravity/v1beta/models/gemini-3-pro-low/streamGenerateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: Bearer <你的许可证>' \
--data-raw '{"contents":[{"parts":[{"text":"你是什么模型?"}]}]}'
```

:::
