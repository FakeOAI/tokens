# Claude 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/claude/v1/chat/completions
```

## 模型列表

- `claude-opus-3`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-sonnet-3-5`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-haiku-3-5`：需有 `Claude Pro` 订阅的 token 才能进行调用
- `claude-sonnet-3-7`：普号默认模型
- `claude-sonnet-3-7-reasoner`：使用 claude 3.7 模型进行思考，需有 `Claude Pro` 订阅的 token 才能进行调用

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
