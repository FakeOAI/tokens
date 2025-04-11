# Tokens 是什么?

Tokens 是一个**管理国外各个主流 AI 平台**的 token 管理平台，把各个平台的鉴权 token 加入到在我们的后台系统中，程序实现逆向以及 OpenAI 对话接口的格式转换，就可以无缝接入现各大主流的对话软件或平台中。

## 原理是什么？

通过客户端逆向以及网页逆向的原理，进行反解析、解密以为伪造等多项技术绕过各大平台的安全检测，使用每个平台的鉴权 Token（JWT 鉴权、Session 鉴权等）进行各大平台核心对话接口的请求，然后通过程序的转换逻辑，最后转译成业界标准的 OpenAI 格式。

## 使用场景

可以把此系统提供的**接口**集成到各大主流的对话软件或API分发系统中，比如：

- [NextChat](https://github.com/ChatGPTNextWeb/NextChat)

- [OneAPI](https://github.com/songquanpeng/one-api)

- [NewAPI](https://github.com/Calcium-Ion/new-api)