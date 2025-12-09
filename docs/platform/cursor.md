# Cursor 官网逆向接口文档

## 基础信息

**官网地址：** `https://cursor.com`

**Base URL:** `http://<你的IP>:<你的端口>/cursor`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#cursor)

## 模型列表

> [!WARNING]
> Cursor 设置里面有的模型都支持

- `gpt-3.5-turbo`
- `gpt-4`
- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4.1`
- `gpt-5`
- `o1-mini`
- `o3-mini`
- `o4-mini`
- `claude-3-opus`
- `claude-3.5-haiku`
- `claude-3.5-sonnet`
- `claude-3.7-sonnet`
- `claude-3.7-sonnet-thinking`
- `gemini-2.0-flash`
- `gemini-2.5-flash-preview-04-17`
- `gemini-2.5-pro-exp-03-25`
- `gemini-2.5-pro-preview-05-26`
- `grok-2`
- `grok-3-beta`
- `grok-3-mini-beta`
- `grok-4-0709`
- `deepseek-v3`
- `deepseek-v3.1`
- `deepseek-r1`
- `gpt-4.5-preview`
- `gpt-5-max`
- `o1`
- `o1-preview`
- `claude-3.7-sonnet-max`
- `claude-3.7-sonnet-thinking-max`
- `claude-4-sonnet-max`
- `claude-4-sonnet-thinking-max`
- `claude-4-opus-max`
- `claude-4-opus-thinking-max`
- `gemini-2.5-pro-max`
- `gemini-2.5-pro-exp-03-25-max`

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
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
