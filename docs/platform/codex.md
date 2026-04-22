# Codex 终端逆向接口文档

## 基础信息

**官网地址：** `https://openai.com/zh-Hans-CN/codex`

**Base URL:** `http://<你的IP>:<你的端口>/codex`

**认证方式:** `Bearer Token`

**Token 提取：** [点击查看](/others/extract-token.md#openai)

## 模型列表

- `gpt-5.2`
- `gpt-5.3-codex`
- `gpt-5.3-codex-spark`
- `gpt-5.4`
- `gpt-5.4-mini`
- `gpt-image-2`

## 模型参数

[什么是模型参数？](/others/high-level-play.md#模型参数)

| 模型参数 | 推理等级   | 适用范围           |
| -------- | ---------- | ------------------ |
| `low`    | 低级推理   | `gpt-image-2` 除外 |
| `medium` | 中级推理   | `gpt-image-2` 除外 |
| `high`   | 高级推理   | `gpt-image-2` 除外 |
| `xhigh`  | 超高级推理 | `gpt-image-2` 除外 |

## 接口支持概览

| 端点接口                                                               | 支持情况 | 函数调用 |                           备注                           |
| :--------------------------------------------------------------------- | :------: | :------: | :------------------------------------------------------: |
| [`V1ChatCompletions`](/others/api-reference.md#v1chatcompletions) 接口 |    ✅    |    ✅    |                            -                             |
| [`V1Messages`](/others/api-reference.md#v1messages) 接口               |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Responses`](/others/api-reference.md#v1responses) 接口             |    ✅    |    ✅    |                            -                             |
| [`V1BetaModels`](/others/api-reference.md#v1betamodels) 接口           |    ✅    |    ✅    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Images`](/others/api-reference.md#v1images) 接口                   |    ✅    |    ❌    | [额外收费](/others/platform-pricing.md#附加功能收费标准) |
| [`V1Videos`](/others/api-reference.md#v1videos) 接口                   |    ❌    |    ❌    |                            -                             |

## `gpt-image-2` 模型额外参数

> 具体官方参数请查看：`https://developers.openai.com/api/docs/guides/image-generation#size-and-quality-options`

::: code-group

```bash [生成2K图片]
curl -X POST 'http://localhost/{platform}/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "size": "2048x2048",
    "prompt": "画小猫",
    "model": "gpt-image-2"
}'
```

```bash [生成4K图片]
curl -X POST 'http://localhost/{platform}/v1/images/generations' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的许可证>' \
--data-raw '{
    "size": "3840x2160",
    "prompt": "画小猫",
    "model": "gpt-image-2"
}'
```

:::
