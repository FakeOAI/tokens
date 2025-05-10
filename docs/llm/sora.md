# Sora 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/sora/v1/chat/completions
```

## 模型列表

- `sora_image`
- `sora_video`

## 调用示例

### 文生图

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

### 图生图

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "根据图片换个风格"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "url或者base64"
                    }
                }
            ]
        }
    ],
    "model": "sora_image",
    "stream": true
}'
```

## 平台配置

- 是否开启 Sora 分析生成的视频图像大小

  > [!WARNING]
  > 图片比例宽高不得大于 1920x1080 比例

  开启后会分析用户的输入是否需要指定比例，但需要配置 OpenAI API 官方 KEY，原理是调用 OpenAI 的 [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) 能力去分析用户 `prompt` 中是否指定了大小。

  ![WechatIMG401.jpg](/WechatIMG401.jpg)
