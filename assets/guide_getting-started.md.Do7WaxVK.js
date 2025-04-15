import{_ as s,c as e,o as n,ae as t}from"./chunks/framework.Dh1jimFm.js";const i="/WechatIMG369.jpg",k=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1744740024000}'),l={name:"guide/getting-started.md"};function p(o,a,d,c,h,r){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tokens</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── config # 项目配置</span></span>
<span class="line"><span>│    ├── config.yaml # 数据库持久层、服务端口日志配置</span></span>
<span class="line"><span>│    └── system.yaml # 程序系统配置，账号密码以及后台的系统配置都保存在此文件</span></span>
<span class="line"><span>├── keys # ssl证书存放位置</span></span>
<span class="line"><span>│    ├── ssl.pem # ssl证书公钥</span></span>
<span class="line"><span>│    └── ssl.key # ssl证书私钥</span></span>
<span class="line"><span>├── deploy.sh # 一键启动脚本</span></span>
<span class="line"><span>└── docker-compose.yaml # docker服务编排文件</span></span></code></pre></div><h2 id="_1-克隆项目配置文件" tabindex="-1">1. 克隆项目配置文件 <a class="header-anchor" href="#_1-克隆项目配置文件" aria-label="Permalink to &quot;1. 克隆项目配置文件&quot;">​</a></h2><p>首先，你需要从 GitHub 上克隆 Tokens 项目的配置文件：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/FakeOAI/tokens.git</span></span></code></pre></div><h2 id="_2-进入项目目录" tabindex="-1">2. 进入项目目录 <a class="header-anchor" href="#_2-进入项目目录" aria-label="Permalink to &quot;2. 进入项目目录&quot;">​</a></h2><p>克隆完成后，进入项目所在目录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tokens</span></span></code></pre></div><h2 id="_3-编辑配置文件" tabindex="-1">3. 编辑配置文件 <a class="header-anchor" href="#_3-编辑配置文件" aria-label="Permalink to &quot;3. 编辑配置文件&quot;">​</a></h2><p>根据你的实际情况，修改项目中的配置文件：</p><ul><li><strong><code>config/config.yaml</code></strong>：此文件包含平台的配置，你可以根据需求调整其中的参数。</li><li><strong><code>docker-compose.yaml</code></strong>：该文件用于配置 Docker 容器设置。你可以根据实际情况调整端口、网络等信息。如果你不需要进行任何自定义，保持默认配置即可。</li></ul><h2 id="_4-运行一键部署脚本" tabindex="-1">4. 运行一键部署脚本 <a class="header-anchor" href="#_4-运行一键部署脚本" aria-label="Permalink to &quot;4. 运行一键部署脚本&quot;">​</a></h2><p>为了简化部署过程，Tokens 提供了一键部署脚本。运行以下命令以自动化完成部署：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./deploy.sh</span></span></code></pre></div><p>该脚本会自动配置并启动所有必要的服务。</p><h3 id="启动部署后" tabindex="-1">启动部署后 <a class="header-anchor" href="#启动部署后" aria-label="Permalink to &quot;启动部署后&quot;">​</a></h3><p>完成部署后，你可以在浏览器中访问以下地址，进入后台管理页面：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://&lt;你的IP&gt;:&lt;你的端口&gt;</span></span></code></pre></div><p>默认情况下，后台管理页面使用以下账号和密码进行登录：</p><ul><li><strong>用户名</strong>：<code>admin</code></li><li><strong>密码</strong>：<code>admin</code></li></ul><p>建议首次登录后在系统配置的管理配置中及时更改密码，以增强系统安全性。</p><h2 id="_5-填写许可证" tabindex="-1">5. 填写许可证 <a class="header-anchor" href="#_5-填写许可证" aria-label="Permalink to &quot;5. 填写许可证&quot;">​</a></h2><p>在系统配置中，你需要填写许可证信息才能正常使用完整功能。请联系项目作者获取许可证，联系方式如下：</p><ul><li><strong>QQ</strong>：1727283040</li></ul><p>确保在收到许可证后，将其填写到系统配置的应用许可证中。</p><p><img src="`+i+'" alt="WechatIMG369.jpg"></p><h2 id="完成部署" tabindex="-1">完成部署 <a class="header-anchor" href="#完成部署" aria-label="Permalink to &quot;完成部署&quot;">​</a></h2><p>至此，Tokens 系统已成功部署并配置完成。你现在可以通过后台管理页面开始使用平台，进行 Token 管理和系统配置。</p>',28)]))}const u=s(l,[["render",p]]);export{k as __pageData,u as default};
