# ChatGPT 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/chatgpt`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

## 模型列表

> [!WARNING]
> 官网所有可用模型都支持

### 标准模型

| 模型名称         | 功能说明        |
| ---------------- | --------------- |
| `gpt-4`          | GPT-4 标准模型  |
| `gpt-4o`         | GPT-4 Optimized |
| `gpt-4o-mini`    | GPT-4o 轻量版   |
| `gpt-4-5`        | GPT-4.5 模型    |
| `gpt-4-1-mini`   | GPT-4.1 Mini    |
| `gpt-4-1`        | GPT-4.1 模型    |
| `gpt-5`          | GPT-5 模型      |
| `gpt-5-thinking` | GPT-5 思考模式  |
| `gpt-5-pro`      | GPT-5 专业版    |

### O 系列模型

| 模型名称       | 功能说明         |
| -------------- | ---------------- |
| `o3`           | O3 模型          |
| `o3-mini`      | O3 轻量版        |
| `o4-mini`      | O4 轻量版        |
| `o4-mini-high` | O4 Mini 高性能版 |
| `o1-pro`       | O1 专业版        |
| `o3-pro`       | O3 专业版        |

### 特殊能力模型

| 模型名称       | 功能说明            |
| -------------- | ------------------- |
| `gpt-4o-image` | GPT-4o 图像生成能力 |

### GPTs 自定义模型

调用 GPTs 自定义模型，格式：`[modelName]-gizmo-[gizmo-id]`

**参数说明：**

- `modelName`：基础模型名称（如 `gpt-4o`、`gpt-5` 等）
- `gizmo-id`：GPTs 的唯一标识符

**获取 gizmo-id：**

1. 在 ChatGPT 官网打开想要使用的 GPTs
2. 从地址栏获取 ID

**示例：** `gpt-4o-gizmo-g-xxxx`（使用 gpt-4o 模型调用 GPTs）

**截图示例：**

![2481748234920_.pic.jpg](/2481748234920_.pic.jpg)

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

::: code-group

```bash [普通对话]
curl --location --request POST 'http://<你的IP>:<你的端口>/chatgpt/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "gpt-4o",
    "stream": true
}'
```

```bash [调用GPTs]
curl --location --request POST 'http://<你的IP>:<你的端口>/chatgpt/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "帮我分析一下这段代码"}],
    "model": "gpt-4o-gizmo-g-2DQzU5UZl",
    "stream": true
}'
```

:::

## 网关配置

ChatGPT 网关起到转发以及对话接口请求逻辑的处理作用。

- 程序不内置 ChatGPT 网关，需要自备网关
- 程序只负责转发以及处理格式转换，**任何引起降智的问题与程序无关**，请联系网关提供者

**配置界面：**

![/3701744441658_.pic.jpg](/3701744441658_.pic.jpg)
