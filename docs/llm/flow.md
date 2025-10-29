# Flow 官网逆向平台

## 接口地址

```curl
POST http://<你的IP>:<你的端口>/flow/v1/chat/completions
```

## 模型列表

- `veo_3_1`：默认生成竖屏视频

> [!WARNING]
>
> `free` 号有免费 100 免费积分
>
> `pro` 号每个月有 1000 积分
>
> `ultra` 号每个月有 450000 积分
>
> 只有 `ultra` 号生成的视频才**无水印**

## 模型参数

可指定下面参数，使用 `-` 连接符把参数连接起来，例如：`veo_3_1-portrait`、`veo_3_1-landscape-fast`

- `portrait`：生成竖屏视频
- `landscape`：生成横屏视频
- `fast`：快速模式
- `fl`：帧转视频模式

## 如何提取该平台的 token

> [!WARNING]
>
> 一旦登陆加入号池中，请勿再官网再次登陆，不然号池的号会被挤下线

1. 在后台插件管理中安装插件然后解压

   ![0edeffcf5a473a31361bb8e0a77b9189.png](/0edeffcf5a473a31361bb8e0a77b9189.png)

2. 在谷歌浏览器的插件管理中导入解压的文件夹

   ![04563c906701e8bdb2ca9080abf1ddf3.png](/04563c906701e8bdb2ca9080abf1ddf3.png)

   ![2bcea57f1b869e4c15b8f83962d0a615.png](/2bcea57f1b869e4c15b8f83962d0a615.png)

   ![df2beb27952e0523390419952b1ab0a1.png](/df2beb27952e0523390419952b1ab0a1.png)

3. 返回插件管理刷新页面，看到插件已经安装后才可以点击添加 `Flow Token` 按钮

   ![cc31d927c59c83d68685b514f29933d5.png](/cc31d927c59c83d68685b514f29933d5.png)

4. 登陆谷歌账号，`登陆成功` 后会自动返回到 `tokens管理` 中并且自动添加到号池中

   ![5a94bb398b6a8d20542a52ef1447cb37.png](/5a94bb398b6a8d20542a52ef1447cb37.png)

   ![9e82c16b4b009c5449e47d9afb67d79b.png](/9e82c16b4b009c5449e47d9afb67d79b.png)

## 调用示例

```bash
curl --location --request POST 'http://<你的IP>:<你的端口>/flow/v1/chat/completions' \
--header 'Content-Type: application/json' \
--header 'Authorization: <你的许可证>' \
--data-raw '{
    "messages": [{"role": "user", "content": "画只猪在天上飞"}],
    "model": "veo_3_1",
    "stream": true,
    "n": 2
}'
```

## 平台参数

- `n`

  图片生成不同**变体**的数量，默认为 `1`，最大值为 `4`
