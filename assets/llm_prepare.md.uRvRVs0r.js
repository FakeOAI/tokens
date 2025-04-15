import{_ as i,c as a,o as n,ae as t}from"./chunks/framework.Dh1jimFm.js";const d=JSON.parse('{"title":"接入准备","description":"","frontmatter":{},"headers":[],"relativePath":"llm/prepare.md","filePath":"llm/prepare.md","lastUpdated":1744740024000}'),l={name:"llm/prepare.md"};function p(h,s,k,e,r,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="接入准备" tabindex="-1">接入准备 <a class="header-anchor" href="#接入准备" aria-label="Permalink to &quot;接入准备&quot;">​</a></h1><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p>请确保已经成功部署程序并已购买许可证，如果还没部署请 <a href="/guide/getting-started.html">点击这里</a> 查看部署教程，如果没有购买程序许可证，<strong>请联系作者购买</strong></p></div><h2 id="接口以及鉴权" tabindex="-1">接口以及鉴权 <a class="header-anchor" href="#接口以及鉴权" aria-label="Permalink to &quot;接口以及鉴权&quot;">​</a></h2><p>我们程序通过前缀来区别不同平台的对话接口，但后缀都是统一的标准路径，即 <code>/v1/chat/completions</code>，为了防止接口被盗刷，调用接口需要在 <code>Authorization</code> 请求头中放入 <code>许可证</code> 才可以进行调用。</p><p>以下是通过 curl、OpenAI 的官方 SDK 进行调用的示例：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-H5ftr" id="tab-MZAUNqE" checked><label data-title="python" for="tab-MZAUNqE">python</label><input type="radio" name="group-H5ftr" id="tab-CDS0l5s"><label data-title="node.js" for="tab-CDS0l5s">node.js</label><input type="radio" name="group-H5ftr" id="tab-QDKp1pr"><label data-title="curl" for="tab-QDKp1pr">curl</label></div><div class="blocks"><div class="language-python vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenAI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenAI(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">base_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://&lt;你的IP&gt;:&lt;你的端口&gt;/&lt;平台前缀&gt;/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">api_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你的许可证&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">completion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> client.chat.completions.create(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gpt-4o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;developer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;You are a helpful assistant.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;role&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;content&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(completion.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].message)</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OpenAI </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;openai&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> openai</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenAI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  baseURL: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://&lt;你的IP&gt;:&lt;你的端口&gt;/&lt;平台前缀&gt;/v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  apiKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你的许可证&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> completion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> openai.chat.completions.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    messages: [{ role: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;developer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;You are a helpful assistant.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gpt-4o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    store: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(completion.choices[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你的I</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你的端</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">口</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">平台前</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">缀</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/v1/chat/completions</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Content-Type: application/json&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Authorization: Bearer 你的许可证&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;model&quot;: &quot;gpt-4o&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;messages&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;role&quot;: &quot;developer&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;content&quot;: &quot;You are a helpful assistant.&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;role&quot;: &quot;user&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;content&quot;: &quot;Hello!&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }&#39;</span></span></code></pre></div></div></div><h2 id="chat2api-模式" tabindex="-1">Chat2API 模式 <a class="header-anchor" href="#chat2api-模式" aria-label="Permalink to &quot;Chat2API 模式&quot;">​</a></h2><p>如果你有自己的 token 管理方案，只需要通过程序处理各个平台<strong>对话接口的格式转换</strong>，那么使用推荐使用 Chat2API 模式，此模式下，请在 <code>Authorization</code> 中传递需要调用平台的 <strong>Token</strong>，在 <code>Tokens-Authorization</code> 中传递<strong>你的许可证</strong>，示例如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --location</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --request</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://&lt;你的IP&gt;:&lt;你的端口&gt;/&lt;各平台前缀&gt;/v1/chat/completions&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Content-Type: application/json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Authorization: &lt;平台Token&gt;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--header </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tokens-Authorization: &lt;你的许可证&gt;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">--data-raw </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;messages&quot;: [{&quot;role&quot;: &quot;user&quot;, &quot;content&quot;: &quot;你是什么模型&quot;}],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;model&quot;: &quot;平台提供的模型&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;stream&quot;: true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;</span></span></code></pre></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>此模式下，程序不会进行任何<strong>失败重试</strong>，会把报错的信息原样返回给开发者们，请开发者们自行适配。</p></div>`,10)]))}const F=i(l,[["render",p]]);export{d as __pageData,F as default};
