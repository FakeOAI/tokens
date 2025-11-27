# 全平台接口文档

本文档提供了 Tokens 平台所有支持的 API 接口使用说明。所有接口均兼容 OpenAI 官方 API 格式，可以直接使用 OpenAI SDK 进行调用。

## 对话接口

对话接口是 Tokens 平台的核心接口，支持文本对话、图片理解、文件处理等多种功能。

**官方文档参考：** `https://platform.openai.com/docs/api-reference/chat/create`

**接口地址：** `POST http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions`

**认证方式：** `Bearer Token`（在请求头中传递许可证）

**请求参数：**

| 参数名     | 类型      | 必填 | 说明                                                 |
| ---------- | --------- | ---- | ---------------------------------------------------- |
| `messages` | `array`   | 是   | 对话消息列表，包含角色和内容                         |
| `model`    | `string`  | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `stream`   | `boolean` | 否   | 是否启用流式输出，默认为 `false`                     |

**请求示例：**

::: code-group

```bash [发送文字]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "<对话内容>"
        }
    ],
    "model": "<平台模型>"
}'
```

```bash [发送图片]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "<对话内容>"
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "图片的URL或者base64"
                    }
                }
            ]
        }
    ],
    "model": "<平台模型>"
}'
```

```bash [发送文件]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "<对话内容>"
                },
                {
                    "type": "file",
                    "file": {
                        "file_data": "文件的URL或者base64"
                    }
                }
            ]
        }
    ],
    "model": "<平台模型>"
}'
```

```bash [流式对话]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "<对话内容>"
        }
    ],
    "model": "<平台模型>",
    "stream": true
}'
```

```bash [多轮对话]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "system",
            "content": "你是一个专业的编程助手"
        },
        {
            "role": "user",
            "content": "什么是 JavaScript？"
        },
        {
            "role": "assistant",
            "content": "JavaScript 是一种高级编程语言..."
        },
        {
            "role": "user",
            "content": "它和 Java 有什么关系？"
        }
    ],
    "model": "<平台模型>"
}'
```

:::

**响应示例：**

**非流式响应：**

```json
{
  "id": "foaicmpl-123",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "<平台模型>",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "这是 AI 的回复内容"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 10,
    "completion_tokens": 20,
    "total_tokens": 30
  }
}
```

**流式响应：**

流式响应会返回多个数据块，每个数据块格式如下：

```
data: {"id":"foaicmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{"role":"assistant"},"finish_reason":null}]}

data: {"id":"foaicmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{"content":"这是"},"finish_reason":null}]}

...

data: {"id":"foaicmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{},"finish_reason":"stop"}]}

data: [DONE]
```

## 图片接口

### 图片生成接口

图片接口兼容 OpenAI API 接口格式，支持图片生成、图片编辑等格式，以及平台独特的图片异步生成功能。

**官方文档参考：** `https://platform.openai.com/docs/api-reference/images/create`

**接口地址：** `POST http://<你的IP>:<你的端口>/<平台名称>/v1/images/generations`

**认证方式：** `Bearer Token`（在请求头中传递许可证）

**请求参数：**

| 参数名   | 类型     | 必填 | 说明                                                 |
| -------- | -------- | ---- | ---------------------------------------------------- |
| `prompt` | `string` | 是   | 图片描述，用于生成图片                               |
| `model`  | `string` | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

```bash [表单格式]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/images/generations' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="<图片描述>"' \
--form 'model="<平台模型>"'
```

:::

### 图片编辑接口

图片编辑接口兼容 OpenAI API 接口格式，支持图片编辑、图片修复等格式，以及平台独特的图片异步编辑功能。

**官方文档参考：** `https://platform.openai.com/docs/api-reference/images/create`

**接口地址：** `POST http://<你的IP>:<你的端口>/<平台名称>/v1/images/edits`

**认证方式：** `Bearer Token`（在请求头中传递许可证）

**请求参数：**

| 参数名   | 类型               | 必填 | 说明                                                 |
| -------- | ------------------ | ---- | ---------------------------------------------------- |
| `prompt` | `string`           | 是   | 图片描述，用于编辑图片                               |
| `model`  | `string`           | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `image`  | `string` / `array` | 是   | 图片 URL 或者 base64，支持单图或多图                 |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/images/edits' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "image": "<图片URL或者base64>",
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

```bash [表单格式]
curl -X POST 'http://<你的IP>:<你的端口>/<平台名称>/v1/images/edits' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example1.jpg"' \
--form 'image[]=@"/path/to/example2.jpg"' \
--form 'prompt="<图片描述>"' \
--form 'model="<平台模型>"'
```

:::

## 视频接口

视频接口兼容 OpenAI API 接口格式，支持视频生成、视频编辑等格式，以及平台独特的视频异步生成功能。

**官方文档参考：** `https://platform.openai.com/docs/api-reference/videos/create`

**接口地址：** `POST http://<你的IP>:<你的端口>/<平台名称>/v1/videos`

**认证方式：** `Bearer Token`（在请求头中传递许可证）

**请求参数：**