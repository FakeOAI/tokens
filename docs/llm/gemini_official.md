# Gemini 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions
```

## 模型列表

- `gemini-2.5-pro-exp`
- `gemini-2.0-flash-thinking-exp`
- `gemini-2.0-flash`
- `gemini-2.5-flash`
- `gemini-2.0-flash-exp`
- `gemini-2.0-flash-thinking`
- `gemini-2.0-flash-thinking-with-apps`
- 官网支持的模型都支持

> 暂不支持文件图片识别，以及为适配 `deeprearch`、`canvas` 等能力

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```
