# Kiro 客户端逆向接口文档

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

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
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
