# Gemini 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/gemini/v1/chat/completions
```

## 模型列表

- `gemini-2.0-flash`
- `gemini-2.0-flash-preview-image-generation`
- `gemini-2.5-flash-preview-05-20`
- `gemini-2.5-flash-preview-tts`
- `gemini-2.5-pro-preview-05-06`：付费 key 才能使用
- `gemini-2.5-pro-preview-tts`
- `gemini-2.5-flash-preview-05-20-thinking`：开启思考模式
- 官网 API 支持的模型都支持

> [!WARNING]
> Gemini API 的安全配置程序默认全部关闭

## 调用示例

### 基础调用

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

### 图像生成

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画小猫"}],
    "model": "gemini-2.0-flash-exp-image-generation",
    "stream": true
}'
```

### 图片理解

> [!WARNING]
> 图片只支持 png、jpeg、webp、heic、heif 格式

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
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
        }
    ],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

### 音频理解

> [!WARNING]
> 音频只支持 wav、mp3、aiff、aac、ogg、flac 格式

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
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
        }
    ],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

### 视频理解

> [!WARNING]
> 视频只支持 mp4、mpeg、mov、avi、x-flv、mpg、webm、wmv、3gpp 格式

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
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
        }
    ],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

### 函数调用

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "What is the weather like in Boston today?"
        }
    ],
    "tools": [
        {
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
                            "enum": [
                                "celsius",
                                "fahrenheit"
                            ]
                        }
                    },
                    "required": [
                        "location"
                    ]
                }
            }
        }
    ],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```

### 代码执行

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [
        {
            "role": "user",
            "content": "What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50."
        }
    ],
    "tools": [
        {
            "type": "function",
            "function": {
                "name": "codeExecution"
            }
        }
    ],
    "model": "gemini-2.0-flash",
    "stream": true
}'
```
