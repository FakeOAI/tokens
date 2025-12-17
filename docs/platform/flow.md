# Flow 官网逆向接口文档

## 基础信息

**官网地址：** `https://labs.google/fx/zh/tools/flow`

**Base URL:** `http://<你的IP>:<你的端口>/flow`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#flow)

## 模型列表

- `veo_3_1`
- `nano_banana`
- `nano_banana_pro`
- `imagen_4`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值                    | 说明                             | 适用范围                                                            |
| --------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| `portrait`、<br>`landscape` | 生成图片或视频的方向，默认竖屏   | `veo_3_1`、<br>`nano_banana`、<br>`nano_banana_pro`、<br>`imagen_4` |
| `fast`                      | 快速生成模式                     | `veo_3_1`                                                           |
| `fl`                        | 帧转视频模式（Frame-to-Video）   | `veo_3_1`                                                           |
| `relaxed`                   | 低优先级的 fast 模式，不消耗额度 | `veo_3_1`                                                           |
| `1K` / `2K` / `4K`          | 指定图片分辨率                   | `nano_banana_pro`                                                   |

## 支持的接口

> [!WARNING]
>
> 图片接口和视频接口需要额外付费开通

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

:::: code-group

```bash [文生视频]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "画只猪在天上飞"
        }
    ],
    "model": "veo_3_1",
    "stream": true,
    "n": 2
}'
```

```bash [帧转视频]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "根据两张图片生成一个完整的过渡视频"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "开始帧图片URL或base64"
                }
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "结束帧图片URL或base64（可选）"
                }
            }
        ]
    }],
    "model": "veo_3_1-fl-fast",
    "stream": true,
    "n": 2
}'
```

### 图片接口

官方文档：`https://platform.openai.com/docs/api-reference/images/create`

::: code-group

```bash [文生图]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/images/generations' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="nano_banana"'
```

```bash [图生图]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/images/edits' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="nano_banana"'
```

:::

### 视频接口

官方文档：`https://platform.openai.com/docs/api-reference/videos/create`

:::: code-group

```bash [创建文生视频任务]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/videos' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "画小猫",
    "model": "veo_3_1"
}'
```

```bash [创建图生视频任务]
curl -X POST 'http://<你的IP>:<你的端口>/flow/v1/videos' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: application/json' \
--data '{
    "prompt": "画小猫",
    "model": "veo_3_1",
    "input_reference": ["url_or_base64", "url_or_base64"]
    # "input_reference": "url_or_base64"
}'
```

```bash [查询视频任务状态]
curl -X GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}' \
--header 'Authorization: Bearer <你的许可证>'
```

```bash [获取视频内容]
curl -X GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}/content' \
--header 'Authorization: Bearer <你的许可证>'
```

::::

## 额外参数说明

| 参数   | 描述                                                                       | 取值范围/选项      | 默认值 | 备注                                           |
| ------ | -------------------------------------------------------------------------- | ------------------ | ------ | ---------------------------------------------- |
| `n`    | 图片或视频生成不同变体的数量                                               | 1-4                | 1      | 视频接口不支持此参数，仅对话接口和图片接口支持 |
| `size` | 生成图片或视频的尺寸，格式为 `widthxheight`，例如 `1024x1024`、`1920x1080` | 任意符合格式的数值 | -      | 宽大于高为横屏，高大于宽为竖屏                 |
