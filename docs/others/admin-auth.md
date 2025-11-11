# 后台鉴权

管理端后台采用 `JWT (JSON Web Token)` 认证方式进行鉴权。登录成功后会返回一个 JWT Token，您也可以根据需要自行生成长期有效的 Token。

## 基本使用

### 获取 Token

登录后台管理接口成功后，系统会返回 JWT Token，将此 Token 保存好，后续所有后台接口请求都需要携带。

### 请求示例

在请求后台接口时，需要在 HTTP Header 中添加 `Authorization` 字段：

```bash
# 获取后台面板数据
curl --location --request GET 'http://<你的IP>:<你的端口>/admin-api/dashboard' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <你的JWT Token>'
```

::: tip 提示
大多数 API 规范中，Authorization 头的格式为 `Bearer <token>`，建议遵循此标准。
:::

## JWT 密钥管理

### 密钥作用

JWT 密钥用于签名和验证 Token 的合法性。**密钥一旦改变，所有已签发的 Token 将立即失效**，这会导致所有已登录的设备被强制退出，需要重新登录。

### 默认密钥规则

- 默认情况下，系统使用 `账号:密码` 的 Base64 编码作为 JWT 密钥
- 因此，修改后台账号或密码后，JWT 密钥会自动改变，所有用户需要重新登录

### 自定义密钥

如果需要通过脚本自动化访问后台接口，建议自定义一个固定的 JWT 密钥，这样可以：

1. 避免修改密码导致脚本失效
2. 生成长期有效的 Token
3. 更好地控制 Token 的生命周期

## 自定义 Token 生成

如果您需要为脚本或自动化工具生成长期有效的 Token，可以参考以下代码：

::: code-group

```js [NodeJS]
// 安装依赖: npm install jsonwebtoken
const jwt = require("jsonwebtoken");

// JWT 密钥 (需要与后台配置的密钥保持一致)
const secret = "你的超长随机秘密字符串";

// Token 载荷信息
const payload = {
  username: "admin", // 必要的载荷
};

// 计算 99 年后的过期时间 (Unix 时间戳，单位:秒)
const future = new Date();
future.setFullYear(future.getFullYear() + 99);
const exp = Math.floor(future.getTime() / 1000);

// 生成 Token (exp 作为标准 claim 写入)
const token = jwt.sign(
  { ...payload, exp },
  btoa(secret), // 使用 btoa 编码密钥
  { algorithm: "HS256" } // 指定签名算法
);

console.log("生成的 Token:", token);
```

```python [Python]
# 安装依赖: pip install pyjwt
import jwt
from datetime import datetime, timedelta

# JWT 密钥 (需要与后台配置的密钥保持一致)
secret = "你的超长随机秘密字符串"

# Token 载荷信息
payload = {
    "username": "admin",       # 必要的载荷
    "exp": datetime.utcnow() + timedelta(days=365 * 99)  # 99 年后过期
}

# 生成 Token
token = jwt.encode(payload, base64.b64encode(secret.encode()).decode(), algorithm="HS256")

print(f"生成的 Token: {token}")
```

:::
