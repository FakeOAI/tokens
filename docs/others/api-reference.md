# 全平台接口文档

## [对话接口](https://platform.openai.com/docs/api-reference/chat/create)

`POST /{platform}/v1/chat/completions`

**请求参数：**

| 参数名     | 类型      | 必填 | 说明                                                 |
| ---------- | --------- | ---- | ---------------------------------------------------- |
| `messages` | `array`   | 是   | 对话消息列表，包含角色和内容                         |
| `model`    | `string`  | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `stream`   | `boolean` | 否   | 是否启用流式输出，默认为 `false`                     |

**请求示例：**

::: code-group

```bash [发送文字]
curl -X POST 'http://localhost/{platform}/v1/chat/completions' \
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
curl -X POST 'http://localhost/{platform}/v1/chat/completions' \
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
curl -X POST 'http://localhost/{platform}/v1/chat/completions' \
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
curl -X POST 'http://localhost/{platform}/v1/chat/completions' \
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
curl -X POST 'http://localhost/{platform}/v1/chat/completions' \
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

### [图片生成接口](https://platform.openai.com/docs/api-reference/images/create)

`POST /{platform}/v1/images/generations`

**请求参数：**

| 参数名            | 类型      | 必填 | 说明                                                      |
| ----------------- | --------- | ---- | --------------------------------------------------------- |
| `prompt`          | `string`  | 是   | 图片描述，用于编辑图片                                    |
| `model`           | `string`  | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档      |
| `response_format` | `enum`    | 否   | 响应格式，枚举值为 `b64_json` 或 `url`，默认为 `b64_json` |
| `async`           | `boolean` | 否   | 是否异步生成，默认为 `false`                              |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://localhost/{platform}/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

```bash [表单格式]
curl -X POST 'http://localhost/{platform}/v1/images/generations' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'prompt="<图片描述>"' \
--form 'model="<平台模型>"'
```

```bash [异步生成接口]
curl -X POST 'http://localhost/{platform}/v1/images/generations?async=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

:::

### [图片编辑接口](https://platform.openai.com/docs/api-reference/images/createEdit)

`POST /{platform}/v1/images/edits`

**请求参数：**

| 参数名            | 类型                           | 必填 | 说明                                                      |
| ----------------- | ------------------------------ | ---- | --------------------------------------------------------- |
| `prompt`          | `string`                       | 是   | 图片描述，用于编辑图片                                    |
| `model`           | `string`                       | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档      |
| `image`           | `string` / `string[]` / `form` | 是   | 图片 URL 或者 base64，支持单图或多图                      |
| `response_format` | `enum`                         | 否   | 响应格式，枚举值为 `b64_json` 或 `url`，默认为 `b64_json` |
| `async`           | `boolean`                      | 否   | 是否异步生成，默认为 `false`                              |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://localhost/{platform}/v1/images/edits' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "image": "<图片URL或者base64>",
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

```bash [表单格式]
curl -X POST 'http://localhost/{platform}/v1/images/edits' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'image[]=@"/path/to/example1.jpg"' \
--form 'image[]=@"/path/to/example2.jpg"' \
--form 'prompt="<图片描述>"' \
--form 'model="<平台模型>"'
```

```bash [异步编辑接口]
curl -X POST 'http://localhost/{platform}/v1/images/edits?async=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "image": "<图片URL或者base64>",
    "prompt": "<图片描述>",
    "model": "<平台模型>"
}'
```

:::

**响应示例：**

::: code-group

```json [Base64响应]
{
  "created": 1234567890,
  "data": [
    {
      "b64_json": "data:image/png;base64,..."
    }
  ]
}
```

```json [URL响应]
{
  "created": 1234567890,
  "data": [
    {
      "url": "https://example.com/image.png"
    }
  ]
}
```

:::

### 获取图片任务详情接口

`GET /{platform}/v1/images/{task_id}`

[具体返回请看](#获取视频任务详情接口)

## 视频接口

### [视频生成接口](https://platform.openai.com/docs/api-reference/videos/create)

`POST /{platform}/v1/videos`

**请求参数：**

| 参数名            | 类型                           | 必填 | 说明                                                 |
| ----------------- | ------------------------------ | ---- | ---------------------------------------------------- |
| `prompt`          | `string`                       | 是   | 视频描述，用于生成视频                               |
| `model`           | `string`                       | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `input_reference` | `string` / `string[]` / `form` | 否   | 输入参考，用于生成视频，可以是图片的 URL 或者 base64 |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://localhost/{platform}/v1/videos' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "prompt": "<视频描述>",
    "model": "<平台模型>",
    "input_reference": "<输入参考的URL或者base64>"
}'
```

```bash [表单格式]
curl -X POST 'http://localhost/{platform}/v1/videos' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'input_reference[]=@"/path/to/example1.jpg"' \
--form 'input_reference[]=@"/path/to/example2.jpg"' \
--form 'prompt="<视频描述>"' \
--form 'model="<平台模型>"'
```

:::

### [视频编辑接口](https://platform.openai.com/docs/api-reference/videos/remix)

`POST /{platform}/v1/videos/{task_id}/remix`

**请求参数：**

| 参数名            | 类型                           | 必填 | 说明                                                 |
| ----------------- | ------------------------------ | ---- | ---------------------------------------------------- |
| `prompt`          | `string`                       | 是   | 视频描述，用于编辑视频                               |
| `model`           | `string`                       | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `input_reference` | `string` / `string[]` / `form` | 否   | 输入参考，用于编辑视频，可以是图片的 URL 或者 base64 |

**请求示例：**

::: code-group

```bash [JSON格式]
curl -X POST 'http://localhost/{platform}/v1/videos/{task_id}/remix' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "prompt": "<视频编辑提示词>",
    "model": "<平台模型>"
    "input_reference": "<输入参考的URL或者base64>"
}'
```

```bash [表单格式]
curl -X POST 'http://localhost/{platform}/v1/videos/{task_id}/remix' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: multipart/form-data' \
--form 'input_reference[]=@"/path/to/example1.jpg"' \
--form 'input_reference[]=@"/path/to/example2.jpg"' \
--form 'prompt="<视频编辑提示词>"' \
--form 'model="<平台模型>"'
```

:::

### [获取视频任务详情接口](https://platform.openai.com/docs/api-reference/videos/retrieve)

`GET /{platform}/v1/videos/{task_id}`

**请求参数：**

| 参数名    | 类型      | 必填 | 说明                                                       |
| --------- | --------- | ---- | ---------------------------------------------------------- |
| `task_id` | `string`  | 是   | 任务 ID                                                    |
| `detail`  | `boolean` | 否   | 是否返回任务详情，详情包含任务的元数据信息，默认为 `false` |

**异步响应：**

::: code-group

```json [普通响应]
{
  "id": "<任务ID>",
  "object": "<任务类型>",
  "model": "<平台模型>",
  "status": "<任务状态>",
  "created_at": "<创建时间>"
}
```

```json [详情响应]
{
  "id": "<任务ID>",
  "object": "<任务类型>",
  "model": "<平台模型>",
  "status": "<任务状态>",
  "created_at": "<创建时间>",
  "detail": {...}
}
```

:::

### [获取视频文件内容接口](https://platform.openai.com/docs/api-reference/videos/content)

`GET /{platform}/v1/videos/{task_id}/content`

返回视频文件内容
