# ChatGPT 平台

## ChatCompletions 接口地址

```curl
POST http://<你的IP>:<你的端口>/codex/v1/chat/completions
```

## Responses 接口地址

> [!WARNING]
>
> 该接口的请求体和响应体都会原封不动的进行 **转发穿透**，一般用于 `codex` 客户端调用

```curl
POST http://<你的IP>:<你的端口>/codex/v1/responses
```

## 模型列表

- `gpt-5-minimal`
- `gpt-5-low`
- `gpt-5-medium`
- `gpt-5-high`
- `gpt-5-codex-low`
- `gpt-5-codex-medium`
- `gpt-5-codex-high`

> [!WARNING]
>
> 目前 `Codex` 平台只支持 `图片` 和 `PDF` 文件分析

## 调用示例

1. 对话格式：`/v1/chat/completions`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/chat/completions' \
   --header 'Content-Type: application/json' \
   --header 'Authorization: <你的许可证>' \
   --data-raw '{
       "messages": [{"role": "user", "content": "你是什么模型"}],
       "session_id": "prompt_cache_key的别名，会话ID（可选），如果不变的话，系统会为该会话分配一个固定的token进行对话，直到该token上限或异常才会切换token",
       "model": "gpt-5-high",
       "stream": true
   }'
   ```

2. 原生格式：`/v1/responses`

   ```bash
   curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/responses' \
   --header 'Content-Type: application/json' \
   --header 'Authorization: <你的许可证>' \
   --data-raw '{
    "input": [{"content":[{"text":"hi","type":"input_text"}],"id":null,"role":"user","type":"message"}],
    "session_id": "prompt_cache_key的别名，会话ID（可选），如果不变的话，系统会为该会话分配一个固定的token进行对话，直到该token上限或异常才会切换token",
    "model": "gpt-5",
    "reasoning": {
      "effort": "high",
      "summary": "auto"
    },
    "stream": false
   }'
   ```

## Codex 使用教程

1. 安装 Codex 脚手架

```bash
npm install -g @openai/codex # 或 brew install codex
```

2. 设置环境变量

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

3. 运行 Codex

```bash
codex
```

4. 启动后根据提示按 `2`，然后一直**按回车**，程序会自动填充刚才设置的密钥，之后就可以开始愉快的编程了！

![d0de21a07160428517bc5819255ec816.png](/d0de21a07160428517bc5819255ec816.png)
