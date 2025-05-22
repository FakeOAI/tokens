# Claude 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/claude/v1/chat/completions
```

## 模型列表

- `claude-sonnet-4-20250514`：普号默认模型
- `claude-3-opus-20240229`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-3-5-haiku-20241022`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-3-7-sonnet-20250219`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-opus-4-20250514`：需有 `Claude Pro` 订阅的 token 才能进行调用

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
