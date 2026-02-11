# Codex 终端逆向接口文档

## 接口支持概览

| 端点接口                 | 支持情况 | 函数调用 |   备注   |
| :----------------------- | :------: | :------: | :------: |
| `V1ChatCompletions` 接口 |    ✅    |    ❌    |    -     |
| `V1Messages` 接口        |    ✅    |    ❌    | 额外收费 |
| `V1Responses` 接口       |    ✅    |    ❌    |    -     |
| `V1BetaModels` 接口      |    ✅    |    ❌    | 额外收费 |
| `V1Images` 接口          |    ❌    |    ❌    |    -     |
| `V1Videos` 接口          |    ❌    |    ❌    |    -     |

## 基础信息

**官网地址：** `https://openai.com/zh-Hans-CN/codex`

**Base URL:** `http://<你的IP>:<你的端口>/codex`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#openai)

## 模型列表

- `gpt-5`
- `gpt-5-codex`
- `gpt-5-codex-mini`
- `gpt-5.1`
- `gpt-5.1-codex`
- `gpt-5.1-codex-mini`
- `gpt-5.1-codex-max`
- `gpt-5.2`
- `gpt-5.2-codex`
- `gpt-5.3-codex`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数  | 推理等级   | 适用范围                                                              |
| --------- | ---------- | --------------------------------------------------------------------- |
| `minimal` | 最小推理   | `gpt-5` 可用                                                          |
| `low`     | 低级推理   | `gpt-5-codex-mini`、<br>`gpt-5.1-codex-mini` 不可用                   |
| `medium`  | 中级推理   | 全系模型可用                                                          |
| `high`    | 高级推理   | 全系模型可用                                                          |
| `xhigh`   | 超高级推理 | `gpt-5.1-codex-max`、`gpt-5.2`、`gpt-5.2-codex`、`gpt-5.3-codex` 可用 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/codex/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "session_id": "my-session-123，可选",
    "model": "gpt-5-high",
    "stream": true
}'
```

### Responses 接口

官方文档：`https://platform.openai.com/docs/api-reference/responses/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/codex/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "input": [
        {
            "content": [
                {
                    "text": "hi",
                    "type": "input_text"
                }
            ],
            "id": null,
            "role": "user",
            "type": "message"
        }
    ],
    "session_id": "my-session-123，可选",
    "model": "gpt-5",
    "reasoning": {
        "effort": "high",
        "summary": "auto"
    },
    "stream": false
}'
```
