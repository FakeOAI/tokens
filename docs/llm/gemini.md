# Gemini 平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/gemini/v1/chat/completions
```

## 模型列表

- `gemini-2.0-flash`
- `gemini-2.0-flash-exp`
- `gemini-2.0-flash-thinking-exp`
- `gemini-2.5-pro-exp-03-25`
- `gemini-2.0-flash-exp-image-generation`
- 官网API支持的模型都支持

> [!WARNING]
> Gemini API的安全配置程序默认全部关闭

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