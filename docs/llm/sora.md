# Sora 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/sora/v1/chat/completions
```

## 模型列表

- `sora_image`
- `sora_video`
- `sora_video2`：调用新版本的 Sora 生成视频，默认生成**10 秒竖屏标清视频**

## 模型参数

可指定下面参数，使用 `-` 连接符把参数连接起来，例如：`sora_video2-landscape`、`sora_video2-landscape-hd`、`sora_video2-hd-portrait`

- `portrait`：生成竖屏视频，仅支持 `sora_video2` 模型指定该参数
- `landscape`：生成横屏视频，仅支持 `sora_video2` 模型指定该参数
- `hd`：生成高清视频，仅支持 `sora_video2` 模型指定该参数
- `15s`：生成 15 秒的视频，仅支持 `sora_video2` 模型指定该参数
- `25s`：生成 25 秒的视频，仅支持 `sora_video2` 模型指定该参数
- `pro`：使用 pro 版本的模型，仅支持 `sora_video2` 模型指定该参数

## 调用示例

> [!WARNING]
>
> 文生图（`/v1/images/generations`）、图生图（`/v1/images/edits`）、视频异步任务（`/v1/videos`）接口需要额外付费开通

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

4. 视频异步任务：

   - 创建视频任务：`/v1/videos`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos' \
   --header 'Authorization: <你的许可证>' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "prompt": "画小猫",
       "model": "sora_video2"
   }'
   ```

   - 查询任务状态：`/v1/videos/{video_id}`

   ```bash
   curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}' \
   --header 'Authorization: <你的许可证>' \
   ```

   - 视频编辑：`/v1/videos/{video_id}/remix`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/remix' \
   --header 'Authorization: <你的许可证>' \
   --header 'Content-Type: application/json' \
   --data-raw '{
       "prompt": "再加一只小狗",
       "model": "sora_video2"
   }'
   ```

   - 获取视频内容：`/v1/videos/{video_id}/content`

   ```bash
   curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/content' \
   --header 'Authorization: <你的许可证>' \
   ```

## 平台配置

- 是否开启 Sora 分析 Prompt

  开启后会分析用户的输入是否需要指定比例、视频横竖方向，但需要配置 OpenAI API 官方 KEY，原理是调用 OpenAI 的 [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) 能力去分析用户的 `prompt`

  ![WechatIMG401.jpg](/WechatIMG401.jpg)

## 平台参数

- `size`

  生成图像的大小，格式为 `widthxheight`，对于图片，如果宽高一样，则生成 `1:1`，如果宽大于高，则生成 `3:2`，否则生成 `2:3`，对于视频，如果宽大于高，则生成横屏视频，否则生成竖屏视频

- `n`

  图片生成不同**变体**的数量，默认为 `1`，最大值为 `4`

- `watermark`

  是否保留视频水印，默认为 `false`
