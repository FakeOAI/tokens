# Claude 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/claude/v1/chat/completions
```

## 模型列表

1. 通用模型

   - `claude-sonnet-4-20250514`：普号默认模型

2. 付费模型

   需有 Claude 的 `Pro`、`Max`、`Team` 订阅的 token 才能进行调用

   - `claude-3-opus-20240229`
   - `claude-3-5-haiku-20241022`
   - `claude-3-7-sonnet-20250219`
   - `claude-3-7-sonnet-20250219-thinking`
   - `claude-sonnet-4-20250514`
   - `claude-sonnet-4-20250514-thinking`
   - `claude-opus-4-20250514`
   - `claude-opus-4-20250514-thinking`
   - `claude-opus-4-1-20250805`
   - `claude-opus-4-1-20250805-thinking`

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-sonnet-3-7",
    "stream": true
}'
```
