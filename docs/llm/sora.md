# Sora 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/sora/v1/chat/completions
```

## 模型列表

- `sora_image`
- `sora_video`
- `sora_video2`：调用新版本的 Sora 生成视频，默认生成竖屏视频
- `sora_video2-portrait`：调用新版本的 Sora 生成竖屏视频
- `sora_video2-landscape`：调用新版本的 Sora 生成横屏视频

## 调用示例

> [!WARNING]
>
> 文生图（`/v1/images/generations`）和图生图（`/v1/images/edits`）接口需要额外付费开通

1. 对话格式：`/v1/chat/completions`

   - 对话接口文生图：

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

   - 对话接口图生图：

     ```bash
      curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/chat/completions' \
      --header 'Content-Type: application/json' \
      --header 'Authorization: <你的许可证>' \
      --data-raw '{
          "messages": [{"role":"user","content":[{"type":"text","text":"根据图片换个风格"},{"type":"image_url","image_url":{"url":"url或者base64"}}]}],
          "model": "sora_image",
          "stream": true
      }'
     ```

2. 文生图：`/v1/images/generations`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/generations' \
   --header 'Authorization: <你的许可证>' \
   --header 'Content-Type: multipart/form-data; boundary=--------------------------961278614886800824879278' \
   --form 'prompt="画小猫"' \
   --form 'model="sora_image"'
   ```

3. 图生图：`/v1/images/edits`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/edits' \
   --header 'Authorization: <你的许可证>' \
   --header 'Content-Type: multipart/form-data; boundary=--------------------------961278614886800824879278' \
   --form 'image[]=@"/path/to/example.jpg"' \
   --form 'prompt="换一个风格"' \
   --form 'model="sora_image"'
   ```

## 平台配置

- 是否开启 Sora 分析生成的视频图像大小

  > [!WARNING]
  > 图片比例宽高不得大于 1920x1080 比例

  开启后会分析用户的输入是否需要指定比例，但需要配置 OpenAI API 官方 KEY，原理是调用 OpenAI 的 [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) 能力去分析用户 `prompt` 中是否指定了大小。

  ![WechatIMG401.jpg](/WechatIMG401.jpg)

## 平台参数

- `size`

  生成图像的大小，格式为 `widthxheight`，宽度限制在 `1920` 内，高度限制在 `1080` 内，例如：`720x720`

- `n`

  生成不同**变体**的数量，默认为 1，最大值为 4
