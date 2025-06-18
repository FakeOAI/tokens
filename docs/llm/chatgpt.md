# ChatGPT 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/chatgpt/v1/chat/completions
```

## 模型列表

- `gpt-4`
- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4-5`
- `gpt-4-1-mini`
- `gpt-4-1`
- `o3`
- `o3-mini`
- `o4-mini`
- `o4-mini-high`
- `o1-pro`
- `o3-pro`
- 官网所有模型都支持
- `gpt-4o-image`：调用最新的 gpt4o 画图能力
- `g-[gizmo-id]`：调用 `gpts` 模型，`gizmo-id` 请在官网点击想要使用的 gpts，在地址栏获取，如下图所示

  ![2481748234920_.pic.jpg](/2481748234920_.pic.jpg)

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
