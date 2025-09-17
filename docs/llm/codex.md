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

2. 创建配置文件

在用户根目录的 `.codex` 文件夹创建两个必要的配置文件：`config.toml` 和 `auth.json`

::: code-group

```toml [config.toml]
model_provider = "codex"
model = "gpt-5"
model_reasoning_effort = "high"
disable_response_storage = true

[model_providers.codex]
name = "codex"
base_url = "http://<你的IP>:<你的端口>/codex/v1" # 调用tokens地址
# base_url = "你的new-api地址/v1" # 调用new-api地址
wire_api = "responses"
env_key = "CODEX_API_KEY"
```

```json [auth.json]
{
  "OPENAI_API_KEY": null
}
```

:::

3. 设置环境变量

```bash
export CODEX_API_KEY=Tokens许可证或new-api的apiKey >> ~/.bashrc
source ~/.bashrc
```

4. 运行 Codex

```bash
codex
```
