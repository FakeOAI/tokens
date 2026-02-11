# Gemini Cli 终端逆向接口文档

## 接口支持概览

| 端点接口                 | 支持情况 | 函数调用 |   备注   |
| :----------------------- | :------: | :------: | :------: |
| `V1ChatCompletions` 接口 |    ✅    |    ✅    |    -     |
| `V1Messages` 接口        |    ✅    |    ✅    | 额外收费 |
| `V1Responses` 接口       |    ❌    |    ❌    |    -     |
| `V1BetaModels` 接口      |    ✅    |    ✅    |    -     |
| `V1Images` 接口          |    ❌    |    ❌    |    -     |
| `V1Videos` 接口          |    ❌    |    ❌    |    -     |

## 基础信息

**官网地址：** `https://geminicli.com`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_cli`

**认证方式:** `Bearer Token`、`X-Goog-Api-Key请求头`、`URL参数key`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-cli)

## 模型列表

> [!WARNING]
> 官网 API 支持的模型**基本上都支持**

- `gemini-2.0-flash`
- `gemini-2.0-flash_vertex`
- `gemini-2.5-flash`
- `gemini-2.5-flash_vertex`
- `gemini-2.5-pro`
- `gemini-2.5-pro_vertex`
- `gemini-3-flash-preview`
- `gemini-3-flash-preview_vertex`
- `gemini-3-pro-preview`
- `gemini-3-pro-preview_vertex`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     |
| ---------- | ------------ |
| `thinking` | 开启思考模式 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [普通对话]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

```bash [图片理解]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
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
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

```bash [音频理解]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
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
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

```bash [视频理解]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [函数调用]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
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
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

```bash [代码执行]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
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
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

:::

### Gemini API 原生格式

官方文档：`https://ai.google.dev/gemini-api/docs`

::: code-group

```bash [非流式]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1beta/models/gemini-2.5-pro:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"你是什么模型?"}]}]}'
```

```bash [流式]
curl -X POST 'http://<你的IP>:<你的端口>/gemini_cli/v1beta/models/gemini-2.5-pro:streamGenerateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data '{"contents":[{"role":"user","parts":[{"text":"你是什么模型?"}]}]}'
```

:::
