# Cursor 官网逆向接口文档

## 基础信息

**官网地址：** `https://cursor.com`

**Base URL:** `http://<你的IP>:<你的端口>/cursor`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

**Token 提取：** [点击查看](/others/extract-token.md#cursor)

## 模型列表

> [!WARNING]
> Cursor 设置里面有的模型都支持

### GPT 系列

| 模型名称        | 功能说明        |
| --------------- | --------------- |
| `gpt-3.5-turbo` | GPT-3.5 Turbo   |
| `gpt-4`         | GPT-4 标准模型  |
| `gpt-4o`        | GPT-4 Optimized |
| `gpt-4o-mini`   | GPT-4o 轻量版   |
| `gpt-4.1`       | GPT-4.1 模型    |
| `gpt-5`         | GPT-5 模型      |

### O 系列

| 模型名称  | 功能说明  |
| --------- | --------- |
| `o1-mini` | O1 轻量版 |
| `o3-mini` | O3 轻量版 |
| `o4-mini` | O4 轻量版 |

### Claude 系列

| 模型名称                     | 功能说明                   |
| ---------------------------- | -------------------------- |
| `claude-3-opus`              | Claude 3 Opus              |
| `claude-3.5-haiku`           | Claude 3.5 Haiku           |
| `claude-3.5-sonnet`          | Claude 3.5 Sonnet          |
| `claude-3.7-sonnet`          | Claude 3.7 Sonnet          |
| `claude-3.7-sonnet-thinking` | Claude 3.7 Sonnet 思考模式 |

### Gemini 系列

| 模型名称                         | 功能说明                |
| -------------------------------- | ----------------------- |
| `gemini-2.0-flash`               | Gemini 2.0 Flash        |
| `gemini-2.5-flash-preview-04-17` | Gemini 2.5 Flash 预览版 |
| `gemini-2.5-pro-exp-03-25`       | Gemini 2.5 Pro 实验版   |
| `gemini-2.5-pro-preview-05-26`   | Gemini 2.5 Pro 预览版   |

### Grok 系列

| 模型名称           | 功能说明         |
| ------------------ | ---------------- |
| `grok-2`           | Grok 2           |
| `grok-3-beta`      | Grok 3 Beta      |
| `grok-3-mini-beta` | Grok 3 Mini Beta |
| `grok-4-0709`      | Grok 4           |

### DeepSeek 系列

| 模型名称        | 功能说明      |
| --------------- | ------------- |
| `deepseek-v3`   | DeepSeek V3   |
| `deepseek-v3.1` | DeepSeek V3.1 |
| `deepseek-r1`   | DeepSeek R1   |

#### GPT Pro 模型

| 模型名称          | 功能说明       |
| ----------------- | -------------- |
| `gpt-4.5-preview` | GPT-4.5 预览版 |
| `gpt-5-max`       | GPT-5 Max      |
| `o1`              | O1 模型        |
| `o1-preview`      | O1 预览版      |

#### Claude Pro 模型

| 模型名称                         | 功能说明                       |
| -------------------------------- | ------------------------------ |
| `claude-3.7-sonnet-max`          | Claude 3.7 Sonnet Max          |
| `claude-3.7-sonnet-thinking-max` | Claude 3.7 Sonnet 思考模式 Max |
| `claude-4-sonnet-max`            | Claude 4 Sonnet Max            |
| `claude-4-sonnet-thinking-max`   | Claude 4 Sonnet 思考模式 Max   |
| `claude-4-opus-max`              | Claude 4 Opus Max              |
| `claude-4-opus-thinking-max`     | Claude 4 Opus 思考模式 Max     |

#### Gemini Pro 模型

| 模型名称                       | 功能说明                  |
| ------------------------------ | ------------------------- |
| `gemini-2.5-pro-max`           | Gemini 2.5 Pro Max        |
| `gemini-2.5-pro-exp-03-25-max` | Gemini 2.5 Pro 实验版 Max |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/cursor/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-3.7-sonnet-thinking",
    "stream": true
}'
```
