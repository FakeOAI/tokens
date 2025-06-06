# Gemini 官网逆向平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions
```

## 模型列表

- `gemini-2.5-flash`
- `gemini-2.5-pro-preview`

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

## 如何提取该平台的 token

> [!WARNING]
> 取之前如果登录过，一定要退出重新登录，提取之后马上加入 tokens 号池中，否则很快会失效。

登录 [Gemini 官网](https://gemini.google.com/), 打开 `f12` 找到 cookie 为 `__Secure-1PSID` 的值，即为 token

![token](/WechatIMG424.jpg)
