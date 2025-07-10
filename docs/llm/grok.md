# Grok 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/grok/v1/chat/completions
```

## 模型列表

- `grok-2`：
- `grok-2-image`：使用 grok2 进行生图
- `grok-2-search`：使用 grok2 进行联网搜索
- `grok-3`：可开启自动调用联网、生图、思考以及深度网络搜索能力(需在后台系统配置中手动开启)
- `grok-3-image`：使用 grok3 进行生图
- `grok-3-deepsearch`：使用 grok3 进行深度联网搜索
- `grok-3-deepersearch`：使用 grok3 进行深度思考联网搜索
- `grok-3-reasoning`：使用 grok3 进行思考
- `grok-4`

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/grok/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "grok-3-reasoning",
    "stream": true
}'
```

## 平台配置

- 是否开启 Grok-3 全能模型

  全能模型可以根据用户输入自动调用 grok 的联网、搜索、画图以及思考等能力，而不是根据模型名称指定能力，但需要配置 OpenAI API 官方 KEY，原理是调用 OpenAI 的 [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) 能力去分析调用哪种能力的grok模型。

  ![3711744442607_.pic.jpg](/3711744442607_.pic.jpg)

- Grok 会话最大上下文（单位：K）

  由于官网上下文有限制，所以系统后台可以指定 Grok 上下文超过多少 K，以文件的方式上传上下文内容，这样就可以进一步的扩大上下文的长度。

  ![3721744442804_.pic.jpg](/3721744442804_.pic.jpg)
