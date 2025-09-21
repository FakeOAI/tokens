# Grok 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/grok/v1/chat/completions
```

## 模型列表

- `grok-3`：快速回应模式
- `grok-4-auto`：最佳模式，智能调用思考、画图、联网搜索等能力
- `grok-4`：专家模式，智能调用思考、画图、联网搜索等能力
- `grok-4-mini-thinking-tahoe`：Grok 4 快速模型

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/grok/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "grok-4",
    "stream": true
}'
```

## 平台配置

- Grok 会话最大上下文（单位：K）

  由于官网上下文有限制，所以系统后台可以指定 Grok 上下文超过多少 K，以文件的方式上传上下文内容，这样就可以进一步的扩大上下文的长度。

  ![3721744442804_.pic.jpg](/3721744442804_.pic.jpg)
