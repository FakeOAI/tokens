# 全局参数

## 参数说明

- 全局参数一般用于控制单次请求的参数，可在设置中进行全局设置。
- 参数可以通过 `query（URL参数）` 或 `body（请求体）` 进行传递。

## 参数列表

1. `close_reasoning_content`

   - 是否关闭思考内容，这是控制单次请求是否关闭思考内容，可在设置中关闭全局的思考内容。
   - 请求示例：`/v1/chat/completions?close_reasoning_content=true`

2. `return_reasoning_content`

   - 思考内容是否输出在 `reasoning_content` 字段中，这是控制单次请求的思考内容是否输出到该字段中，可在设置中进行全局设置。
   - 请求示例：`/v1/chat/completions?return_reasoning_content=true`
