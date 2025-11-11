# Gemini 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/gemini_official`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

> [!WARNING]
>
> 文生图（`/v1/images/generations`）和图生图（`/v1/images/edits`）接口需要额外付费开通

## 模型列表

### Flash 系列模型

| 模型名称                      | 功能说明                    | 特殊要求                             |
| ----------------------------- | --------------------------- | ------------------------------------ |
| `gemini-2.5-flash-free`       | 基础对话模型                | 无需加号即可调用，不支持图片文件分析 |
| `gemini-2.5-flash`            | 标准对话模型                | -                                    |
| `gemini-2.5-flash-imagen`     | 图像生成模型（Nano Banana） | -                                    |
| `gemini-2.5-flash-canvas`     | Canvas 创作能力             | -                                    |
| `gemini-2.5-flash-deepsearch` | 深度研究模型                | -                                    |
| `gemini-2.5-flash-storybook`  | Storybook 故事创作          | -                                    |

### Pro 系列模型

| 模型名称                    | 功能说明                        | 特殊要求                             |
| --------------------------- | ------------------------------- | ------------------------------------ |
| `gemini-2.5-pro`            | 专业对话模型                    | -                                    |
| `gemini-2.5-pro-deepsearch` | 深度研究模型（Pro）             | -                                    |
| `gemini-2.5-pro-video`      | 视频生成模型（Veo 3.1）         | 默认返回 base64，返回 URL 需配置 OSS |
| `gemini-2.5-pro-canvas`     | Canvas 创作能力（Pro）          | -                                    |
| `gemini-2.5-pro-imagen`     | 图像生成模型（Nano Banana Pro） | -                                    |
| `gemini-2.5-pro-storybook`  | Storybook 故事创作（Pro）       | -                                    |

## 如何提取该平台的 token

> [!WARNING]
>
> - 提取之前如果已登录过，**一定要退出重新登录**，提取之后马上加入 tokens 号池中，否则很快会失效
> - 建议使用无痕浏览器提取，提取完之后，页面不要进行任何对话等**点击操作**，马上关闭浏览器或网页，否则很快会失效

**提取步骤：**

1. 登录 [Gemini 官网](https://gemini.google.com/)
2. 按 `F12` 打开开发者工具
3. 找到 Cookie 中 `__Secure-1PSID` 的值，即为 token

**示例截图：**

![token](/WechatIMG424.jpg)

## API 端点

### 1. 对话补全接口

创建对话补全请求，支持文本对话、图像生成、视频生成等多种能力。

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
| `model`    | string  | 是   | 使用的模型名称                 |
| `stream`   | boolean | 否   | 是否使用流式输出，默认为 false |

**示例:**

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

**带查询参数的示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/chat/completions?return_origin_image=true&remove_watermark=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画一只小猫"}],
    "model": "gemini-2.5-flash-imagen",
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
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/generations' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="画小猫"' \
--form 'model="gemini-2.5-flash-imagen"'
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
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_official/v1/images/edits' \
--header 'Authorization: <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example.jpg"' \
--form 'prompt="换一个风格"' \
--form 'model="gemini-2.5-flash-imagen"'
```

## 全局参数说明

### return_origin_image（返回原图）

调用 `imagen` 系列模型时是否返回原图。

**取值:** `true` | `false`  
**默认值:** `false`  
**使用方式:** URL 查询参数  
**示例:** `/v1/chat/completions?return_origin_image=true`

### remove_watermark（去除水印）

调用 `imagen` 系列模型时是否去除图片中的水印。

**取值:** `true` | `false`  
**默认值:** `false`  
**使用方式:** URL 查询参数  
**示例:** `/v1/chat/completions?remove_watermark=true`
