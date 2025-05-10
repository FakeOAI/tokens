# Cursor 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/cursor/v1/chat/completions
```

## 模型列表

- `gpt-4`
- `claude-3.5-sonnet`
- `claude-3.7-sonnet`
- `claude-3.7-sonnet-thinking`
- `gpt-4o`
- `claude-3-opus`
- `gpt-3.5-turbo`
- `gpt-4-turbo-2024-04-09`
- `gpt-4o-128k`
- `gemini-1.5-flash-500k`
- `claude-3-haiku-200k`
- `claude-3-5-sonnet-200k`
- `gpt-4o-mini`
- `o1-mini`
- `claude-3.5-haiku`
- `gemini-2.0-pro-exp`
- `gemini-2.0-flash-thinking-exp`
- `gemini-2.0-flash`
- `gemini-2.5-pro-exp-03-25`
- `deepseek-v3`
- `deepseek-r1`
- `o3-mini`
- `grok-2`
- `o1-preview`：**Pro 订阅类型**的 token 才可用
- `o1`：**Pro 订阅类型**的 token 才可用
- `gpt-4.5-preview`：**Pro 订阅类型**的 token 才可用
- `claude-3.7-sonnet-max`：**Pro 订阅类型**的 token 才可用
- `claude-3.7-sonnet-thinking-max`：**Pro 订阅类型**的 token 才可用
- `gemini-2.5-pro-max`：**Pro 订阅类型**的 token 才可用
- `gemini-2.5-pro-exp-03-25-max`：**Pro 订阅类型**的 token 才可用

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/cursor/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-3.7-sonnet-thinking",
    "stream": true
}'
```

## 平台配置

- Cursor 平台轮训 token 数量

  由于 Cursor 封控比较厉害，如果轮训号池内所有账号容易导致号池所有账号都被封控，如果设置 Cursor Token 轮训的数量，则只有在固定的数量上进行轮训，直到异常才取新的 token 加入号池内轮训，如果高并发的情况下可以短时间 **榨干** 一个号的价值。

- Cursor 上限标记的报错

  由于 Cursor 上限的文本不断频繁变动，所以开放给用户自行配置，一行一个报错匹配，匹配上都会进行 token `上限` 的标记，如果不填写则走程序默认的匹配

- Cursor 异常标记的报错

  由于 Cursor 异常的文本不断频繁变动，所以开放给用户自行配置，一行一个报错匹配，匹配上都会进行 token `异常` 的标记，如果不填写则走程序默认的匹配

![3731744443802_.pic.jpg](/3731744443802_.pic.jpg)
