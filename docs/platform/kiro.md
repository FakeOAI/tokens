# Kiro 客户端逆向接口文档

## 接口支持概览

| 端点接口                 | 支持情况 | 函数调用 |   备注   |
| :----------------------- | :------: | :------: | :------: |
| `V1ChatCompletions` 接口 |    ✅    |    ✅    |    -     |
| `V1Messages` 接口        |    ✅    |    ✅    | 额外收费 |
| `V1Responses` 接口       |    ❌    |    ❌    |    -     |
| `V1BetaModels` 接口      |    ✅    |    ✅    | 额外收费 |
| `V1Images` 接口          |    ❌    |    ❌    |    -     |
| `V1Videos` 接口          |    ❌    |    ❌    |    -     |

## 基础信息

**官网地址：** `https://app.kiro.dev`

**Base URL:** `http://<你的IP>:<你的端口>/kiro`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#kiro)

## 模型列表

- `auto`
- `claude-sonnet-4.5`
- `claude-sonnet-4`
- `claude-haiku-4.5`
- `claude-opus-4.5`
- `claude-opus-4.6`

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [流式对话]
curl -X POST 'http://<你的IP>:<你的端口>/kiro/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "claude-sonnet-4.5",
    "stream": true
}'
```

```bash [函数调用]
curl -X POST 'http://<你的IP>:<你的端口>/kiro/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "What is the weather like in Boston today?"
        }
    ],
    "tools": [
        {
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
                            "enum": [
                                "celsius",
                                "fahrenheit"
                            ]
                        }
                    },
                    "required": [
                        "location"
                    ]
                }
            }
        }
    ],
    "model": "claude-sonnet-4.5",
    "stream": false
}'
```

:::
