# Sora 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/sora/v1/chat/completions
```

## 模型列表

- `sora_image`
- `sora_video`

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画小猫"}],
    "model": "sora_image",
    "stream": true
}'
```
