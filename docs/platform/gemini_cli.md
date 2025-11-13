# Gemini CLI 客户端逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/gemini_cli`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

## 模型列表

> [!WARNING]
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

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [普通对话]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [图片理解]
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [音频理解]
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [视频理解]
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [函数调用]
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

```bash [代码执行]
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
    "model": "gemini-2.0-pro",
    "stream": true
}'
```

:::

### Gemini API 原生格式

官方文档：`https://ai.google.dev/gemini-api/docs`

::: code-group

```bash [非流式]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1beta/models/gemini-2.5-pro/generateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{"contents":[{"parts":[{"text":"你是什么模型?"}]}]}'
```

```bash [流式]
curl --location --request POST 'http://<你的IP>:<你的端口>/gemini_cli/v1beta/models/gemini-2.5-pro/streamGenerateContent' \
--header 'Content-Type: application/json' \
--header 'X-Goog-Api-Key: <你的许可证>' \
--data-raw '{"contents":[{"parts":[{"text":"你是什么模型?"}]}]}'
```

:::

## 如何添加该平台的 token

> [!WARNING]
>
> - 程序自动创建 `Google Cloud` 项目，并开启 `Gemini for Google Cloud API` 能力

1. 在后台插件管理中安装插件然后解压

   ![0edeffcf5a473a31361bb8e0a77b9189.png](/0edeffcf5a473a31361bb8e0a77b9189.png)

2. 在谷歌浏览器的插件管理中导入解压的文件夹

   ![04563c906701e8bdb2ca9080abf1ddf3.png](/04563c906701e8bdb2ca9080abf1ddf3.png)

   ![2bcea57f1b869e4c15b8f83962d0a615.png](/2bcea57f1b869e4c15b8f83962d0a615.png)

   ![df2beb27952e0523390419952b1ab0a1.png](/df2beb27952e0523390419952b1ab0a1.png)

3. 返回插件管理刷新页面，看到插件已经安装后才可以点击添加 `Gemini CLI Token` 按钮

   ![5e3620f58fe5e805ac08413e7eab75f2.png](/5e3620f58fe5e805ac08413e7eab75f2.png)

4. 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

   ![f97c554473195e7f631f5eae2fd66a1a.png](/f97c554473195e7f631f5eae2fd66a1a.png)

   ![9dbbf62375f48abca61eee3e17e2a9b2.png](/9dbbf62375f48abca61eee3e17e2a9b2.png)
