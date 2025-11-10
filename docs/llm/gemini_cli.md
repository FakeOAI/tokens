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

## 如何添加该平台的 token

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

5. 添加成功之后，有可能会遇到需要手动设置项目 ID 的情况（部分账号需要），此时只需要访问 `https://console.cloud.google.com` 地址（无需登陆，因为刚刚加号的时候已经做了登陆了）

   ![99a4067be25ca5887ebe8522b7645088.png](/99a4067be25ca5887ebe8522b7645088.png)

   ![98586baf1445b2397327c5ae0ad784ad.png](/98586baf1445b2397327c5ae0ad784ad.png)

   ![0ae009c012b2aeeda90685f0d649b579.png](/0ae009c012b2aeeda90685f0d649b579.png)

6. 访问之后，按照如下步骤依次创建项目，获取最后的项目 ID 然后输入 tokens 后台管理里面

   ![d255d8d8e951642de204396c6cc6aa6f.png](/d255d8d8e951642de204396c6cc6aa6f.png)

   ![3eb18b0bbe9cded70e7ed0971c51ac6a.png](/3eb18b0bbe9cded70e7ed0971c51ac6a.png)

   ![251751a28c87267d44eec7d7380eab22.png](/251751a28c87267d44eec7d7380eab22.png)

   ![c1f8ffd9671c1fc804c14ebb0f2a447e.png](/c1f8ffd9671c1fc804c14ebb0f2a447e.png)

   ![280204f25acc72029c091559b995ad56.png](/280204f25acc72029c091559b995ad56.png)

7. 同时需要确保新建的项目开启了 **Gemini API 能力**，不然设置了项目 ID 也无效

   ![c013bedb8b4b4203a4c2ef3e904a30a0.png](/c013bedb8b4b4203a4c2ef3e904a30a0.png)

   ![94b3feb0657d50e6e70ab59a963a1378.png](/94b3feb0657d50e6e70ab59a963a1378.png)

   ![b2fbb01c8a0f7266561da8b07b7590fa.png](/b2fbb01c8a0f7266561da8b07b7590fa.png)

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
