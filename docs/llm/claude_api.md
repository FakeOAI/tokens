# Claude 平台

## OpenAI 格式 接口地址

> [!WARNING]
>
> OpenAI 格式的请求体目前只支持图片、PDF 文件的读取识别，如果需要更加复杂的文件读取识别，请调用原生的 Claude 格式接口。

```curl
POST http://<你的IP>:<你的端口>/claude_api/v1/chat/completions
```

## Claude 格式 接口地址

> [!WARNING]
>
> 该接口的请求体和响应体都会原封不动的进行 **转发穿透**

```curl
POST http://<你的IP>:<你的端口>/claude_api/v1/messages
```

## 模型列表

- `claude-sonnet-4-20250514`
- `claude-sonnet-4-5-20250929`
- `claude-opus-4-1-20250805`
- `claude-opus-4-20250514`
- `claude-3-7-sonnet-20250219`
- `claude-sonnet-4-20250514-thinking`
- `claude-opus-4-20250514-thinking`
- `claude-opus-4-1-20250805-thinking`
- `claude-sonnet-4-5-20250929-thinking`
- `claude-3-7-sonnet-20250219-thinking`
- 官网 API 支持的模型都支持

## 调用示例

1. 对话格式：`/v1/chat/completions`

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

2. 原生格式：`/v1/messages`

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

`Claude Code` 属于 `Claude` 旗下的一款终端命令行产品，其实内部使用的接口就是 Claude 官方 API，所以就需要一个官方的 `APIKEY` 才可以调用，或者通过 `Max`、`Pro` 的 Claude 订阅也可以换取一个**临时**的 APIKEY。

所以在程序中，我们也可以添加 Claude 官网的 `SessionKey` 作为 Token，程序内部会自动进行 `APIKEY` 的转换、过期自动刷新以及调用频率的轮训管理。

1. 安装 Claude Code 脚手架

```bash
npm install -g @anthropic/claude-code
```

2. 设置环境变量

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

3. 运行 Claude Code

```bash
claude
```
