# ChatGPT 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/chatgpt/v1/chat/completions
```

## 模型列表

- 官网所有模型都支持
- `gpt-4o-image`：调用最新的 gpt4o 画图能力

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/chatgpt/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gpt-4o",
    "stream": true
}'
```

## 平台配置

- ChatGPT 网关地址

  ChatGPT 网关起到转发以及对话接口请求逻辑的处理，程序不内置 ChatGPT 网关，请自备网关

  ![/3701744441658_.pic.jpg](/3701744441658_.pic.jpg)

> [!WARNING]
> 程序只负责转发以及处理格式转换，**任何引起降智的问题与程序无关**，请联系网关提供者
