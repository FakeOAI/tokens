# Claude Code 客户端逆向接口文档

## 基础信息

**官网地址：** `https://claude.com/product/claude-code`

**Base URL:** `http://<你的IP>:<你的端口>/claude_api`

**认证方式:** `Bearer Token`、`X-Api-Key请求头`

**Token 提取：** [点击查看](/others/extract-token.md#anthropic)

## 模型列表

- `claude-sonnet-4-20250514`
- `claude-opus-4-20250514`
- `claude-3-7-sonnet-20250219`
- `claude-3-opus-20240229`
- `claude-3-5-haiku-20241022`
- `claude-3-5-sonnet-20241022`
- `claude-3-5-sonnet-20240620`
- `claude-3-haiku-20240307`
- `claude-opus-4-1-20250805`
- `claude-sonnet-4-5-20250929`
- `claude-haiku-4-5-20251001`
- `claude-opus-4-5-20251101`
- `claude-opus-4-6`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数   | 功能说明     | 适用范围                                                                                                   |
| ---------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `thinking` | 开启思考模式 | `claude-3-opus-20240229`、<br>`claude-3-5-haiku-20241022`、<br>`claude-3-5-sonnet-20241022`、<br>`claude-3-5-sonnet-20240620`、<br>`claude-3-haiku-20240307` 不可用 |

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/claude_api/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

### 原生接口

完整支持 Claude API 的所有功能，请求体和响应体原封不动地进行转发穿透。

官方文档：`https://docs.claude.com/en/api/messages`

```bash
curl -X POST 'http://<你的IP>:<你的端口>/claude_api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data '{
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "system": [
        {
            "type": "text",
            "text": "你是一个AI助手，请根据用户的问题给出回答"
        }
    ],
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
