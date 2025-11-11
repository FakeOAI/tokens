# Flow 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/flow`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

> [!WARNING]
>
> 视频异步任务（`/v1/videos`）接口需要额外付费开通

## 账号类型说明

| 账号类型 | 月度积分 | 水印 | 说明                         |
| -------- | -------- | ---- | ---------------------------- |
| `free`   | 100      | 有   | 免费账号                     |
| `pro`    | 1,000    | 有   | 专业版账号                   |
| `ultra`  | 250,000  | 无   | 旗舰版账号，生成的视频无水印 |

## 模型列表

| 模型名称  | 功能说明             | 默认设置         |
| --------- | -------------------- | ---------------- |
| `veo_3_1` | Veo 3.1 视频生成模型 | 默认生成竖屏视频 |

### 模型参数组合

支持使用 `-` 连接符组合多个参数，例如：

- `veo_3_1-portrait`
- `veo_3_1-landscape-fast`
- `veo_3_1-fl-fast`

**支持的参数：**

| 参数        | 说明                           | 适用模型  |
| ----------- | ------------------------------ | --------- |
| `portrait`  | 生成竖屏视频                   | `veo_3_1` |
| `landscape` | 生成横屏视频                   | `veo_3_1` |
| `fast`      | 快速生成模式                   | `veo_3_1` |
| `fl`        | 帧转视频模式（Frame-to-Video） | `veo_3_1` |

## 如何添加该平台的 token

1. 在后台插件管理中安装插件然后解压

   ![0edeffcf5a473a31361bb8e0a77b9189.png](/0edeffcf5a473a31361bb8e0a77b9189.png)

2. 在谷歌浏览器的插件管理中导入解压的文件夹

   ![04563c906701e8bdb2ca9080abf1ddf3.png](/04563c906701e8bdb2ca9080abf1ddf3.png)

   ![2bcea57f1b869e4c15b8f83962d0a615.png](/2bcea57f1b869e4c15b8f83962d0a615.png)

   ![df2beb27952e0523390419952b1ab0a1.png](/df2beb27952e0523390419952b1ab0a1.png)

3. 返回插件管理刷新页面，看到插件已经安装后才可以点击添加 `Flow Token` 按钮

   ![cc31d927c59c83d68685b514f29933d5.png](/cc31d927c59c83d68685b514f29933d5.png)

4. 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

   ![5a94bb398b6a8d20542a52ef1447cb37.png](/5a94bb398b6a8d20542a52ef1447cb37.png)

   ![9e82c16b4b009c5449e47d9afb67d79b.png](/9e82c16b4b009c5449e47d9afb67d79b.png)

## API 端点

### 1. 对话补全接口

使用对话格式生成视频内容。

**端点:** `POST /v1/chat/completions`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数       | 类型    | 必填 | 说明                           |
| ---------- | ------- | ---- | ------------------------------ |
| `messages` | array   | 是   | 对话消息数组                   |
| `model`    | string  | 是   | 使用的模型名称（支持参数组合） |
| `stream`   | boolean | 否   | 是否使用流式输出，默认为 false |

**示例 1: 文生视频**

```bash
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

**示例 2: 帧转视频（Frame-to-Video）**

```bash
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

**说明:**

- 开始帧图片：必传
- 结束帧图片：可选，如果不传则自动生成过渡效果

### 2. 创建视频任务

创建异步视频生成任务。

**端点:** `POST /v1/videos`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数     | 类型   | 必填 | 说明                           |
| -------- | ------ | ---- | ------------------------------ |
| `prompt` | string | 是   | 视频生成描述                   |
| `model`  | string | 是   | 使用的模型名称（支持参数组合） |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/videos' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "画小猫",
    "model": "veo_3_1"
}'
```

### 3. 查询视频任务状态

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
curl --location --request GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}' \
--header 'Authorization: <你的许可证>'
```

### 4. 视频编辑（Remix）

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
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}/remix' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "再加一只小狗",
    "model": "veo_3_1"
}'
```

### 5. 获取视频内容

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
curl --location --request GET 'http://<你的IP>:<你的端口>/flow/v1/videos/{video_id}/content' \
--header 'Authorization: <你的许可证>'
```

## 全局参数说明

### n（生成数量）

视频生成不同变体的数量。

**取值范围:** 1-4  
**默认值:** 1  
**注意:** `/v1/videos` 异步接口不支持此参数，仅 `/v1/chat/completions` 接口支持

### size（视频尺寸）

生成视频的尺寸，格式为 `widthxheight`，例如：`720x1280`（竖屏）、`1920x1080`（横屏）。
