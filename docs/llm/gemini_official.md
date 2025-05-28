# Gemini 官网逆向平台

## 接口地址

> [!WARNING]
> 该平台不需要添加任何 token，直接调用即可

```curl
POST http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions
```

## 模型列表

- `gemini-2.5-flash`
- `gemini-2.5-pro-preview`：该模型暂不可用

> [!WARNING]
> 暂不支持文件图片识别以及未适配 `deeprearch`、`canvas` 等能力

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.5-flash",
    "stream": true
}'
```
