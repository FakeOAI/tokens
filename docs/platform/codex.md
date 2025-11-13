# Codex 官网逆向接口文档

## 基础信息

**Base URL:** `http://<你的IP>:<你的端口>/codex`

**认证方式:** 在请求头中添加 `Authorization: <你的许可证>`

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

## 支持的接口

### 对话接口

官方文档：`https://platform.openai.com/docs/api-reference/chat/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "session_id": "my-session-123，可选",
    "model": "gpt-5-high",
    "stream": true
}'
```

### Responses 接口

官方文档：`https://platform.openai.com/docs/api-reference/responses/create`

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/codex/v1/responses' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "input": [{"content":[{"text":"hi","type":"input_text"}],"id":null,"role":"user","type":"message"}],
    "session_id": "my-session-123，可选",
    "model": "gpt-5",
    "reasoning": {
        "effort": "high",
        "summary": "auto"
    },
    "stream": false
}'
```

## 客户端使用教程

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
