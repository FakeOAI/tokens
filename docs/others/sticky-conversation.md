# 粘性对话

**粘性对话**指在请求体中通过固定字段标识会话，使同一会话的请求始终命中同一 Token/账号，从而提升缓存命中率、保证对话上下文连贯。

例如：账号池中有 A、B、C 三个号，若请求中 `session_id` 固定为 `1`，则该会话的请求会持续由同一账号处理，避免中途切换导致缓存失效。

目前支持粘性对话的平台为 **Claude Code** 与 **Codex**，各平台所用字段不同：

| 平台 | 粘性字段 | 说明 |
|------|----------|------|
| 公共 | `session_id` | 任意端点均支持 |
| Claude Code | `metadata.user_id` | 仅 `V1Messages` 端点支持 |
| Codex | `prompt_cache_key` | 仅 `V1Responses` 端点支持 |

**请求示例：**

::: code-group

```js [公共字段]
{
    "session_id": "1234567890",
    "messages": [
        {
            "role": "user",
            "content": "hi"
        }
    ],
    "model": "<平台模型>"
}
```

```js [Claude Code]
{
    "metadata": {
        "user_id": "1234567890"
    },
    "messages": [
        {
            "role": "user",
            "content": "hi"
        }
    ],
    "model": "<平台模型>"
}
```

```js [Codex]
{
    "prompt_cache_key": "1234567890",
    "input": "hello",
    "model": "<平台模型>"
}
```

:::
