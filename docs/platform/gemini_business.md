# Gemini 官网逆向接口文档

## 基础信息

**官网地址：** `https://business.gemini.google`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_business`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-business)

### 模型列表

| 模型名称               | 特殊说明 |
| ---------------------- | -------- |
| `auto`                 | -        |
| `gemini-2.5-flash`     | -        |
| `gemini-2.5-pro`       | -        |
| `gemini-3-pro-preview` | -        |

**模型参数组合**

所有模型都支持使用 `-` 连接符组合参数，例如：`gemini-3-pro-preview-image`

**支持的参数**

| 参数     | 说明                                | 适用模型 |
| -------- | ----------------------------------- | -------- |
| `image`  | 调用图像生成能力（Nano Banana Pro） | 全系模型 |
| `video`  | 调用视频生成能力（Veo 3.1）         | 全系模型 |
| `search` | 调用搜索能力                        | 全系模型 |

## 支持的接口

### 对话接口

OpenAI 官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/gemini_business/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "gemini-2.5-flash",
    "stream": true
}'
```
