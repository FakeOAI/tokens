# Sora 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/sora`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

> [!WARNING]
>
> 文生图（`/v1/images/generations`）、图生图（`/v1/images/edits`）、视频异步任务（`/v1/videos`）接口需要额外付费开通

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

## API 端点

### 1. 对话补全接口

使用对话格式生成图像或视频。

**端点:** `POST /v1/chat/completions`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数       | 类型    | 必填 | 说明             |
| ---------- | ------- | ---- | ---------------- |
| `messages` | array   | 是   | 对话消息数组     |
| `model`    | string  | 是   | 使用的模型名称   |
| `stream`   | boolean | 否   | 是否使用流式输出 |

**示例 1: 文生图**

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

**示例 2: 图生图**

```bash
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

### 2. 文生图接口

标准的图像生成接口。

**端点:** `POST /v1/images/generations`

**请求头:**

```
Content-Type: multipart/form-data
Authorization: <你的许可证>
```

**请求参数:**

| 参数     | 类型   | 必填 | 说明           |
| -------- | ------ | ---- | -------------- |
| `prompt` | string | 是   | 生成图像的描述 |
| `model`  | string | 是   | 使用的模型名称 |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/generations' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="sora_image"'
```

### 3. 图生图接口

基于输入图像进行图像编辑。

**端点:** `POST /v1/images/edits`

**请求头:**

```
Content-Type: multipart/form-data
Authorization: <你的许可证>
```

**请求参数:**

| 参数      | 类型   | 必填 | 说明           |
| --------- | ------ | ---- | -------------- |
| `image[]` | file   | 是   | 输入的图像文件 |
| `prompt`  | string | 是   | 编辑指令描述   |
| `model`   | string | 是   | 使用的模型名称 |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/images/edits' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="sora_image"'
```

### 4. 创建视频任务

创建异步视频生成任务。

**端点:** `POST /v1/videos`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数        | 类型    | 必填 | 说明                           |
| ----------- | ------- | ---- | ------------------------------ |
| `prompt`    | string  | 是   | 视频生成描述                   |
| `model`     | string  | 是   | 使用的模型名称（支持参数组合） |
| `watermark` | boolean | 否   | 是否保留视频水印，默认为 false |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "画小猫",
    "model": "sora_video2"
}'
```

### 5. 查询视频任务状态

查询视频生成任务的当前状态。

**端点:** `GET /v1/videos/{video_id}`

**路径参数:**

| 参数       | 类型   | 必填 | 说明        |
| ---------- | ------ | ---- | ----------- |
| `video_id` | string | 是   | 视频任务 ID |

**请求头:**

```
Authorization: <你的许可证>
```

**示例:**

```bash
curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}' \
--header 'Authorization: <你的许可证>'
```

### 6. 视频编辑（Remix）

基于已生成的视频进行二次编辑。

**端点:** `POST /v1/videos/{video_id}/remix`

**路径参数:**

| 参数       | 类型   | 必填 | 说明          |
| ---------- | ------ | ---- | ------------- |
| `video_id` | string | 是   | 原视频任务 ID |

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数     | 类型   | 必填 | 说明           |
| -------- | ------ | ---- | -------------- |
| `prompt` | string | 是   | 编辑指令描述   |
| `model`  | string | 是   | 使用的模型名称 |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/remix' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "再加一只小狗",
    "model": "sora_video2"
}'
```

### 7. 获取视频内容

获取已生成视频的实际内容。

**端点:** `GET /v1/videos/{video_id}/content`

**路径参数:**

| 参数       | 类型   | 必填 | 说明        |
| ---------- | ------ | ---- | ----------- |
| `video_id` | string | 是   | 视频任务 ID |

**请求头:**

```
Authorization: <你的许可证>
```

**示例:**

```bash
curl --location --request GET 'http://<你的IP>:<你的端口>/sora/v1/videos/{video_id}/content' \
--header 'Authorization: <你的许可证>'
```

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
