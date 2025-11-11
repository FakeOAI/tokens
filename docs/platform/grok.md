# Grok 官网逆向接口文档

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

### 模型参数组合

所有模型都支持使用 `-` 连接符组合参数，例如：`grok-4-deepsearch`

**支持的参数：**

| 参数         | 说明             | 适用模型 |
| ------------ | ---------------- | -------- |
| `deepsearch` | 调用深度研究能力 | 全系模型 |

## API 端点

### 对话补全接口

创建对话补全请求，支持流式和非流式输出。

**端点:** `POST /v1/chat/completions`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数       | 类型    | 必填 | 说明                           |
| ---------- | ------- | ---- | ------------------------------ |
| `messages` | array   | 是   | 对话消息数组                   |
| `model`    | string  | 是   | 使用的模型名称（支持参数组合） |
| `stream`   | boolean | 否   | 是否使用流式输出，默认为 false |

**请求示例:**

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
