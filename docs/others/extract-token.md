# Token 提取

## OpenAI

OpenAI 平台有 `ChatGPT`、`Sora`、`Codex`三个平台，都可以通过以下三种 Token 进行加号

- `AccessToken`：

  1. 一般 `10天` 过期，一旦过期 Token 就变异常
  2. 打开官网控制台，随便抓取一个接口的 `Authorization` 头便是 `AccessToken`

  ![](/6dd42026a91c405d024d096c3c2b4bf1.png)

- `RefreshCookie`：

  1.  一般不会过期，除非手动点击退出所有设备或退出登陆
  2.  多号取的时候记得使用无痕浏览器登陆，取了之后直接关闭浏览器即可，无需点击退出登陆
  3.  打开官网控制台，在 Cookie 中找到一个名为 `__Secure-next-auth.session-token` 便是 `RefreshCookie`

  ![](/178bd025a73efa5c7baa5b7c83f4c80b.png)

- `RefreshToken`：

  1. 以 `rt_` 开头，由 OpenAI 的 `OAuth2` 颁发，一般用于刷新 `AccessToken`
  2. 一般不会过期，除非官方封控、账号改密码或账号被封才会失效
  3. 目前只有号商那边才有提供，自己提取难度很大，需要自己有能力或抓包 **苹果 IOS** 接口

## Cursor

打开 [Cursor 官网](https://cursor.com/) 控制台，在 `Cookie` 中找到一个名为 `WorkosCursorSessionToken`

![](/67733724f2d5db55403bd7736f9d086b.png)

## Grok

打开 [Grok 官网](https://grok.com/) 控制台，在 `Cookie` 中找到一个名为 `sso`

![](/9495afa5b843b15a2220101aa31d3e0e.png)

## Anthropic

Anthropic 平台有 `Claude官网`、`Claude Code`两个平台，都需要打开 [Claude 官网](https://claude.ai/) 控制台，在 `Cookie` 中找到一个名为 `sessionKey`

![](/9e0a0571ad6e6aa905e6e0807062d8c7.png)

## Google

### 插件安装

- 在后台插件管理中安装插件然后解压

  ![0edeffcf5a473a31361bb8e0a77b9189.png](/9db98cc88f05aecb1eddeb7463ee1f1a.png)

- 在谷歌浏览器的插件管理中导入解压的文件夹

  ![04563c906701e8bdb2ca9080abf1ddf3.png](/04563c906701e8bdb2ca9080abf1ddf3.png)

  ![2bcea57f1b869e4c15b8f83962d0a615.png](/2bcea57f1b869e4c15b8f83962d0a615.png)

  ![df2beb27952e0523390419952b1ab0a1.png](/df2beb27952e0523390419952b1ab0a1.png)

### Gemini API

打开 [Gemini AiStudio](https://aistudio.google.com/) 控制台，点击底部的 `Get API Key` 然后创建或查询已存在的 API KEY

![](/b77c0ab01a0cdc07f5e4a03c307fb52d.png)

### Gemini 官网

> [!WARNING]
>
> - 提取之前如果已登录过，**一定要退出重新登录**，提取之后马上加入 tokens 号池中，否则很快会失效
> - 建议使用无痕浏览器提取，提取完之后，页面不要进行任何对话等**点击操作**，马上关闭浏览器或网页，否则很快会失效

打开 [Gemini 官网](https://gemini.google.com/) 控制台，在 `Cookie` 中找到一个名为 `__Secure-1PSID`

![](/WechatIMG424.jpg)

### Flow

- 先 [按照这里](#插件安装) 的步骤安装好插件，然后返回插件管理刷新页面

- 点击 `添加Flow平台Token` 按钮

  ![](/4066755b24c74d5bd73a47883a65d6f9.png)

- 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

  ![5a94bb398b6a8d20542a52ef1447cb37.png](/5a94bb398b6a8d20542a52ef1447cb37.png)

  ![9e82c16b4b009c5449e47d9afb67d79b.png](/9e82c16b4b009c5449e47d9afb67d79b.png)

### Gemini CLI

> [!WARNING]
>
> - 程序自动创建 `Google Cloud` 项目，并开启 `Gemini for Google Cloud API` 能力

- 先 [按照这里](#插件安装) 的步骤安装好插件，然后返回插件管理刷新页面

- 点击 `添加Gemini Cli平台的Token` 按钮

  ![5e3620f58fe5e805ac08413e7eab75f2.png](/e36e1bac4c24d9ea5d3ddd3916c20797.png)

- 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

  ![f97c554473195e7f631f5eae2fd66a1a.png](/f97c554473195e7f631f5eae2fd66a1a.png)

  ![9dbbf62375f48abca61eee3e17e2a9b2.png](/9dbbf62375f48abca61eee3e17e2a9b2.png)

### Antigravity

- 先 [按照这里](#插件安装) 的步骤安装好插件，然后返回插件管理刷新页面

- 点击 `添加Antigravity平台的Token` 按钮

  ![5e3620f58fe5e805ac08413e7eab75f2.png](/8aa28c66fb4fb024caeaba745c214e35.png)

- 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

  ![f97c554473195e7f631f5eae2fd66a1a.png](/9354f5b0a03de472665fe60e8328d3f2.png)

  ![9dbbf62375f48abca61eee3e17e2a9b2.png](/f5970918ab11951dde25544b535d0696.png)
