# Claude 官网逆向接口文档

## 基础信息

**官网地址：** `https://claude.ai`

**Base URL:** `http://<你的IP>:<你的端口>/claude`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

**Token 提取：** [点击查看](/others/extract-token.md#anthropic)

## 模型列表

#### Claude 3 系列

| 模型名称                    | 功能说明         |
| --------------------------- | ---------------- |
| `claude-3-opus-20240229`    | Claude 3 Opus    |
| `claude-3-5-haiku-20241022` | Claude 3.5 Haiku |

#### Claude 3.7 系列

| 模型名称                              | 功能说明                   |
| ------------------------------------- | -------------------------- |
| `claude-3-7-sonnet-20250219`          | Claude 3.7 Sonnet          |
| `claude-3-7-sonnet-20250219-thinking` | Claude 3.7 Sonnet 思考模式 |

#### Claude 4 Sonnet 系列

| 模型名称                              | 功能说明                   |
| ------------------------------------- | -------------------------- |
| `claude-sonnet-4-20250514`            | Claude 4 Sonnet            |
| `claude-sonnet-4-20250514-thinking`   | Claude 4 Sonnet 思考模式   |
| `claude-sonnet-4-5-20250929`          | Claude 4.5 Sonnet          |
| `claude-sonnet-4-5-20250929-thinking` | Claude 4.5 Sonnet 思考模式 |

#### Claude 4 Opus 系列

| 模型名称                            | 功能说明                 |
| ----------------------------------- | ------------------------ |
| `claude-opus-4-20250514`            | Claude 4 Opus            |
| `claude-opus-4-20250514-thinking`   | Claude 4 Opus 思考模式   |
| `claude-opus-4-1-20250805`          | Claude 4.1 Opus          |
| `claude-opus-4-1-20250805-thinking` | Claude 4.1 Opus 思考模式 |

#### Claude 4 Haiku 系列

| 模型名称                             | 功能说明                  |
| ------------------------------------ | ------------------------- |
| `claude-haiku-4-5-20251001`          | Claude 4.5 Haiku          |
| `claude-haiku-4-5-20251001-thinking` | Claude 4.5 Haiku 思考模式 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-3-7-sonnet-20250219",
    "stream": true
}'
```
