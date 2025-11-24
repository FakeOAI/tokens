# Claude Code 客户端逆向接口文档

## 基础信息

**官网地址：** `https://claude.com/product/claude-code`

**Base URL:** `http://<你的IP>:<你的端口>/claude_api`

**认证方式:** `Bearer Token`、`X-Api-Key请求头`

**Token 提取：** [点击查看](/others/extract-token.md#anthropic)

## 模型列表

> [!WARNING]
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
| `claude-opus-4-5-20251101`          | Claude 4.5 Opus          |
| `claude-opus-4-5-20251101-thinking` | Claude 4.5 Opus 思考模式 |

### Haiku 系列

| 模型名称                             | 功能说明                  |
| ------------------------------------ | ------------------------- |
| `claude-haiku-4-5-20251001`          | Claude 4.5 Haiku          |
| `claude-haiku-4-5-20251001-thinking` | Claude 4.5 Haiku 思考模式 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

### 原生接口

完整支持 Claude API 的所有功能，请求体和响应体原封不动地进行转发穿透。

官方文档：`https://docs.claude.com/en/api/messages`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "system": [{"type": "text", "text": "你是一个AI助手，请根据用户的问题给出回答"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

## 客户端使用教程

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
