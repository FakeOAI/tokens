# Windsurf 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/windsurf/v1/chat/completions
```

## 模型列表

- `gpt-4o-2024-08-06`
- `o3-mini`
- `gemini-2-0-flash`
- `gemini-2-5-pro`
- `claude-3-5-sonnet-20241022`
- `claude-3-5-haiku-20241022`
- `claude-3-7-sonnet-20250219`
- `claude-3-7-sonnet-20250219-thinking`
- `deepseek-v3`
- `deepseek-r1`

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/windsurf/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "deepseek-r1",
    "stream": true
}'
```
