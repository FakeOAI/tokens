# ChatGPT 官网逆向接口文档

## 基础信息

**官网地址：** `https://chatgpt.com`

**Base URL:** `http://<你的IP>:<你的端口>/chatgpt`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#openai)

## 模型列表

> [!WARNING]
> 官网所有可用模型都支持

- `gpt-4`
- `gpt-4o`
- `gpt-4o-mini`
- `gpt-4-5`
- `gpt-4-1-mini`
- `gpt-4-1`
- `gpt-5`
- `gpt-5-thinking`
- `gpt-5-pro`
- `o3`
- `o3-mini`
- `o4-mini`
- `o4-mini-high`
- `o1-pro`
- `o3-pro`
- `gpt-4o-image`

### GPTs 自定义模型

调用 GPTs 自定义模型，格式：`[modelName]-gizmo-[gizmo-id]`

**参数说明：**

- `modelName`：基础模型名称（如 `gpt-4o`、`gpt-5` 等）
- `gizmo-id`：GPTs 的唯一标识符

**获取 gizmo-id：**

1. 在 ChatGPT 官网打开想要使用的 GPTs
2. 从地址栏获取 ID

**示例：** `gpt-4o-gizmo-g-xxxx`（使用 gpt-4o 模型调用 GPTs）

**截图示例：**

![2481748234920_.pic.jpg](/2481748234920_.pic.jpg)

## 网关配置

ChatGPT 网关起到转发以及对话接口请求逻辑的处理作用。

- 程序不内置 ChatGPT 网关，需要自备网关
- 程序只负责转发以及处理格式转换，**任何引起降智的问题与程序无关**，请联系网关提供者

**配置界面：**

![/3701744441658_.pic.jpg](/3701744441658_.pic.jpg)

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |   备注   |
| :--------------------------------------------------------------------- | :------: | :------: | :------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ❌    |    -     |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ❌    |    ❌    |    -     |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ❌    |    ❌    |    -     |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |    -     |
