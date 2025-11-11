# Claude 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/claude`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

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

## API 端点

### 对话补全接口

创建对话补全请求。

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
| `model`    | string  | 是   | 使用的模型名称                 |
| `stream`   | boolean | 否   | 是否使用流式输出，默认为 false |

**示例:**

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

**思考模式示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "解释一下量子纠缠"}],
    "model": "claude-3-7-sonnet-20250219-thinking",
    "stream": true
}'
```
