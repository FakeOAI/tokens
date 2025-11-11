# Claude Code 客户端逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/claude_api`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

## 接口格式说明

### OpenAI 兼容格式

适用于习惯 OpenAI API 的开发者。

**端点:** `POST /v1/chat/completions`

> [!WARNING]
> OpenAI 格式的请求体目前只支持图片、PDF 文件的读取识别，如果需要更加复杂的文件读取识别，请调用原生的 Claude 格式接口

### Claude 原生格式

完整支持 Claude API 的所有功能，请求体和响应体原封不动地进行转发穿透。

**端点:** `POST /v1/messages`

## 模型列表

> [!NOTE]
> 官网 API 支持的模型都支持

### Sonnet 系列

| 模型名称                              | 功能说明                   |
| ------------------------------------- | -------------------------- |
| `claude-3-7-sonnet-20250219`          | Claude 3.7 Sonnet          |
| `claude-3-7-sonnet-20250219-thinking` | Claude 3.7 Sonnet 思考模式 |
| `claude-sonnet-4-20250514`            | Claude 4 Sonnet            |
| `claude-sonnet-4-20250514-thinking`   | Claude 4 Sonnet 思考模式   |
| `claude-sonnet-4-5-20250929`          | Claude 4.5 Sonnet          |
| `claude-sonnet-4-5-20250929-thinking` | Claude 4.5 Sonnet 思考模式 |

### Opus 系列

| 模型名称                            | 功能说明                 |
| ----------------------------------- | ------------------------ |
| `claude-opus-4-20250514`            | Claude 4 Opus            |
| `claude-opus-4-20250514-thinking`   | Claude 4 Opus 思考模式   |
| `claude-opus-4-1-20250805`          | Claude 4.1 Opus          |
| `claude-opus-4-1-20250805-thinking` | Claude 4.1 Opus 思考模式 |

### Haiku 系列

| 模型名称                             | 功能说明                  |
| ------------------------------------ | ------------------------- |
| `claude-haiku-4-5-20251001`          | Claude 4.5 Haiku          |
| `claude-haiku-4-5-20251001-thinking` | Claude 4.5 Haiku 思考模式 |

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

| 参数       | 类型    | 必填 | 说明                           |
| ---------- | ------- | ---- | ------------------------------ |
| `messages` | array   | 是   | 对话消息数组                   |
| `model`    | string  | 是   | 使用的模型名称                 |
| `stream`   | boolean | 否   | 是否使用流式输出，默认为 false |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

### 2. Claude 原生格式接口

使用 Claude 原生的请求格式，支持完整的 Claude API 功能。

**端点:** `POST /v1/messages`

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
| `system`     | array   | 否   | 系统提示词                     |
| `stream`     | boolean | 否   | 是否使用流式输出，默认为 false |
| `max_tokens` | integer | 否   | 生成的最大 token 数            |

**示例:**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "system": [{"type": "text", "text": "你是一个AI助手，请根据用户的问题给出回答"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

## Claude Code 使用教程

### 关于 Claude Code

`Claude Code` 是 Claude 旗下的一款终端命令行产品，内部使用 Claude 官方 API。

**Token 说明：**

- 可以使用官方的 `APIKEY`
- 也可以通过 `Max`、`Pro` 订阅换取临时的 APIKEY
- 程序支持添加 Claude 官网的 `SessionKey` 作为 Token，会自动进行：
  - APIKEY 转换
  - 过期自动刷新
  - 调用频率轮询管理

### 安装步骤

**1. 安装 Claude Code 脚手架**

```bash
npm install -g @anthropic/claude-code
```

**2. 设置环境变量**

在终端中设置 `Claude Code` 的环境变量：`ANTHROPIC_BASE_URL`、`ANTHROPIC_AUTH_TOKEN`

::: code-group

```bash [Linux、MacOS]
export ANTHROPIC_BASE_URL="http://<你的IP>:<你的端口>/claude_api"
export ANTHROPIC_AUTH_TOKEN="Tokens许可证"
```

```bash [Windows - CMD]
set ANTHROPIC_BASE_URL=http://<你的IP>:<你的端口>/claude_api
set ANTHROPIC_AUTH_TOKEN=Tokens许可证
```

```powershell [Windows - PowerShell]
$env:ANTHROPIC_BASE_URL="http://<你的IP>:<你的端口>/claude_api"
$env:ANTHROPIC_AUTH_TOKEN="Tokens许可证"
```

:::

**3. 运行 Claude Code**

```bash
claude
```

## 全局参数说明

### anthropic-beta（Beta 功能请求头）

用于启用 Claude API 的 Beta 功能。查看 [官方文档](https://docs.claude.com/en/api/beta-headers)。

**默认启用的 Beta 功能：**

```
claude-code-20250219,oauth-2025-04-20,interleaved-thinking-2025-05-14,fine-grained-tool-streaming-2025-05-14
```

**添加自定义 Beta 功能：**

如需使用其他 Beta 功能，可在请求头中添加 `anthropic-beta` 参数，程序会自动合并。

**示例：**

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--header 'anthropic-beta: test' \
--data-raw '{
    "messages": [{"role": "user", "content": "你好"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

**最终合并结果：**

```
anthropic-beta: claude-code-20250219,oauth-2025-04-20,interleaved-thinking-2025-05-14,fine-grained-tool-streaming-2025-05-14,test
```
