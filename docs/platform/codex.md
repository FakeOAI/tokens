# Codex 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/codex`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

> [!WARNING]
> 目前 `Codex` 平台只支持 `图片` 和 `PDF` 文件分析

## 接口格式说明

### OpenAI 兼容格式

适用于习惯 OpenAI API 的开发者。

**端点:** `POST /v1/chat/completions`

### Codex 原生格式

完整支持 Codex 的所有功能，请求体和响应体原封不动地进行转发穿透，一般用于 Codex 客户端调用。

**端点:** `POST /v1/responses`

## 模型列表

### GPT-5 系列

| 模型名称        | 功能说明       | 推理级别 |
| --------------- | -------------- | -------- |
| `gpt-5-minimal` | GPT-5 最小推理 | Minimal  |
| `gpt-5-low`     | GPT-5 低级推理 | Low      |
| `gpt-5-medium`  | GPT-5 中级推理 | Medium   |
| `gpt-5-high`    | GPT-5 高级推理 | High     |

### GPT-5 Codex 系列

| 模型名称             | 功能说明             | 推理级别 |
| -------------------- | -------------------- | -------- |
| `gpt-5-codex-low`    | GPT-5 Codex 低级推理 | Low      |
| `gpt-5-codex-medium` | GPT-5 Codex 中级推理 | Medium   |
| `gpt-5-codex-high`   | GPT-5 Codex 高级推理 | High     |

### GPT-5.1 系列

| 模型名称         | 功能说明         | 推理级别 |
| ---------------- | ---------------- | -------- |
| `gpt-5.1-low`    | GPT-5.1 低级推理 | Low      |
| `gpt-5.1-medium` | GPT-5.1 中级推理 | Medium   |
| `gpt-5.1-high`   | GPT-5.1 高级推理 | High     |

### GPT-5.1 Codex 系列

| 模型名称               | 功能说明               | 推理级别 |
| ---------------------- | ---------------------- | -------- |
| `gpt-5.1-codex-low`    | GPT-5.1 Codex 低级推理 | Low      |
| `gpt-5.1-codex-medium` | GPT-5.1 Codex 中级推理 | Medium   |
| `gpt-5.1-codex-high`   | GPT-5.1 Codex 高级推理 | High     |

### GPT-5.1 Codex Mini 系列

| 模型名称                    | 功能说明                    | 推理级别 |
| --------------------------- | --------------------------- | -------- |
| `gpt-5.1-codex-mini-medium` | GPT-5.1 Codex Mini 中级推理 | Medium   |
| `gpt-5.1-codex-mini-high`   | GPT-5.1 Codex Mini 高级推理 | High     |

## API 端点

### 1. OpenAI 兼容格式接口

使用 OpenAI 兼容的请求格式。

**端点:** `POST /v1/chat/completions`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数         | 类型    | 必填 | 说明                           |
| ------------ | ------- | ---- | ------------------------------ |
| `messages`   | array   | 是   | 对话消息数组                   |
| `model`      | string  | 是   | 使用的模型名称                 |
| `stream`     | boolean | 否   | 是否使用流式输出，默认为 false |
| `session_id` | string  | 否   | 会话 ID，用于 token 会话绑定   |

**session_id 说明：**

- 作为 `prompt_cache_key` 的别名
- 如果保持不变，系统会为该会话分配一个固定的 token 进行对话
- 直到该 token 上限或异常才会切换 token
- 可用于保持上下文连续性

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "session_id": "my-session-123",
    "model": "gpt-5-high",
    "stream": true
}'
```

### 2. Codex 原生格式接口

使用 Codex 原生的请求格式，支持完整的 Codex 功能。

**端点:** `POST /v1/responses`

**请求头:**

```
Content-Type: application/json
Authorization: <你的许可证>
```

**请求参数:**

| 参数         | 类型    | 必填 | 说明                           |
| ------------ | ------- | ---- | ------------------------------ |
| `input`      | array   | 是   | Codex 原生输入格式             |
| `model`      | string  | 是   | 使用的模型名称                 |
| `reasoning`  | object  | 否   | 推理配置                       |
| `stream`     | boolean | 否   | 是否使用流式输出，默认为 false |
| `session_id` | string  | 否   | 会话 ID，用于 token 会话绑定   |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "input": [{"content":[{"text":"hi","type":"input_text"}],"id":null,"role":"user","type":"message"}],
    "session_id": "my-session-123",
    "model": "gpt-5",
    "reasoning": {
        "effort": "high",
        "summary": "auto"
    },
    "stream": false
}'
```

## Codex 客户端使用教程

### 安装步骤

**1. 安装 Codex 脚手架**

```bash
npm install -g @openai/codex
# 或
brew install codex
```

**2. 设置环境变量**

在终端中设置 `codex` 的环境变量：`OPENAI_BASE_URL`、`OPENAI_API_KEY`

::: code-group

```bash [Linux、MacOS]
export OPENAI_BASE_URL="http://<你的IP>:<你的端口>/codex/v1"
export OPENAI_API_KEY="Tokens许可证"
```

```bash [Windows - CMD]
set OPENAI_BASE_URL=http://<你的IP>:<你的端口>/codex/v1
set OPENAI_API_KEY=Tokens许可证
```

```powershell [Windows - PowerShell]
$env:OPENAI_BASE_URL="http://<你的IP>:<你的端口>/codex/v1"
$env:OPENAI_API_KEY="Tokens许可证"
```

:::

**3. 运行 Codex**

```bash
codex
```

**4. 初始化配置**

启动后根据提示：

1. 按 `2` 键
2. 一直**按回车**
3. 程序会自动填充刚才设置的密钥
4. 之后就可以开始愉快地编程了！

**配置示例：**

![d0de21a07160428517bc5819255ec816.png](/d0de21a07160428517bc5819255ec816.png)
