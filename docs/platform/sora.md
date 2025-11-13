# Sora 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/sora`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

> [!WARNING]
>
> 默认授权只有对话接口（`/v1/chat/completions`），图片接口（`/v1/images/generations`和`/v1/images/edits`）、视频任务（`/v1/videos`）接口需要额外付费开通

## 模型列表

| 模型名称      | 功能说明           | 支持的参数                 |
| ------------- | ------------------ | -------------------------- |
| `sora_image`  | 图像生成           | -                          |
| `sora_video`  | 视频生成（旧版本） | -                          |
| `sora_video2` | 视频生成（新版本） | 默认生成 10 秒竖屏标清视频 |

### 模型参数组合

`sora_video2` 模型支持使用 `-` 连接符组合多个参数，例如：

- `sora_video2-landscape`
- `sora_video2-landscape-hd`
- `sora_video2-hd-portrait-15s`

**支持的参数：**

| 参数        | 说明              | 适用模型      |
| ----------- | ----------------- | ------------- |
| `portrait`  | 生成竖屏视频      | `sora_video2` |
| `landscape` | 生成横屏视频      | `sora_video2` |
| `hd`        | 生成高清视频      | `sora_video2` |
| `15s`       | 生成 15 秒视频    | `sora_video2` |
| `25s`       | 生成 25 秒视频    | `sora_video2` |
| `pro`       | 使用 Pro 版本模型 | `sora_video2` |

## 支持的接口

### 1. 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [文生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画小猫"}],
    "model": "sora_image",
    "stream": true
}'
```

```bash [图生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": [
            {"type": "text", "text": "根据图片换个风格"},
            {"type": "image_url", "image_url": {"url": "url或者base64"}}
        ]
    }],
    "model": "sora_image",
    "stream": true
}'
```

:::

### 2. 图片接口

官方文档：`https://platform.openai.com/docs/api-reference/images/create`

::: code-group

```bash [文生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/generations' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="sora_image"'
```

```bash [图生图]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/edits' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="sora_image"'
```

:::

### 3. 视频接口

官方文档：`https://platform.openai.com/docs/api-reference/videos/create`

::: code-group

```bash [文生视频]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "画小猫",
    "model": "sora_video2"
}'
```

```bash [图生视频]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'input_reference[]=@"/path/to/example.jpg"' \
--form 'prompt="根据图片生成视频"' \
--form 'model="sora_video2"'
```

```bash [查询视频任务状态]
curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}' \
--header 'Authorization: <你的许可证>'
```

```bash [获取视频内容]
curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/content' \
--header 'Authorization: <你的许可证>'
```

```bash [编辑视频]
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/remix' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "再加一只小狗",
    "model": "sora_video2"
}'
```

:::

## 全局参数说明

### size（视频图片尺寸）

生成图片或视频的尺寸，格式为 `widthxheight`，例如：`1024x1024`、`1920x1080`。

**规则:**

- 图片：宽高相同生成 `1:1`，宽大于高生成 `3:2`，高大于宽生成 `2:3`
- 视频：宽大于高生成横屏，高大于宽生成竖屏

### n（生成数量）

图片生成不同变体的数量。

**取值范围:** 1-4  
**默认值:** 1

### watermark（水印）

是否保留 Sora2 视频生成后的水印。

**取值:** `true` | `false`  
**默认值:** `false`

### duration（视频时长）

Sora2 视频生成时长

**取值范围:** 10、15、25  
**默认值:** 10

### hd（高清）

Sora2 视频生成是否为高清视频。只有 `sora_video2-pro` 模型支持此参数（且视频时长不能为 `25s`）。

**取值:** `true` | `false`  
**默认值:** `false`

### private（隐私模式）

是否开启隐私模式，为 `true` 视频不会发布，同时视频无法进行 `remix` 操作(二次编辑)， 默认为 `false`。

**取值:** `true` | `false`  
**默认值:** `false`
