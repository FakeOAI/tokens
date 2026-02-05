# Claude 官网逆向接口文档

## 基础信息

**官网地址：** `https://claude.ai`

**Base URL:** `http://<你的IP>:<你的端口>/claude`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#anthropic)

## 模型列表

- `claude-sonnet-4-20250514`
- `claude-opus-4-20250514`
- `claude-3-7-sonnet-20250219`
- `claude-3-opus-20240229`
- `claude-3-5-haiku-20241022`
- `claude-3-5-sonnet-20241022`
- `claude-3-5-sonnet-20240620`
- `claude-3-haiku-20240307`
- `claude-opus-4-1-20250805`
- `claude-sonnet-4-5-20250929`
- `claude-haiku-4-5-20251001`
- `claude-opus-4-5-20251101`
- `claude-opus-4-6`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     | 适用范围                                                                                                   |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `thinking` | 开启思考模式 | `claude-3-opus-20240229`、<br>`claude-3-5-haiku-20241022`、<br>`claude-3-5-sonnet-20241022`、<br>`claude-3-5-sonnet-20240620`、<br>`claude-3-haiku-20240307` 不可用 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/claude/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "claude-3-7-sonnet-20250219",
    "stream": true
}'
```
