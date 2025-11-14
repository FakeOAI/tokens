# Flow 官网逆向接口文档

## 基础信息

**官网地址：** `https://labs.google/fx/zh/tools/flow`

**Base URL:** `http://<你的IP>:<你的端口>/flow`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

**Token 提取：** [点击查看](/others/extract-token.md#flow)

## 模型列表

| 模型名称  | 功能说明             | 默认设置         |
| --------- | -------------------- | ---------------- |
| `veo_3_1` | Veo 3.1 视频生成模型 | 默认生成竖屏视频 |

**模型参数组合**

支持使用 `-` 连接符组合多个参数，例如：

- `veo_3_1-portrait`
- `veo_3_1-landscape-fast`
- `veo_3_1-fl-fast`

**支持的参数**

| 参数        | 说明                           | 适用模型  |
| ----------- | ------------------------------ | --------- |
| `portrait`  | 生成竖屏视频                   | `veo_3_1` |
| `landscape` | 生成横屏视频                   | `veo_3_1` |
| `fast`      | 快速生成模式                   | `veo_3_1` |
| `fl`        | 帧转视频模式（Frame-to-Video） | `veo_3_1` |

## 支持的接口

> [!WARNING]
>
> 视频接口需要额外付费开通

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

:::: code-group

```bash [文生视频]
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画只猪在天上飞"}],
    "model": "veo_3_1",
    "stream": true,
    "n": 2
}'
```

```bash [帧转视频]
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
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

### 视频接口

官方文档：`https://platform.openai.com/docs/api-reference/videos/create`

:::: code-group

```bash [创建视频任务]
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/videos' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "画小猫",
    "model": "veo_3_1"
}'
```

```bash [查询视频任务状态]
curl --location --request GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}' \
--header 'Authorization: <你的许可证>'
```

```bash [获取视频内容]
curl --location --request GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}/content' \
--header 'Authorization: <你的许可证>'
```

::::

## 额外参数说明

| 参数   | 描述                                                                  | 取值范围/选项      | 默认值 | 备注                                                                  |
| ------ | --------------------------------------------------------------------- | ------------------ | ------ | --------------------------------------------------------------------- |
| `n`    | 视频生成不同变体的数量                                                | 1-4                | 1      | `/v1/videos` 异步接口不支持此参数，仅 `/v1/chat/completions` 接口支持 |
| `size` | 生成视频的尺寸，格式为 `widthxheight`，例如 `720x1280` 或 `1920x1080` | 任意符合格式的数值 | -      | -                                                                     |
