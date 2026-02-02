# Cursor 官网逆向接口文档

## 基础信息

**官网地址：** `https://cursor.com`

**Base URL:** `http://<你的IP>:<你的端口>/cursor`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#cursor)

## 模型列表

> [!WARNING]
> 在后台展开Token详情可以查看最新的可用模型

- `composer-1`
- `claude-4.5-opus-high`
- `claude-4.5-opus-high-thinking`
- `claude-4.5-sonnet`
- `claude-4.5-sonnet-thinking`
- `gpt-5.2-codex`
- `gpt-5.2-codex-high`
- `gpt-5.2-codex-low`
- `gpt-5.2-codex-xhigh`
- `gpt-5.2-codex-fast`
- `gpt-5.2-codex-high-fast`
- `gpt-5.2-codex-low-fast`
- `gpt-5.2-codex-xhigh-fast`
- `gpt-5.1-codex-max`
- `gpt-5.1-codex-max-high`
- `gpt-5.1-codex-max-low`
- `gpt-5.1-codex-max-xhigh`
- `gpt-5.1-codex-max-medium-fast`
- `gpt-5.1-codex-max-high-fast`
- `gpt-5.1-codex-max-low-fast`
- `gpt-5.1-codex-max-xhigh-fast`
- `gpt-5.2`
- `gpt-5.2-fast`
- `gpt-5.2-high`
- `gpt-5.2-high-fast`
- `gpt-5.2-xhigh`
- `gpt-5.2-xhigh-fast`
- `gpt-5.2-low`
- `gpt-5.2-low-fast`
- `gpt-5.1-high`
- `gemini-3-pro`
- `gemini-3-flash`
- `gpt-5.1-codex-mini`
- `gpt-5.1-codex-mini-high`
- `gpt-5.1-codex-mini-low`
- `claude-4.5-haiku`
- `claude-4.5-haiku-thinking`
- `grok-code-fast-1`
- `claude-4-sonnet`
- `claude-4-sonnet-thinking`
- `claude-4-sonnet-1m`
- `claude-4-sonnet-1m-thinking`
- `gpt-5-mini`
- `gemini-2.5-flash`
- `kimi-k2-instruct`

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [流式对话]
curl -X POST 'http://<你的IP>:<你的端口>/cursor/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "claude-3.7-sonnet-thinking",
    "stream": true
}'
```

```bash [函数调用]
curl -X POST 'http://<你的IP>:<你的端口>/cursor/v1/chat/completions' \
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
    "model": "gpt-4o",
    "stream": false
}'
```

:::
