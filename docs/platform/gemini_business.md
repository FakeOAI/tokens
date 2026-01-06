# Gemini Business 官网逆向接口文档

## 基础信息

**官网地址：** `https://business.gemini.google`

**Base URL:** `http://<你的IP>:<你的端口>/gemini_business`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#gemini-business)

## 模型列表

- `auto`
- `gemini-2.5-flash`
- `gemini-2.5-pro`
- `gemini-3-flash-preview`
- `gemini-3-pro-preview`
- `claude-sonnet-4-5`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 参数取值 | 说明                                | 适用范围      |
| -------- | ----------------------------------- | ------------- |
| `image`  | 调用图像生成能力（Nano Banana Pro） | `auto` 不可用 |
| `video`  | 调用视频生成能力（Veo 3.1）         | `auto` 不可用 |
| `search` | 调用搜索能力                        | `auto` 不可用 |

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
