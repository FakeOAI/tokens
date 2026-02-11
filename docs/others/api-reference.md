# 全平台接口文档

## V1ChatCompletions

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

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
  "id": "chatcmpl-123",
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
data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{"role":"assistant"},"finish_reason":null}]}

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{"content":"这是"},"finish_reason":null}]}

...

data: {"id":"chatcmpl-123","object":"chat.completion.chunk","created":1234567890,"model":"<平台模型>","choices":[{"index":0,"delta":{},"finish_reason":"stop"}]}

data: [DONE]
```

## V1Images

### 图片生成接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/images/create`

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

### 图片编辑接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/images/createEdit`

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

## V1Videos

### 视频生成接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/videos/create`

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

### 视频编辑接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/videos/remix`

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

### 获取视频任务详情接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/videos/retrieve`

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

### 获取视频文件内容接口

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/videos/content`

`GET /{platform}/v1/videos/{task_id}/content`

返回视频文件内容

## V1Responses

> OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/responses/create`

`POST /{platform}/v1/responses`

**请求参数：**

| 参数名      | 类型      | 必填 | 说明                                                 |
| ----------- | --------- | ---- | ---------------------------------------------------- |
| `input`     | `array`   | 是   | 输入消息列表                                         |
| `model`     | `string`  | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `reasoning` | `object`  | 否   | 推理配置，包含推理等级和摘要设置                     |
| `stream`    | `boolean` | 否   | 是否启用流式输出，默认为 `false`                     |

**请求示例：**

::: code-group

```bash [普通对话]
curl -X POST 'http://localhost/{platform}/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "input": [
        {
            "content": [
                {
                    "text": "<对话内容>",
                    "type": "input_text"
                }
            ],
            "role": "user",
            "type": "message"
        }
    ],
    "model": "<平台模型>"
}'
```

```bash [推理配置]
curl -X POST 'http://localhost/{platform}/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "input": [
        {
            "content": [
                {
                    "text": "<对话内容>",
                    "type": "input_text"
                }
            ],
            "role": "user",
            "type": "message"
        }
    ],
    "model": "<平台模型>",
    "reasoning": {
        "effort": "high",
        "summary": "auto"
    }
}'
```

```bash [流式对话]
curl -X POST 'http://localhost/{platform}/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "input": [
        {
            "content": [
                {
                    "text": "<对话内容>",
                    "type": "input_text"
                }
            ],
            "role": "user",
            "type": "message"
        }
    ],
    "model": "<平台模型>",
    "stream": true
}'
```

:::

**响应示例：**

**非流式响应：**

```json
{
  "id": "resp_123",
  "object": "response",
  "created_at": 1234567890,
  "model": "<平台模型>",
  "output": [
    {
      "type": "message",
      "id": "msg_123",
      "role": "assistant",
      "content": [
        {
          "type": "output_text",
          "text": "这是 AI 的回复内容"
        }
      ]
    }
  ],
  "usage": {
    "input_tokens": 10,
    "output_tokens": 20,
    "total_tokens": 30
  }
}
```

**流式响应：**

流式响应会返回多个 SSE 事件，格式如下：

```
event: response.created
data: {"type":"response.created","response":{"id":"resp_123","object":"response","model":"<平台模型>","output":[]}}

event: response.output_item.added
data: {"type":"response.output_item.added","output_index":0,"item":{"type":"message","id":"msg_123","role":"assistant","content":[]}}

event: response.content_part.added
data: {"type":"response.content_part.added","output_index":0,"content_index":0,"part":{"type":"output_text","text":""}}

event: response.output_text.delta
data: {"type":"response.output_text.delta","output_index":0,"content_index":0,"delta":"这是"}

...

event: response.output_text.done
data: {"type":"response.output_text.done","output_index":0,"content_index":0,"text":"这是 AI 的回复内容"}

event: response.completed
data: {"type":"response.completed","response":{"id":"resp_123","object":"response","model":"<平台模型>","output":[...],"usage":{"input_tokens":10,"output_tokens":20,"total_tokens":30}}}
```

## V1Messages

> Anthropic 官方文档：`https://docs.anthropic.com/en/api/messages`

`POST /{platform}/v1/messages`

**请求参数：**

| 参数名     | 类型      | 必填 | 说明                                                 |
| ---------- | --------- | ---- | ---------------------------------------------------- |
| `messages` | `array`   | 是   | 对话消息列表，包含角色和内容                         |
| `model`    | `string`  | 是   | 平台模型名称，不同平台支持的模型不同，详见各平台文档 |
| `system`   | `array`   | 否   | 系统提示词                                           |
| `stream`   | `boolean` | 否   | 是否启用流式输出，默认为 `false`                     |

**认证方式：**

支持以下两种认证方式：

- `Authorization: Bearer <你的许可证>`
- `X-Api-Key: <你的许可证>`

**请求示例：**

::: code-group

```bash [普通对话]
curl -X POST 'http://localhost/{platform}/v1/messages' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: <你的许可证>' \
--header 'anthropic-version: 2023-06-01' \
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

```bash [流式对话]
curl -X POST 'http://localhost/{platform}/v1/messages' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: <你的许可证>' \
--header 'anthropic-version: 2023-06-01' \
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

```bash [系统提示词]
curl -X POST 'http://localhost/{platform}/v1/messages' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: <你的许可证>' \
--header 'anthropic-version: 2023-06-01' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "<对话内容>"
        }
    ],
    "system": [
        {
            "type": "text",
            "text": "你是一个专业的编程助手"
        }
    ],
    "model": "<平台模型>",
}'
```

```bash [函数调用]
curl -X POST 'http://localhost/{platform}/v1/messages' \
--header 'Content-Type: application/json' \
--header 'X-Api-Key: <你的许可证>' \
--header 'anthropic-version: 2023-06-01' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "What is the weather like in Boston today?"
        }
    ],
    "tools": [
        {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "input_schema": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    }
                },
                "required": ["location"]
            }
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
  "id": "msg_123",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "这是 AI 的回复内容"
    }
  ],
  "model": "<平台模型>",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 10,
    "output_tokens": 20
  }
}
```

**流式响应：**

流式响应会返回多个 SSE 事件，格式如下：

```
event: message_start
data: {"type":"message_start","message":{"id":"msg_123","type":"message","role":"assistant","content":[],"model":"<平台模型>","usage":{"input_tokens":10,"output_tokens":0}}}

event: content_block_start
data: {"type":"content_block_start","index":0,"content_block":{"type":"text","text":""}}

event: content_block_delta
data: {"type":"content_block_delta","index":0,"delta":{"type":"text_delta","text":"这是"}}

...

event: content_block_stop
data: {"type":"content_block_stop","index":0}

event: message_delta
data: {"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":20}}

event: message_stop
data: {"type":"message_stop"}
```

## V1BetaModels

> Gemini 官方文档：`https://ai.google.dev/gemini-api/docs`

**认证方式：**

支持以下三种认证方式：

- `Authorization: Bearer <你的许可证>`
- `X-Goog-Api-Key: <你的许可证>`（请求头）
- `?key=<你的许可证>`（URL 参数）

### 内容生成接口

`POST /{platform}/v1beta/models/{model}:generateContent`

**请求参数：**

| 参数名             | 类型     | 必填 | 说明                                 |
| ------------------ | -------- | ---- | ------------------------------------ |
| `contents`         | `array`  | 是   | 对话内容列表，包含角色和部件         |
| `tools`            | `array`  | 否   | 工具列表，如 Google 搜索、代码执行等 |
| `generationConfig` | `object` | 否   | 生成配置，如思考模式、图片配置等     |

**请求示例：**

::: code-group

```bash [普通对话]
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "<对话内容>"
                }
            ]
        }
    ]
}'
```

```bash [图片生成]
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "画小猫"
                }
            ]
        }
    ],
    "generationConfig": {
        "responseModalities": ["TEXT", "IMAGE"],
        "imageConfig": {
            "aspectRatio": "1:1"
        }
    }
}'
```

```bash [图片理解]
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "图片里面有什么内容"
                },
                {
                    "inline_data": {
                        "mime_type": "image/jpeg",
                        "data": "<图片base64>"
                    }
                }
            ]
        }
    ]
}'
```

```bash [联网搜索]
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "今日金价是多少？"
                }
            ]
        }
    ],
    "tools": [
        {
            "googleSearch": {}
        }
    ]
}'
```

```bash [思考模式]
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "9.8和9.11谁大"
                }
            ]
        }
    ],
    "generationConfig": {
        "thinkingConfig": {
            "includeThoughts": true,
            "thinkingLevel": "high"
        }
    }
}'
```

:::

### 流式内容生成接口

`POST /{platform}/v1beta/models/{model}:streamGenerateContent`

**请求示例：**

```bash
curl -X POST 'http://localhost/{platform}/v1beta/models/<平台模型>:streamGenerateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{
    "contents": [
        {
            "role": "user",
            "parts": [
                {
                    "text": "<对话内容>"
                }
            ]
        }
    ]
}'
```

**响应示例：**

**非流式响应：**

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "这是 AI 的回复内容"
          }
        ],
        "role": "model"
      },
      "finishReason": "STOP"
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 10,
    "candidatesTokenCount": 20,
    "totalTokenCount": 30
  }
}
```

**流式响应：**

流式响应会返回一个 JSON 数组，每个元素格式如上所示。

## V1Characters

> 该接口只有 `Sora` 官网逆向平台支持

### 非真人角色创建接口

::: code-group

```bash [通过视频URL创建角色]
curl -X POST 'http://<你的IP>:<你的端口>/sora/v1/characters' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: application/json' \
--data '{
    "url": "视频地址或者base64",
    "timestamps": "0,3"
}'
```

```bash [通过任务ID创建角色]
curl -X POST 'http://<你的IP>:<你的端口>/sora/v1/characters' \
--header 'Authorization: Bearer <你的许可证>' \
--header 'Content-Type: application/json' \
--data '{
    "from_task": "任务ID",
    "timestamps": "0,3"
}'
```

:::

### 真人角色创建接口

尽情期待....
