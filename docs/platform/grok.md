# Grok 官网逆向接口文档

## 接口支持概览

| 端点接口                 | 支持情况 | 函数调用 |   备注   |
| :----------------------- | :------: | :------: | :------: |
| `V1ChatCompletions` 接口 |    ✅    |    ❌    |    -     |
| `V1Messages` 接口        |    ✅    |    ❌    | 额外收费 |
| `V1Responses` 接口       |    ❌    |    ❌    |    -     |
| `V1BetaModels` 接口      |    ✅    |    ❌    | 额外收费 |
| `V1Images` 接口          |    ❌    |    ❌    |    -     |
| `V1Videos` 接口          |    ❌    |    ❌    |    -     |

## 基础信息

**官网地址：** `https://grok.com`

**Base URL:** `http://<你的IP>:<你的端口>/grok`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#grok)

## 模型列表

- `auto`
- `grok-3`
- `grok-4`
- `grok-4-1-thinking-1129`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值     | 说明             | 适用模型 |
| ------------ | ---------------- | -------- |
| `deepsearch` | 调用深度研究能力 | 全系模型 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/grok/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "grok-4",
    "stream": true
}'
```
