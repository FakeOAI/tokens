# Gemini CLI 客户端逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/gemini_cli`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

## 模型列表

> [!NOTE]
> 官网 API 支持的模型**基本上都支持**

### Flash 系列

| 模型名称                    | 功能说明                  |
| --------------------------- | ------------------------- |
| `gemini-2.5-flash`          | Gemini 2.5 Flash          |
| `gemini-2.5-flash-thinking` | Gemini 2.5 Flash 思考模式 |

### Pro 系列

| 模型名称                  | 功能说明                |
| ------------------------- | ----------------------- |
| `gemini-2.5-pro`          | Gemini 2.5 Pro          |
| `gemini-2.5-pro-thinking` | Gemini 2.5 Pro 思考模式 |

## API 端点

### 对话补全接口

创建对话补全请求，支持文本对话、多模态理解、函数调用等多种能力。

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
| `tools`    | array   | 否   | 函数调用工具列表               |

## 使用示例

### 1. 基础对话

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.5-pro-thinking",
    "stream": true
}'
```

### 2. 图片理解

支持对图片内容进行分析和理解。

> [!WARNING]
> 图片只支持 png、jpeg、webp、heic、heif 格式

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "图片里面有什么内容"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

### 3. 音频理解

支持对音频内容进行分析和转录。

> [!WARNING]
> 音频只支持 wav、mp3、aiff、aac、ogg、flac 格式

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "音频里面讲了什么"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

### 4. 视频理解

支持对视频内容进行分析和理解。

> [!WARNING]
> 视频只支持 mp4、mpeg、mov、avi、x-flv、mpg、webm、wmv、3gpp 格式

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": [
            {
                "type": "text",
                "text": "视频里面讲了什么"
            },
            {
                "type": "image_url",
                "image_url": {
                    "url": "url或者base64"
                }
            }
        ]
    }],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

### 5. 函数调用

支持定义和调用自定义函数，让模型能够执行特定操作。

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": "What is the weather like in Boston today?"
    }],
    "tools": [{
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"]
                    }
                },
                "required": ["location"]
            }
        }
    }],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

### 6. 代码执行

支持生成和执行代码，解决复杂的计算问题。

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{
        "role": "user",
        "content": "What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50."
    }],
    "tools": [{
        "type": "function",
        "function": {
            "name": "codeExecution"
        }
    }],
    "model": "gemini-2.5-pro",
    "stream": true
}'
```

## 支持的文件格式

### 图片格式

- png
- jpeg
- webp
- heic
- heif

### 音频格式

- wav
- mp3
- aiff
- aac
- ogg
- flac

### 视频格式

- mp4
- mpeg
- mov
- avi
- x-flv
- mpg
- webm
- wmv
- 3gpp
