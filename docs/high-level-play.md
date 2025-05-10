# 高阶玩法

## 指定调用的 token 类型

1. 程序的所有平台只有 4 种类型，分别是：`free`、`plus`、`pro`、`team`
2. 添加 token 的时候如果不指定类型，程序都会去调用各个平台的接口查询 token 的类型并添加到数据库中
3. 调用接口的时候都是从数据库抽取 `随机类型` 的 token 进行请求的，如果你在调用模型的时候需要指定程序选取何种类型的 token，你可以通过调整模型名称进行类型的指定，**模型名称** 的格式为：`模型名称|[类型,...]`，比如：

   - `gpt-4o|[free]`：调用此模型只会从数据库中轮训 `free` 类型的 token
   - `gpt-4o|[plus,pro]`：调用此模型只会从数据库中轮训 `plus` 和 `pro` 类型的 token

## Chat2API 模式

如果你有自己的 token 管理方案，只需要通过程序处理各个平台**对话接口的格式转换**，那么使用推荐使用 Chat2API 模式，此模式下，请在 `Authorization` 中传递需要调用平台的 **Token**，在 `Tokens-Authorization` 中传递**你的许可证**，示例如下：

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/<各平台前缀>/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <平台Token>' \
--header 'Tokens-Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "你是什么模型"}],
    "model": "平台提供的模型",
    "stream": true
}'
```

> [!WARNING]
> 此模式下，程序不会进行任何**失败重试**，会把报错的信息原样返回给开发者们，请开发者们自行适配。
