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
- `claude-3-7-sonnet-20250219`
- `claude-sonnet-4-20250514-thinking`
- `claude-3-7-sonnet-20250219-thinking`
- 官网 API 支持的模型都支持

## OpenAI 格式接口的额外参数

- `max_tokens`

  最大返回 token 数量，默认为 32000

- `budget_tokens`

  思考模式的预算 token 数量，默认为 16000

## OpenAI 格式接口调用示例

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

## Claude 格式接口调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/claude_api/v1/messages' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "claude-sonnet-4-20250514",
    "stream": true
}'
```

## Claude Code

`Claude Code` 属于 `Claude` 旗下的一款终端命令行产品，其实内部使用的接口就是 Claude 官方 API，所以就需要一个官方的 `APIKEY` 才可以调用，或者通过 `Max`、`Pro` 的 Claude 订阅也可以换取一个**临时**的 APIKEY。

所以在程序中，我们也可以添加 Claude 官网的 `SessionKey` 作为 Token，程序内部会自动进行 `APIKEY` 的转换、过期自动刷新以及调用频率的轮训管理。
