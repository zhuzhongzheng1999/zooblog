import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.8b942ccd.js";const e={},p=t(`<h1 id="vue\u6E90\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#vue\u6E90\u7801\u89E3\u6790" aria-hidden="true">#</a> Vue\u6E90\u7801\u89E3\u6790</h1><h2 id="vue-router\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vue-router\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> vue-router\u7B80\u5355\u5B9E\u73B0</h2><h3 id="\u8DEF\u7531\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4ECB\u7ECD" aria-hidden="true">#</a> \u8DEF\u7531\u4ECB\u7ECD</h3><p>\u200B <code>vue-router</code>\u521B\u5EFA\u8DEF\u7531\u65F6\uFF0C\u6709\u4E24\u79CD\u65B9\u5F0F<code>createWebHistory</code>\u548C<code>createWebHashHistory</code>,\u5E76\u8868\u793A\u8FD9\u4E24\u4E2A\u65B9\u5F0F\u5206\u522B\u7528\u6765\u521B\u5EFAhistory\u6A21\u5F0F\u548Chash\u6A21\u5F0F\u7684\u8DEF\u7531\u3002</p><ul><li>hash\u6A21\u5F0F: \u4ECE\u8868\u73B0\u4E0A\u6765\u770B\uFF0Chash\u6A21\u5F0F\u5176\u5B9E\u5C31\u662F\u6D4F\u89C8\u5668\u5730\u5740\u4E2D\u7684<code>/#/login</code>\u7684\u90E8\u5206\uFF0C\u901A\u8FC7<code>window.location.hash</code>\u53EF\u4EE5\u83B7\u53D6\u5230\u8DEF\u5F84\u4E0A\u7684hash\u503C\u3002\u5F53\u8DEF\u5F84\u4E0A\u7684hash\u503C\u53D1\u9001\u53D8\u5316\u65F6\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u9875\u9762\u5237\u65B0\uFF0C\u4E5F\u4E0D\u4F1A\u53D1\u9001\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C<code>hashchange</code>\u4E8B\u4EF6\u6765\u76D1\u542Chash\u503C\u7684\u6539\u53D8\uFF0C\u8FDB\u800C\u6E32\u67D3\u65B0\u7684\u7EC4\u4EF6\u5185\u5BB9\u3002</li><li>history\u6A21\u5F0F: \u4ECE\u8868\u73B0\u4E0A\u770B\uFF0Chistory\u6A21\u5F0F\u5728\u6D4F\u89C8\u5668\u8DEF\u5F84\u4E2D\u4E0D\u4F1A\u5B58\u5728<code>#</code>\u76F8\u5173\u7684\u5185\u5BB9\uFF0C<code>history</code>\u6A21\u5F0F\u4E4B\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\uFF0C\u4E3B\u8981\u7531\u4E8E\u5728HTML5\u4E2D\uFF0C\u65B0\u589E\u4E86<code>pushState</code>\u548C<code>replaceState</code>\u65B9\u6CD5\u3002\u652F\u6301\u5BF9\u6D4F\u89C8\u5668\u7684\u8DEF\u7531\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5BF9\u670D\u52A1\u7AEF\u53D1\u9001\u8BF7\u6C42\u5E76\u4E14\u4E5F\u4F1A\u89E6\u53D1\u4E00\u4E2A\u76D1\u542C\u4E8B\u4EF6<code>popstate</code>.</li></ul><h3 id="vue3\u4E2D\u8DEF\u7531\u7684\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue3\u4E2D\u8DEF\u7531\u7684\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> Vue3\u4E2D\u8DEF\u7531\u7684\u7B80\u5355\u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// router.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&#39;../pages/login.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/home.vue&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u5404\u4E2A\u7EC4\u4EF6\u7684\u8DEF\u7531\u5730\u5740</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">component</span><span class="token operator">:</span> Login<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// \u521B\u5EFA\u8DEF\u7531\u5B9E\u4F8B</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// App.vue</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> creatApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#router\u5B9E\u73B0" aria-hidden="true">#</a> router\u5B9E\u73B0</h3><p>\u200B \u9996\u5148\u9700\u8981router\u4E2D\u7684\u4E24\u4E2A\u65B9\u6CD5<code>createRouter</code>\u548C<code>createWebHashHistory</code>\uFF0C\u5E76\u4E14<code>createRouter</code>\u65B9\u6CD5\u8FD4\u56DE\u4E86\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD4\u56DE\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">return</span> router<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
	createRouter<span class="token punctuation">,</span>
  createWebHashHistory
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B createRouter\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u7684\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4EE3\u8868\u8DEF\u7531\u6A21\u5F0F\u548C\u5404\u4E2A\u7EC4\u4EF6\u7684\u8DEF\u7531\u5730\u5740\u914D\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u4F20\u5165\u7684\u4E24\u4E2A\u53C2\u6570</span>
  <span class="token keyword">const</span> history <span class="token operator">=</span> params<span class="token punctuation">.</span>history<span class="token punctuation">;</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> params<span class="token punctuation">.</span>routes<span class="token punctuation">;</span>
  <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">{</span>
    history<span class="token punctuation">,</span>
    routes
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD4\u56DE\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">return</span> router<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
	createRouter<span class="token punctuation">,</span>
  createWebHashHistory
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u56E0\u4E3A\u8981\u6839\u636E\u5F53\u524D\u7684hash\u6765\u52A8\u6001\u9009\u62E9\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u6240\u4EE5router\u5B9E\u4F8B\u8FD8\u9700\u8981\u4FDD\u5B58\u5F53\u524D\u7684\u8DEF\u5F84<code>hash</code>\uFF0C\u5F53\u6D4F\u89C8\u5668\u8DEF\u5F84<code>hash</code>\u6539\u53D8\u65F6\uFF0C\u4FEE\u6539\u4FDD\u5B58\u7684<code>hash</code>\u503C\u5E76\u901A\u77E5\u5176\u4ED6\u5730\u6E32\u67D3\u3002hash\u6A21\u5F0F\u662F\u901A\u8FC7hashchange\u4E8B\u4EF6\u6765\u76D1\u542Chash\u6539\u53D8\u7684\uFF0C\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570history\u6765\u5224\u65AD\u662F\u5426\u4E3Ahash\u6A21\u5F0F\uFF0C\u5982\u679C\u662F\u6DFB\u52A0\u76D1\u542C<code>hashchange</code>\u4E8B\u4EF6\uFF0C\u5F53\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\u66F4\u65B0\u5F53\u524D\u8DEF\u5F84\u7684<code>hash</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u4F20\u5165\u7684\u4E24\u4E2A\u53C2\u6570</span>
  <span class="token keyword">const</span> history <span class="token operator">=</span> params<span class="token punctuation">.</span>history<span class="token punctuation">;</span>
  <span class="token keyword">const</span> routes <span class="token operator">=</span> params<span class="token punctuation">.</span>routes<span class="token punctuation">;</span>
  <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">{</span>
    history<span class="token punctuation">,</span>
    routes<span class="token punctuation">,</span>
    <span class="token comment">// \u589E\u52A0\u5F53\u524D\u8DEF\u5F84hash\u7684\u54CD\u5E94\u5F0F\u53D8\u91CF</span>
    <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6DFB\u52A0\u76D1\u542C\u4E8B\u4EF6</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token operator">===</span> <span class="token string">&#39;WebHashHistory&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// hash\u4FEE\u6539\u540E\u66F4\u65B0\u53D8\u91CF</span>
      router<span class="token punctuation">.</span>hash<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u8FD4\u56DE\u8DEF\u7531\u5BF9\u8C61</span>
  <span class="token keyword">return</span> router<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u533A\u5206\u8DEF\u7531\u6A21\u5F0F</span>
  <span class="token keyword">return</span> <span class="token string">&#39;WebHashHistory&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
	createRouter<span class="token punctuation">,</span>
  createWebHashHistory
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router-link" tabindex="-1"><a class="header-anchor" href="#router-link" aria-hidden="true">#</a> router-link</h3><p>router-link\u7528\u6765\u5B9E\u73B0\u9875\u9762\u7684\u8DF3\u8F6C\u529F\u80FD</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>login<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>#<span class="token punctuation">&#39;</span> + props.to<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> defineProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">to</span><span class="token operator">:</span> String
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="router-view" tabindex="-1"><a class="header-anchor" href="#router-view" aria-hidden="true">#</a> router-view</h3><p>Router-view\u662F\u7EC4\u4EF6\u52A8\u6001\u6E32\u67D3\u7684\u5730\u65B9\uFF0C\u6839\u636Ehash\u503C\u53BB\u6279\u8BC4</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> inject<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> NoFind <span class="token keyword">from</span> <span class="token string">&#39;./404.vue&#39;</span>
    
    <span class="token comment">// \u83B7\u53D6app\u7EC4\u4EF6\u7684\u4F20\u503C</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;ROUTER&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> hash <span class="token operator">=</span> router<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
    <span class="token keyword">let</span> routes <span class="token operator">=</span> router<span class="token punctuation">.</span>routes<span class="token punctuation">;</span>

    <span class="token comment">// hash\u5730\u5740\u4E3A\u54CD\u5E94\u5F0F\uFF0C\u6839\u636E\u5730\u5740\u8BA1\u7B97\u51FA\u7EC4\u4EF6</span>
    <span class="token keyword">let</span> currentComponent <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> targetComponent <span class="token operator">=</span> routes<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> route<span class="token punctuation">.</span>path <span class="token operator">===</span> hash<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> targetComponent<span class="token operator">?.</span>component <span class="token operator">||</span> NoFind<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Router.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 
 * @Author: zhuzhongzheng
 * @Date: 2022-09-29 13:55:53
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-09-29 14:20:19
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> RouterLink <span class="token keyword">from</span> <span class="token string">&#39;./router-link.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> RouterView <span class="token keyword">from</span> <span class="token string">&#39;./router-view.vue&#39;</span><span class="token punctuation">;</span>



<span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u4F20\u5165\u7684\u4E24\u4E2A\u53C2\u6570</span>
    <span class="token keyword">const</span> history <span class="token operator">=</span> params<span class="token punctuation">.</span>history<span class="token punctuation">;</span>
    <span class="token keyword">const</span> routes <span class="token operator">=</span> params<span class="token punctuation">.</span>routes<span class="token punctuation">;</span>
    <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5BF9\u8C61</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token punctuation">{</span>
        history<span class="token punctuation">,</span>
        routes<span class="token punctuation">,</span>
        <span class="token comment">// \u589E\u52A0\u5F53\u524D\u8DEF\u5F84hash\u7684\u54CD\u5E94\u5F0F\u53D8\u91CF</span>
        <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token function">ref</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6CE8\u518C\u4E3A\u5168\u5C40\u7EC4\u4EF6</span>
            app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-link&#39;</span><span class="token punctuation">,</span>RouterLink<span class="token punctuation">)</span>
            app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;router-view&#39;</span><span class="token punctuation">,</span>RouterView<span class="token punctuation">)</span>

            <span class="token comment">// \u5C06router\u5BF9\u8C61\u4F20\u9012\u7ED9router-view\u7EC4\u4EF6</span>
            app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;ROUTER&quot;</span><span class="token punctuation">,</span>router<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>history <span class="token operator">===</span> <span class="token string">&#39;WebHashHistory&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// hash\u4FEE\u6539\u540E\u66F4\u65B0\u53D8\u91CF</span>
            router<span class="token punctuation">.</span>hash<span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8FD4\u56DE\u8DEF\u7531\u5BF9\u8C61</span>
    <span class="token keyword">return</span> router<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;WebHashHistory&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
    createRouter<span class="token punctuation">,</span>
    createWebHashHistory<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#vuex\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> Vuex\u7B80\u5355\u5B9E\u73B0</h2><h3 id="vuex\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vuex\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> Vuex\u7B80\u5355\u4F7F\u7528</h3><p>\u5B89\u88C5Vuex</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728store\u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA<code>index.js</code>\uFF0C\u521B\u5EFA<code>Store</code>\u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6DFB\u52A0\u4FEE\u6539\u6570\u636E</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	<span class="token function">add</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  		state<span class="token punctuation">.</span>count<span class="token operator">++</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728main.js\u4E2D\u6CE8\u5165store</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router/router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u7EC4\u4EF6\u4E2D\u901A\u8FC7useStore\u5F15\u5165store\u5B9E\u4F8B\uFF0C\u8BBF\u95EEcount\u6570\u636E\u5E76\u89E6\u53D1count\u7684\u66F4\u65B0\u4E8B\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u52A01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8C03\u7528mutations\u4E2D\u7684add\u65B9\u6CD5</span>
    store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49vuex\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49vuex\u5B9E\u73B0" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49Vuex\u5B9E\u73B0</h3><p>\u9700\u8981\u521B\u5EFA<code>createStore</code>\u548C<code>useStore</code>\u4E24\u4E2A\u65B9\u6CD5\uFF0C<code>createStore</code>\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> provide<span class="token punctuation">,</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6839\u636E\u53C2\u6570\u521B\u5EFAstore\u5B9E\u4F8B</span>
<span class="token keyword">const</span> <span class="token function-variable function">createStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 	<span class="token comment">// \u8FD4\u56DE\u4E00\u4E2Astore\u5B9E\u4F8B</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F20\u5165\u7684state\u662F\u4E2A\u65B9\u6CD5\uFF0C\u9700\u8981\u771F\u6B63\u8FD4\u56DE\u7684\u7ED3\u679C</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> params<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mutations</span><span class="token operator">:</span> params<span class="token punctuation">.</span>mutations<span class="token punctuation">,</span>
    
    <span class="token comment">// commit\u7528\u6765\u6267\u884Cmutations\u4E0B\u7684\u65B9\u6CD5</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token parameter">fun<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// mutations\u4E0B\u7684\u65B9\u6CD5\u63A5\u53D7state\u4F5C\u4E3A\u53C2\u6570</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>mutations<span class="token punctuation">[</span>fun<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">,</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u589E\u52A0install\u65B9\u6CD5</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;STORE&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DEstore\u5B9E\u4F8B</span>
<span class="token keyword">const</span> <span class="token function-variable function">useStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;STORE&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
	createStore<span class="token punctuation">,</span>
  useStore
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),o=[p];function c(i,l){return s(),a("div",null,o)}var d=n(e,[["render",c],["__file","Vue\u6E90\u7801\u89E3\u6790.html.vue"]]);export{d as default};
