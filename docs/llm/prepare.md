# 接入准备

> [!IMPORTANT]
> 请确保已经成功部署程序并已购买许可证，如果还没部署请 [点击这里](/guide/getting-started) 查看部署教程，如果没有购买程序许可证，**请联系作者购买**

## 接口以及鉴权

我们程序通过前缀来区别不同平台的对话接口，但后缀都是统一的标准路径，即 `/v1/chat/completions`，为了防止接口被盗刷，调用接口需要在 `Authorization` 请求头中放入 `许可证` 才可以进行调用。

以下是通过 curl、OpenAI 的官方 SDK 进行调用的示例：

::: code-group

```python [python]
from openai import OpenAI
client = OpenAI(base_url="http://<你的IP>:<你的端口>/<平台前缀>/v1", api_key="你的许可证")

completion = client.chat.completions.create(
  model="gpt-4o",
  messages=[
    {"role": "developer", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ]
)

print(completion.choices[0].message)
```

```javascript [node.js]
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://<你的IP>:<你的端口>/<平台前缀>/v1",
  apiKey: "你的许可证",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "developer", content: "You are a helpful assistant." }],
    model: "gpt-4o",
    store: true,
  });

  console.log(completion.choices[0]);
}

main();
```

```bash [curl]
curl http://<你的IP>:<你的端口>/<平台前缀>/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 你的许可证" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "developer",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'
```

:::

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
