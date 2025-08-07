# Gemini 官网逆向平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions
```

## 模型列表

- `gemini-2.5-flash-free`：无需加号即可调用，不支持图片文件分析
- `gemini-2.5-flash`：需要加号才能调用，支持图片文件分析
- `gemini-2.5-pro`：需要加号才能调用，支持图片文件分析
- `gemini-deepsearch`：深度研究模型，需要付费 token 才可以调用
- `gemini-video`：调用 gemini 官网的 veo3 模型，需要付费 token 才可以调用
- `gemini-canvas`：调用 gemini 官网的 canvas 能力，需要付费 token 才可以调用
- `gemini-imagen`：调用 gemini 官网的 imagen 能力，需要付费 token 才可以调用

> [!WARNING]
>
> `gemini-video` 模型默认返回视频的 base64 编码，如需返回 URL 需在后台配置 OSS 储存设置

## 如何提取该平台的 token

> [!WARNING]
>
> - 取之前如果登录过，**一定要退出重新登录**，提取之后马上加入 tokens 号池中，否则很快会失效。
> - 最好无痕浏览器提取，提取完之后，页面不要进行任何对话等**点击操作**，马上关闭浏览器或网页，否则很快会失效。

登录 [Gemini 官网](https://gemini.google.com/), 打开 `f12` 找到 cookie 为 `__Secure-1PSID` 的值，即为 token

![token](/WechatIMG424.jpg)

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
