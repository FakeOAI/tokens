# 接入 NewAPI

[NewAPI](https://github.com/QuantumNous/new-api) 是最常见的 OpenAI、Anthropic、Google等兼容的中转站。将 Tokens 作为上游渠道接入后，即可在 NewAPI 里统一调度各平台模型。下文假设你已部署 Tokens，并能在浏览器打开后台。

## 1. 新建渠道

登录 NewAPI 管理后台，进入 **渠道管理**，点击 **添加渠道**。

![NewAPI 渠道管理 - 添加渠道](/9eca1976d28c00ea8799c21c49ba6fb4.png)

## 2. 填写基本信息

- **类型**：可选 `OpenAI`、`Anthropic Claude`、`Google Gemini`，类型的选择要看在**Tokens对应平台是否支持**，具体类型选择如下表格。
- **名称**：任意便于识别的名称即可。
- **密钥**：填写 Tokens 后台的 **许可证**（与调用 Tokens 接口时使用的 Bearer Token 一致）。
- **接口地址**：`http(s)://<Tokens 服务地址>/<平台后缀>`

|         类型         | Tokens对应端点                                                                                                                                                                                                             |
| :------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      **OpenAI**      | [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions)、[`V1Responses`](/others/api-reference.md#v1responses)、[`V1Videos`](/others/api-reference.md#v1videos)、[`V1Images`](/others/api-reference.md#v1images) |
| **Anthropic Claude** | [`V1Messages`](/others/api-reference.md#v1messages)                                                                                                                                                                        |
|  **Google Gemini**   | [`V1MetaModels`](/others/api-reference.md#v1metamodels)                                                                                                                                                                    |

![NewAPI 渠道基本信息配置](/8372600e445646034e28038901418990.png)

## 3. 配置模型列表

先 **清空** 渠道里默认自带的模型，再按实际要转发的平台，填入该平台文档中列出的 **模型名称**。不同渠道的可用模型以对应平台页为准，例如 [Codex 终端逆向](/platform/codex)、[ChatGPT 官网逆向](/platform/chatgpt)。

![NewAPI 渠道模型配置](/519c9081eae09be634220d06340de2bc.png)

## 4. 保存并测试

保存渠道后，在 NewAPI 中对刚配置的模型做一次 **渠道测试**，确认能正常连通 Tokens 并返回结果。

![NewAPI 渠道模型测试](/c136287a25c98176be9f50e93451f335.png)
