# 终端接入教程

## Claude Code 终端

> 支持 `V1Messages` 接口且支持函数调用的**平台**都可接入到 `Claude Code` 终端使用

**1. 安装 Claude Code 脚手架**

```bash
npm install -g @anthropic/claude-code # 或 brew install claude-code
```

**2. 设置环境变量**

在终端中设置 `Claude Code` 的环境变量：`ANTHROPIC_BASE_URL`、`ANTHROPIC_AUTH_TOKEN`

::: code-group

```bash [Linux、MacOS]
export ANTHROPIC_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
export ANTHROPIC_AUTH_TOKEN="Tokens许可证"
```

```bash [Windows - CMD]
set ANTHROPIC_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
set ANTHROPIC_AUTH_TOKEN="Tokens许可证"
```

```powershell [Windows - PowerShell]
$env:ANTHROPIC_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
$env:ANTHROPIC_AUTH_TOKEN="Tokens许可证"
```

:::

**3. 运行 Claude Code**

```bash
claude
```

## Codex 终端

> 支持 `V1Responses` 接口且支持函数调用的**平台**都可接入到 `Codex` 终端使用

**1. 安装 Codex 脚手架**

```bash
npm install -g @openai/codex # 或 brew install codex
```

**2. 设置环境变量**

在终端中设置 `codex` 的环境变量：`OPENAI_BASE_URL`、`OPENAI_API_KEY`

::: code-group

```bash [Linux、MacOS]
export OPENAI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>/v1"
export OPENAI_API_KEY="Tokens许可证"
```

```bash [Windows - CMD]
set OPENAI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>/v1"
set OPENAI_API_KEY="Tokens许可证"
```

```powershell [Windows - PowerShell]
$env:OPENAI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>/v1"
$env:OPENAI_API_KEY="Tokens许可证"
```

:::

**3. 运行 Codex**

```bash
codex
```

## Gemini Cli 终端

> 1. 支持 `V1BetaModels` 接口且支持函数调用的**平台**都可接入到 `Gemini Cli` 终端使用
> 2. 只能选 `Use Gemini API Key` 进行认证，如果提示 `Enter Gemini API Key` 请直接留空按回车。
> 3. 如果一打开就跳Google登录的话，请删除 `~/.gemini/settings.json` 文件后再尝试启动 `gemini`

**1. 安装 Gemini Cli 脚手架**

```bash
npm install -g @google/gemini-cli # 或 brew install gemini-cli
```

**2. 设置环境变量**

在终端中设置 `Gemini Cli` 的环境变量：`GOOGLE_GEMINI_BASE_URL`、`GEMINI_API_KEY`

::: code-group

```bash [Linux、MacOS]
export GOOGLE_GEMINI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
export GEMINI_API_KEY="Tokens许可证"
```

```bash [Windows - CMD]
set GOOGLE_GEMINI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
set GEMINI_API_KEY="Tokens许可证"
```

```powershell [Windows - PowerShell]
$env:GOOGLE_GEMINI_BASE_URL="http://<你的IP>:<你的端口>/<平台后缀>"
$env:GEMINI_API_KEY="Tokens许可证"
```

:::

**3. 运行 Gemini Cli**

```bash
gemini
```
