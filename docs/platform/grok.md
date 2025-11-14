# Grok 官网逆向接口文档

官网地址：`https://grok.com`

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/grok`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

## 模型列表

| 模型名称                     | 功能说明                                     |
| ---------------------------- | -------------------------------------------- |
| `grok-3`                     | 快速回应模式                                 |
| `grok-4-auto`                | 最佳模式，智能调用思考、画图、联网搜索等能力 |
| `grok-4`                     | 专家模式，智能调用思考、画图、联网搜索等能力 |
| `grok-4-mini-thinking-tahoe` | Grok 4 快速模型                              |

**模型参数组合**

所有模型都支持使用 `-` 连接符组合参数，例如：`grok-4-deepsearch`

**支持的参数**

| 参数         | 说明             | 适用模型 |
| ------------ | ---------------- | -------- |
| `deepsearch` | 调用深度研究能力 | 全系模型 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/grok/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "grok-4",
    "stream": true
}'
```
