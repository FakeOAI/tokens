# 接入准备

> [!IMPORTANT]
> 请确保已经成功部署程序并已购买许可证，如果还没部署请 [点击这里](/guide/getting-started) 查看部署教程，如果没有购买程序许可证，**请联系作者购买**

## 基础信息

### 接口格式

程序通过**平台前缀**来区分不同平台的接口，但后缀都是统一的标准路径。

**标准接口格式：**

```
http://<你的IP>:<你的端口>/<平台前缀>/v1/chat/completions
```

**平台前缀列表：**

| 平台 | 前缀 | 示例 |
| ---- | ---- | ---- |
| ChatGPT | `chatgpt` | `http://localhost:8080/chatgpt/v1/chat/completions` |
| Claude | `claude` | `http://localhost:8080/claude/v1/chat/completions` |
| Claude API | `claude_api` | `http://localhost:8080/claude_api/v1/chat/completions` |
| Cursor | `cursor` | `http://localhost:8080/cursor/v1/chat/completions` |
| Codex | `codex` | `http://localhost:8080/codex/v1/chat/completions` |
| Gemini | `gemini` | `http://localhost:8080/gemini/v1/chat/completions` |
| Gemini Official | `gemini_official` | `http://localhost:8080/gemini_official/v1/chat/completions` |
| Grok | `grok` | `http://localhost:8080/grok/v1/chat/completions` |
| Flow | `flow` | `http://localhost:8080/flow/v1/chat/completions` |
| Sora | `sora` | `http://localhost:8080/sora/v1/chat/completions` |

### 认证方式

为了防止接口被盗刷，所有接口调用都需要在 `Authorization` 请求头中放入**许可证**。

**认证格式：**

```
Authorization: Bearer <你的许可证>
```

或

```
Authorization: <你的许可证>
```

## 调用示例

### Python SDK

使用 OpenAI 官方 Python SDK 调用接口。

```python
from openai import OpenAI

# 初始化客户端
client = OpenAI(
    base_url="http://<你的IP>:<你的端口>/<平台前缀>/v1",
    api_key="你的许可证"
)

# 创建对话
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

# 打印结果
print(completion.choices[0].message)
```

### Node.js SDK

使用 OpenAI 官方 Node.js SDK 调用接口。

```javascript
import OpenAI from "openai";

// 初始化客户端
const openai = new OpenAI({
    baseURL: "http://<你的IP>:<你的端口>/<平台前缀>/v1",
    apiKey: "你的许可证"
});

async function main() {
    // 创建对话
    const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Hello!" }
        ]
    });

    // 打印结果
    console.log(completion.choices[0].message);
}

main();
```

### cURL

使用 cURL 命令行工具调用接口。

```bash
curl http://<你的IP>:<你的端口>/<平台前缀>/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 你的许可证" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'
```

## 常见问题

### 1. 如何获取许可证？

请联系作者购买程序许可证。

### 2. 如何选择平台前缀？

根据您要使用的 AI 平台选择对应的前缀。例如：
- 使用 ChatGPT 模型：使用 `chatgpt` 前缀
- 使用 Claude 模型：使用 `claude` 前缀
- 使用 Gemini 模型：使用 `gemini` 前缀

### 3. 是否支持流式输出？

支持。在请求参数中添加 `"stream": true` 即可启用流式输出。

**示例：**

```python
completion = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True  # 启用流式输出
)

for chunk in completion:
    print(chunk.choices[0].delta.content, end="")
```

### 4. 支持哪些模型？

每个平台支持的模型不同，请查看对应平台的文档页面了解详细的模型列表。

### 5. 如何处理错误？

建议在代码中添加错误处理逻辑：

```python
from openai import OpenAI, APIError

client = OpenAI(
    base_url="http://<你的IP>:<你的端口>/<平台前缀>/v1",
    api_key="你的许可证"
)

try:
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "Hello!"}]
    )
    print(completion.choices[0].message)
except APIError as e:
    print(f"API 错误: {e}")
except Exception as e:
    print(f"其他错误: {e}")
```

## 下一步

选择您要使用的平台，查看详细的接口文档：

- [ChatGPT 接口文档](/platform/chatgpt)
- [Claude 接口文档](/platform/claude)
- [Claude API 接口文档](/platform/claude_api)
- [Cursor 接口文档](/platform/cursor)
- [Codex 接口文档](/platform/codex)
- [Gemini 接口文档](/platform/gemini)
- [Gemini Official 接口文档](/platform/gemini_official)
- [Grok 接口文档](/platform/grok)
- [Flow 接口文档](/platform/flow)
- [Sora 接口文档](/platform/sora)
