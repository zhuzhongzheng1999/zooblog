import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as l,a as n,b as d,d as e,e as i,r}from"./app.8b942ccd.js";const c={},o=e('<h1 id="react\u603B\u7ED3\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#react\u603B\u7ED3\u7B14\u8BB0" aria-hidden="true">#</a> React\u603B\u7ED3\u7B14\u8BB0</h1><h2 id="\u4E00\u3001react\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001react\u7B80\u4ECB" aria-hidden="true">#</a> \u4E00\u3001React\u7B80\u4ECB</h2><h3 id="_1-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u8FF0" aria-hidden="true">#</a> 1.1 \u6982\u8FF0</h3>',3),u=i("\u5B98\u7F51\u94FE\u63A5:"),v={href:"https://react.docschina.org/",target:"_blank",rel:"noopener noreferrer"},p=i("\u4E2D\u6587\u5B98\u7F51"),m=n("li",null,"\u7528\u4E8E\u52A8\u6001\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684JS(\u53EA\u5173\u6CE8\u89C6\u56FE)",-1),b=n("li",null,"Facebook\u5F00\u6E90",-1),h=e(`<h3 id="_1-2-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7279\u70B9" aria-hidden="true">#</a> 1.2 \u7279\u70B9</h3><ul><li>\u58F0\u660E\u5F0F\u7F16\u7A0B <ul><li>\u58F0\u660E\u5F0F\u7F16\u7A0B\u662F\u76EE\u524D\u6574\u4E2A\u5927\u524D\u7AEF\u5F00\u53D1\u7684\u6A21\u5F0F\uFF1AVue\u3001React\u3001Flutter\u3001SwiftUI</li><li>\u5B83\u5141\u8BB8\u6211\u4EEC\u53EA\u9700\u8981\u7EF4\u62A4\u81EA\u5DF1\u7684\u72B6\u6001\uFF0C\u5F53\u72B6\u6001\u6539\u53D8\u65F6\uFF0CReact\u53EF\u4EE5\u6839\u636E\u6700\u65B0\u7684\u72B6\u6001\u53BB\u6E32\u67D3\u6211\u4EEC\u7684UI\u754C\u9762</li><li><img src="https://gcore.jsdelivr.net/gh/easydeleroy/imgHosting@main/ios/image-20211215164650128.png" alt="image-20211215164650128" loading="lazy"></li></ul></li><li>\u7EC4\u4EF6\u5316\u5F00\u53D1 <ul><li><img src="https://gcore.jsdelivr.net/gh/easydeleroy/imgHosting@main/ios/image-20211215164941630.png" alt="image-20211215164941630" loading="lazy"></li></ul></li><li>\u9AD8\u6548 (\u4F18\u79C0\u7684Diffing\u7B97\u6CD5)</li></ul><h3 id="_1-3-\u9AD8\u6548\u7684\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_1-3-\u9AD8\u6548\u7684\u539F\u56E0" aria-hidden="true">#</a> 1.3 \u9AD8\u6548\u7684\u539F\u56E0</h3><ol><li>\u4F7F\u7528\u865A\u62DF(virtual)DOM,\u4E0D\u603B\u662F\u76F4\u63A5\u64CD\u4F5C\u9875\u9762\u771F\u5B9EDON</li><li>DOM Diffing\u7B97\u6CD5,\u6700\u5C0F\u5316\u9875\u9762\u91CD\u7ED8</li><li><code>\u6CE8\u610F</code>\uFF1AReact\u5E76\u4E0D\u4F1A\u63D0\u9AD8\u6E32\u67D3\u901F\u5EA6,\u53CD\u800C\u53EF\u80FD\u4F1A\u589E\u52A0\u6E32\u67D3\u65F6\u95F4,\u771F\u6B63\u9AD8\u6548\u7684\u539F\u56E0\u662F\u5B83\u80FD\u6709\u6548<code>\u51CF\u5C11\u6E32\u67D3\u6B21\u6570</code></li></ol><h3 id="_1-4-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6A21\u5757\u5316" aria-hidden="true">#</a> 1.4 \u6A21\u5757\u5316</h3><ul><li>\u7406\u89E3:\u5411\u5916\u63D0\u4F9B\u7279\u5B9A\u529F\u80FD\u7684js\u7A0B\u5E8F,\u4E00\u822C\u5C31\u662F\u4E00\u4E2Ajs\u6587\u4EF6</li><li>\u4F5C\u7528:\u590D\u7528js,\u7B80\u5316js\u7684\u7F16\u5199,\u63D0\u9AD8js\u8FD0\u884C\u6548\u7387</li></ul><h2 id="\u4E8C\u3001jsx\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001jsx\u8BED\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001JSX\u8BED\u6CD5</h2><h3 id="_2-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6982\u8FF0" aria-hidden="true">#</a> 2.1 \u6982\u8FF0</h3><ul><li>JSX\u662FJavaScript XML\u7684\u7B80\u5199,\u8868\u793A\u5728JavaScript\u4EE3\u7801\u4E2D\u5199XML ( HTML )\u683C\u5F0F\u7684\u4EE3\u7801</li><li>\u4F18\u52BF: \u58F0\u660E\u5F0F\u8BED\u6CD5\u66F4\u52A0\u76F4\u89C2\u3001\u4E0EHTML\u7ED3\u6784\u76F8\u540C,\u964D\u4F4E\u4E86\u5B66\u4E60\u6210\u672C\u3001\u63D0\u5347\u4E86\u5F00\u53D1\u6548\u7387</li></ul><h3 id="_2-2-\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#_2-2-\u89C4\u5219" aria-hidden="true">#</a> 2.2 \u89C4\u5219</h3><ol><li>\u5B9A\u4E49\u865A\u62DFDOM\u65F6,\u6700\u5916\u5C42\u4E0D\u9700\u8981\u5199\u5F15\u53F7.</li><li>\u591A\u4E2A\u6807\u7B7E\u7684\u6700\u5916\u5C42\u53EA\u80FD\u6709\u4E00\u4E2A\u6807\u7B7E(\u6574\u4E2A\u865A\u62DFDOM\u5728\u6700\u5916\u5C42\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u5BB9\u5668\u5305\u88F9)</li><li>React\u5143\u7D20\u7684\u5C5E\u6027\u540D\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5</li><li>\u7279\u6B8A\u5C5E\u6027\u540D:class-&gt;className; for -&gt; htmlFor; tabindex -&gt; tabIndex</li><li>\u6807\u7B7E\u5185\u6DF7\u5165JS\u8868\u8FBE\u5F0F\u65F6\u8981\u4F7F\u7528{}</li><li>\u5185\u8054\u6837\u5F0F,\u8981\u7528<code>style={{key:value}}</code>\u7684\u5F62\u5F0F(\u53CC{}\u4EE3\u8868\u5BF9\u8C61,\u5355{}\u4EE3\u8868\u8868\u8FBE\u5F0F)\u53BB\u5199</li><li>\u6807\u7B7E\u5FC5\u987B\u95ED\u5408</li><li>\u6807\u7B7E\u9996\u5B57\u6BCD,\u5982\u679C\u5927\u5199\u5F00\u5934\u4EE3\u8868\u662F\u7EC4\u4EF6,\u5C0F\u5199\u5F00\u5934\u4F1A\u53BB\u627E\u5BF9\u5E94\u7684html\u6807\u7B7E</li></ol><h3 id="_2-3-\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> 2.3 \u6761\u4EF6\u6E32\u67D3</h3><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const isLoading = false
const loadData = () =&gt; {
  if (isLoading) {
      return &lt;div&gt;\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...&lt;/div&gt;
  }
  else {
    return (
        &lt;div&gt;\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u6B64\u5904\u663E\u793A\u52A0\u8F7D\u540E\u7684\u6570\u636E&lt;/div&gt;
      )
  }
}

const dv = (
  &lt;div&gt;
  	{ loadData() }
  &lt;/div&gt;
\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> 2.4 \u5217\u8868\u6E32\u67D3</h3><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u5217\u8868\u6E32\u67D3\u4F7F\u7528js\u6570\u7EC4\u7684map()\u65B9\u6CD5
const songs = [
  {id: 1, name: &#39;\u7EDD\u5BF9\u529B\u91CF&#39;},
  {id: 2, name: &#39;\u7279\u6218\u8363\u8000&#39;},
  {id: 3, name: &#39;\u5229\u5203\u51FA\u51FB&#39;},
]
const title = (
  &lt;ul&gt;
    { songs.map((item,index) =&gt; { return (&lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)}) }
  &lt;/ul&gt;
)

ReactDOM.render(title, document.querySelector(&#39;#root&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-this\u7ED1\u5B9A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-5-this\u7ED1\u5B9A\u95EE\u9898" aria-hidden="true">#</a> 2.5 this\u7ED1\u5B9A\u95EE\u9898</h3><p>\u200B \u5728{}\u4E2D\u4F20\u5165\u4E00\u4E2A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\uFF0C\u5B83\u4F1A\u5728\u4E8B\u4EF6\u53D1\u751F\u65F6\u88AB\u6267\u884C\uFF0C\u4F46\u662F\u56E0\u4E3A\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E0D\u662F\u6211\u4EEC\u4E3B\u52A8\u8C03\u7528\u7684\uFF0C\u662FReact\u5185\u90E8\u8C03\u7528\u7684\uFF0C\u6240\u4EE5\u5E76\u4E0D\u77E5\u9053\u5982\u4F55\u7ED1\u5B9A\u6B63\u786E\u7684this\u3002</p><ul><li>\u89E3\u51B3\u65B9\u6CD5\u4E00\uFF1Abind\u7ED9handleClick\u663E\u793A\u7ED1\u5B9Athis\uFF0C\u5728constrctor\u4E2D<code>this.handleClick = this.handleClick.bind(this);</code></li><li>\u4F7F\u7528ES6 class fields\u8BED\u6CD5</li><li>\u4E8B\u4EF6\u76D1\u542C\u65F6\u4F20\u5165\u7BAD\u5934\u51FD\u6570(\u63A8\u8350)</li></ul><h2 id="\u4E09\u3001\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u811A\u624B\u67B6" aria-hidden="true">#</a> \u4E09\u3001\u811A\u624B\u67B6</h2><h3 id="_3-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6982\u8FF0" aria-hidden="true">#</a> 3.1 \u6982\u8FF0</h3><p>\u200B \u6BCF\u4E2A\u9879\u76EE\u5B8C\u6210\u7684\u9879\u76EE\u4E0D\u540C\uFF0C\u4F46\u662F\u57FA\u672C\u5DE5\u7A0B\u5316\u7ED3\u6784\u662F\u76F8\u4F3C\u7684\uFF0C\u6240\u4EE5\u6CA1\u6709\u5FC5\u8981\u6BCF\u6B21\u90FD\u4ECE\u96F6\u5F00\u59CB\u642D\u5EFA\uFF0C\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u5DE5\u5177\uFF0C\u5E2E\u52A9\u6211\u4EEC\u751F\u4EA7\u57FA\u672C\u7684\u5DE5\u7A0B\u5316\u6A21\u7248\uFF0C\u4E0D\u540C\u7684\u9879\u76EE\u8FDB\u884C\u7B80\u5355\u7684\u914D\u7F6E\u4FEE\u6539\u3002<strong>\u811A\u624B\u67B6</strong>\u7684\u529F\u80FD\u5C31\u662F\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u751F\u6210\u9879\u76EE\u7684\u5DE5\u7A0B\u5316\u7ED3\u6784\u3002</p><h3 id="_3-2-\u811A\u624B\u67B6\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_3-2-\u811A\u624B\u67B6\u5DE5\u5177" aria-hidden="true">#</a> 3.2 \u811A\u624B\u67B6\u5DE5\u5177</h3><ul><li><p>Vue: vue-cli</p></li><li><p>Angular: angular-cli</p></li><li><p>React: create-react-app</p><p>\u76EE\u524D\u8FD9\u4E9B\u811A\u624B\u67B6\u5DE5\u5177\u90FD\u662F\u4F7F\u7528node\u7F16\u5199\u7684\uFF0C\u5E76\u4E14\u90FD\u662F\u57FA\u4E8Ewebpack\u7684\u3002</p></li></ul><h3 id="_3-3-npm\u548Cyarn\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_3-3-npm\u548Cyarn\u6307\u4EE4" aria-hidden="true">#</a> 3.3 npm\u548Cyarn\u6307\u4EE4</h3><ul><li>npm: (node package manager) node\u5305\u7BA1\u7406\u5668\uFF0C\u5E2E\u52A9\u6211\u4EEC\u7BA1\u7406\u4F9D\u8D56\u7684\u5DE5\u5177\u5305</li><li>yarn:\u65B0\u7684JS\u5305\u7BA1\u7406\u5DE5\u5177</li></ul><table><thead><tr><th style="text-align:center;">NPM</th><th style="text-align:center;">YARN</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">npm init</td><td style="text-align:center;">yarn init</td><td style="text-align:center;">\u521D\u59CB\u5316\u67D0\u4E2A\u9879\u76EE</td></tr><tr><td style="text-align:center;">npm install/link</td><td style="text-align:center;">yarn install/link</td><td style="text-align:center;">\u9ED8\u8BA4\u7684\u5B89\u88C5\u4F9D\u8D56\u64CD\u4F5C</td></tr><tr><td style="text-align:center;">npm install taco --save</td><td style="text-align:center;">yarn add taco</td><td style="text-align:center;">\u5B89\u88C5\u67D0\u4E2A\u4F9D\u8D56\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u4FDD\u5B58\u5230package.</td></tr><tr><td style="text-align:center;">npm uninstall taco --save</td><td style="text-align:center;">yarn remove taco</td><td style="text-align:center;">\u79FB\u9664\u67D0\u4E2A\u4F9D\u8D56\u9879\u76EE</td></tr><tr><td style="text-align:center;">npm install taco - -save-dev</td><td style="text-align:center;">yarn add taco --dev</td><td style="text-align:center;">\u5B89\u88C5\u67D0\u4E2A\u5F00\u53D1\u65F6\u4F9D\u8D56\u9879\u76EE</td></tr><tr><td style="text-align:center;">npm update taco --save</td><td style="text-align:center;">yarn upgrade taco</td><td style="text-align:center;">\u66F4\u65B0\u67D0\u4E2A\u4F9D\u8D56\u9879\u76EE</td></tr><tr><td style="text-align:center;">npm install taco -global</td><td style="text-align:center;">yarm global add taco</td><td style="text-align:center;">\u5B89\u88C5\u67D0\u4E2A\u5168\u5C40\u4F9D\u8D56\u9879\u76EE</td></tr><tr><td style="text-align:center;">npm publish/login/logout</td><td style="text-align:center;">yarn publish/login/logout</td><td style="text-align:center;">\u53D1\u5E03/\u767B\u5F55\u767B\u51FA\uFF0C\u4E00\u7CFB\u5217NPM Registry\u64CD\u4F5C</td></tr><tr><td style="text-align:center;">npm run/test</td><td style="text-align:center;">yarn run/test</td><td style="text-align:center;">\u8FD0\u884C\u67D0\u4E2A\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5728script\u811A\u672C\u4E2D\u53BB\u914D\u7F6E</td></tr></tbody></table><h3 id="_3-4-\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-4-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 3.4 \u76EE\u5F55\u7ED3\u6784</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">|</span> -- README.md  // readme\u8BF4\u660E\u6587\u6863
<span class="token operator">|</span> -- package.json  // \u5BF9\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u63CF\u8FF0,\u5305\u62EC\u4E86\u5E94\u7528\u540D\u79F0\u3001\u7248\u672C\u53F7\u3001\u4F9D\u8D56\u5305\u3001\u9879\u76EE\u542F\u52A8\u3001\u6253\u5305\u547D\u4EE4\u7B49
<span class="token operator">|</span> -- public  // \u9759\u6001\u8D44\u6E90\u6587\u4EF6\u5939
<span class="token operator">|</span>		<span class="token operator">|</span> -- favicon.ico // \u5E94\u7528\u7A0B\u5E8F\u9876\u90E8icon\u56FE\u6807
<span class="token operator">|</span>		<span class="token operator">|</span> -- index.html // \u5E94\u7528index.html\u5165\u53E3\u6587\u4EF6
<span class="token operator">|</span>		<span class="token operator">|</span> -- manifest.json // \u5E94\u7528\u52A0\u58F3\u7684\u914D\u7F6E\u6587\u4EF6
<span class="token operator">|</span>		<span class="token operator">|</span> -- robots.txt // \u722C\u866B\u534F\u8BAE\u6587\u4EF6
<span class="token operator">|</span> -- src // \u6E90\u4EE3\u7801\u6587\u4EF6\u5939
<span class="token operator">|</span>		<span class="token operator">|</span> -- App.css // App\u7EC4\u4EF6\u76F8\u5173\u7684\u6837\u5F0F
<span class="token operator">|</span>		<span class="token operator">|</span> -- App.js // App\u7EC4\u4EF6\u7684\u4EE3\u7801\u6587\u4EF6
<span class="token operator">|</span>		<span class="token operator">|</span> -- index.css // \u5168\u5C40\u7684\u6837\u5F0F\u6587\u4EF6
<span class="token operator">|</span> 		<span class="token operator">|</span> -- index.js // \u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\u6587\u4EF6
<span class="token operator">|</span>		<span class="token operator">|</span> -- reportWebVitals.js // \u9875\u9762\u6027\u80FD\u5206\u6790\u6587\u4EF6
<span class="token operator">|</span> 		<span class="token operator">|</span> -- setupTests.js // \u7EC4\u4EF6\u5355\u5143\u6D4B\u8BD5\u7684\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-webpack" tabindex="-1"><a class="header-anchor" href="#_3-5-webpack" aria-hidden="true">#</a> 3.5 webpack</h3><p>\u200B webpack\u662F\u4E00\u4E2A\u73B0\u4EE3Javascript\u5E94\u7528\u7A0B\u5E8F\u7684\u9759\u6001\u6A21\u5757\u6253\u5305\u5668.</p><h2 id="\u56DB\u3001\u7EC4\u4EF6\u5316\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u7EC4\u4EF6\u5316\u5F00\u53D1" aria-hidden="true">#</a> \u56DB\u3001\u7EC4\u4EF6\u5316\u5F00\u53D1</h2><h3 id="_4-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_4-1-\u6982\u8FF0" aria-hidden="true">#</a> 4.1 \u6982\u8FF0</h3><ul><li>\u6839\u636E\u7EC4\u4EF6\u7684\u5B9A\u4E49\u65B9\u5F0F\u5206\u4E3A:\u51FD\u6570\u7EC4\u4EF6\u548C\u7C7B\u7EC4\u4EF6</li><li>\u6839\u636E\u7EC4\u4EF6\u5185\u90E8\u662F\u5426\u6709\u72B6\u6001\u9700\u8981\u7EF4\u62A4\u5206\u4E3A:\u65E0\u72B6\u6001\u7EC4\u4EF6\u548C\u6709\u72B6\u6001\u7EC4\u4EF6</li><li>\u6839\u636E\u7EC4\u4EF6\u7684\u4E0D\u540C\u804C\u8D23\u5206\u4E3A:UI\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6</li></ul><h3 id="_4-2-\u7C7B\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-2-\u7C7B\u7EC4\u4EF6" aria-hidden="true">#</a> 4.2 \u7C7B\u7EC4\u4EF6</h3><h4 id="_4-2-1-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u5B9A\u4E49" aria-hidden="true">#</a> 4.2.1 \u5B9A\u4E49</h4><ul><li>\u7EC4\u4EF6\u7684\u540D\u79F0\u662F\u5927\u5199\u5B57\u7B26\u5F00\u5934(\u65E0\u8BBA\u7C7B\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u7EC4\u4EF6).</li><li>\u7C7B\u7EC4\u4EF6\u9700\u8981\u7EE7\u627F\u81EAReact.Component</li><li>\u7C7B\u7EC4\u4EF6\u5FC5\u987B\u5B9E\u73B0render\u51FD\u6570</li><li>constructor\u662F\u53EF\u9009\u7684,\u6211\u4EEC\u901A\u5E38\u5728constructor\u4E2D\u521D\u59CB\u5316\u4E00\u4E9B\u6570\u636E</li><li>this.state\u4E2D\u7EF4\u62A4\u7684\u5C31\u662F\u6211\u4EEC\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E</li><li>render()\u65B9\u6CD5\u662Fclass\u7EC4\u4EF6\u4E2D\u552F\u4E00\u5FC5\u987B\u5B9E\u73B0\u7684\u65B9\u6CD5</li></ul><h4 id="_4-2-2-\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> 4.2.2 \u6267\u884C\u6D41\u7A0B</h4><ol><li>React\u89E3\u6790\u7EC4\u4EF6\u6807\u7B7E,\u627E\u5230\u4E86MyComponent\u7EC4\u4EF6</li><li>\u53D1\u73B0\u7EC4\u4EF6\u662F\u4F7F\u7528\u7C7B\u5B9A\u4E49\u7684.\u968F\u540Enew\u51FA\u6765\u8BE5\u7C7B\u7684\u5B9E\u4F8B,\u5E76\u901A\u8FC7\u8BE5\u5B9E\u4F8B\u8C03\u7528\u5230\u539F\u578B\u4E0A\u7684render\u65B9\u6CD5</li><li>\u5C06render\u8FD4\u56DE\u7684\u865A\u62DFDOM\u8F6C\u4E3A\u771F\u5B9EDOM,\u968F\u540E\u5448\u73B0\u5728\u9875\u9762\u4E0A.</li></ol><h4 id="_4-2-3-\u4EE3\u7801\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u4EE3\u7801\u6848\u4F8B" aria-hidden="true">#</a> 4.2.3 \u4EE3\u7801\u6848\u4F8B</h4><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// Fragment \u7C7B\u4F3C\u5C0F\u7A0B\u5E8F\u7684block \u5360\u4F4D\u7EC4\u4EF6
import React, { Component, Fragment } from &#39;react&#39;;

// \u5F15\u5165\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6
import TodoItem from &quot;./TodoItem&quot;;

// \u53EF\u4EE5\u5F15\u5165css\u6587\u4EF6
import &#39;./style.css&#39;;

class TodoList extends Component {

    // \u6784\u9020\u51FD\u6570,\u5728\u7EC4\u4EF6\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u65F6\u523B\u81EA\u52A8\u6267\u884C
    constructor(props) {
        // \u56FA\u5B9A\u5199\u6CD5,constructor\u4F1A\u63A5\u53D7\u4F20\u8FC7\u6765\u7684\u53C2\u6570,\u5E76\u628A\u5B83\u4F20\u9012\u7ED9\u7236\u7C7B\u7684Component
        super(props);

        // \u8FD9\u91CC\u7684bind\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u65B9\u6CD5,\u5E76\u4E14\u7ED1\u5B9Athis
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);

        // \u5B9A\u4E49\u7EC4\u4EF6\u7684\u6570\u636E,\u5FC5\u987B\u5199\u5230this.state\u4E2D\u53BB
        this.state = {
            inputValue: &#39;&#39;,
            list: []
        }

        // \u8DEF\u7531\u4F20\u9012\u8FC7\u6765\u7684\u503C
        console.log(this.props.match.params.id,&quot;\u8DEF\u7531\u4F20\u503C&quot;);
    }

    // \u5B9A\u4E49\u4E00\u4E2A\u54CD\u5E94\u8F93\u5165\u6846\u53D8\u5316\u7684\u51FD\u6570
    handleInputChange(e) {
        // \u5982\u679C\u8981\u53BB\u6539\u53D8state\u91CC\u7684\u503C,\u4E0D\u80FD\u76F4\u63A5\u53BB\u6539\u53D8,\u9700\u8981\u8C03\u7528setState\u53BB\u4FEE\u6539
        this.setState({
            inputValue: e.target.value
        })
    }

    // \u5B9A\u4E49\u4E00\u4E2A\u54CD\u5E94\u8F93\u5165\u6846\u7684\u51FD\u6570
    handleKeyUp(e) {
        if (e.keyCode === 13 &amp;&amp; e.target.value !== &#39;&#39;) {
            // \u62F7\u8D1D\u4E86\u4E00\u4EFDlist,\u5E76\u6DFB\u52A0\u65B0\u8F93\u5165\u7684
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,
                inputValue: &#39;&#39;
            })
        }
    }

    // \u5B9A\u4E49\u4E00\u4E2A\u70B9\u51FBlist\u67D0\u9879
    handleItemClick(index) {
        // \u4E00\u822C\u4FEE\u6539state\u4E2D\u53D8\u91CF\u65F6,\u5148\u53BB\u590D\u5236\u51FA\u4E00\u4EFD\u6765
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }

    // \u628A\u5FAA\u73AF\u5B9A\u4E49\u6210\u4E00\u4E2A\u65B9\u6CD5
    getListItems() {
        /* \u5728jsx\u4E2D\u4F7F\u7528map\u6765\u505A\u5FAA\u73AF,\u5E76\u4E14\u9700\u8981\u5199\u5230{}\u4E2D */ 
        /* \u5B83\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570,\u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u503C,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u952E */
        /* \u51FD\u6570\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2Ajsx\u8BED\u53E5 */
        /* \u5FAA\u73AF\u8FD4\u56DE\u7684\u5185\u5BB9,\u5FC5\u987B\u6709\u4E2A\u6709\u552F\u4E00\u503C\u7684key\u5C5E\u6027 \u8FD9\u6837\u6027\u80FD\u66F4\u9AD8 */
        return this.state.list.map((value, index) =&gt; {
            return (
                // \u5728this\u4E4B\u540E\u7684 \u53EF\u4EE5\u7ED9\u54CD\u5E94\u51FD\u6570\u4F20\u53C2
                // &lt;li
                //     key={index}
                //     onClick={this.handleItemClick.bind(this, index)}
                // &gt;
                //     {value}
                // &lt;/li&gt;

                // \u8FD9\u91CC\u6362\u6210\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6  \u7236\u7EC4\u4EF6\u901A\u8FC7\u5C5E\u6027\u7684\u65B9\u5F0F\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C
                // \u4E5F\u53EF\u4EE5\u5427\u51FD\u6570\u4F20\u9012\u8FC7\u53BB,\u4F9B\u5B50\u7EC4\u4EF6\u53BB\u8C03\u7528
                // index\u662F\u4E3A\u4E86\u6807\u8BC6\u8981\u5220\u9664\u54EA\u4E2Aitem
                &lt;TodoItem 
                    key={index}
                    content={value} 
                    index={index}
                    deleteFunction={this.handleItemClick}
                /&gt;
            )
        })
    }


    /*
    ** render\u51FD\u6570 
    ** \u5F53\u7EC4\u4EF6\u521D\u6B21\u521B\u5EFA\u7684\u65F6\u5019,render\u51FD\u6570\u4F1A\u88AB\u6267\u884C\u4E00\u6B21
    ** \u5F53state\u7684\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019,render\u5C31\u4F1A\u88AB\u91CD\u65B0\u6267\u884C
    ** \u5F53props\u6570\u636E\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019,render\u4E5F\u4F1A\u88AB\u91CD\u65B0\u6267\u884C
    */
    render() {
        console.log(&quot;TodoList Render&quot;);
        // return \u8FD4\u56DE\u7684\u662F\u4E00\u4E2Ajsx\u8BED\u6CD5\u7684,\u5916\u9762\u7684\u662Fjs
        // jsx\u7684\u6CE8\u91CA\u8981\u5916\u9762\u52A0\u4E0A{}
        return (
            &lt;Fragment&gt;
                {/* lalel\u6807\u7B7E\u7684for\u4F7F\u7528htmlFor\u53BB\u4EE3\u66FF */}
                &lt;label htmlFor=&#39;myInput&#39;&gt;&lt;span&gt;\u8BF7\u8F93\u5165\u5185\u5BB9 : &lt;/span&gt;&lt;/label&gt;

                {/* value\u7684\u5C5E\u6027\u503C\u548C\u65B9\u6CD5\u7528{}\u5305\u88F9 */}
                {/* \u4E8B\u4EF6onChange\u7684C\u8981\u5927\u5199 */}
                {/* \u901A\u8FC7bind\u7684\u65B9\u5F0F\u53BBhandleInputChange\u7684this\u7ED1\u5B9A\u4E3A\u5F53\u524D\u7684this */}
                {/* jsx\u8981\u6C42\u4F7F\u7528\u4E00\u4E2A\u6837\u5F0F\u7684\u65F6\u5019,\u4E0D\u5728\u4F7F\u7528class,\u4F7F\u7528className */}
                &lt;input
                    id=&#39;myInput&#39;
                    className=&quot;input&quot;
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                /&gt;
                &lt;ul&gt;
                    {this.getListItems()}
                &lt;/ul&gt;
            &lt;/Fragment&gt;
        )
    }
}

export default TodoList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u51FD\u6570\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-3-\u51FD\u6570\u7EC4\u4EF6" aria-hidden="true">#</a> 4.3 \u51FD\u6570\u7EC4\u4EF6</h3><h4 id="_4-3-1-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u5B9A\u4E49" aria-hidden="true">#</a> 4.3.1 \u5B9A\u4E49</h4><ul><li>\u51FD\u6570\u7EC4\u4EF6\u662F\u4F7F\u7528function\u6765\u8FDB\u884C\u5B9A\u4E49\u7684\u51FD\u6570,\u53EA\u662F\u8FD9\u4E2A\u51FD\u6570\u4F1A\u8FD4\u56DE\u548C\u7C7B\u7EC4\u4EF6\u4E2Drender\u51FD\u6570\u8FD4\u56DE\u4E00\u6837\u7684\u5185\u5BB9</li><li>\u6CA1\u6709\u58F0\u660E\u5468\u671F,\u4E5F\u4F1A\u88AB\u66F4\u65B0\u5E76\u6302\u8F7D,\u4F46\u662F\u6CA1\u6709\u751F\u547D\u5468\u671F\u51FD\u6570</li><li>\u6CA1\u6709this(\u7EC4\u4EF6\u5B9E\u4F8B)</li><li>\u6CA1\u6709\u5185\u90E8\u72B6\u6001(state)</li></ul><h4 id="_4-3-2-\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> 4.3.2 \u6267\u884C\u6D41\u7A0B</h4><ol><li>React\u89E3\u6790\u7EC4\u4EF6\u6807\u7B7E,\u627E\u5230\u4E86MyComponent\u7EC4\u4EF6</li><li>\u53D1\u73B0\u7EC4\u4EF6\u662F\u4F7F\u7528\u51FD\u6570\u5B9A\u4E49\u7684,\u968F\u540E\u8C03\u7528\u8BE5\u51FD\u6570,\u5C06\u8FD4\u56DE\u7684\u865A\u62DFDOM\u8F6C\u4E3A\u771F\u5B9EDOM,\u968F\u540E\u5448\u73B0\u5728\u9875\u9762\u4E2D</li></ol><h4 id="_4-3-3-\u4EE3\u7801\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_4-3-3-\u4EE3\u7801\u6848\u4F8B" aria-hidden="true">#</a> 4.3.3 \u4EE3\u7801\u6848\u4F8B</h4><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// UI\u7EC4\u4EF6, \u8D1F\u8D23\u9875\u9762\u7684\u6E32\u67D3
// \u5BB9\u5668\u7EC4\u4EF6, \u8D1F\u8D23\u9875\u9762\u7684\u903B\u8F91

import React from &quot;react&quot;;

import { Input, Button, List } from &#39;antd&#39;;

/*
** \u65E0\u72B6\u6001\u7EC4\u4EF6
** \u5C31\u662F\u4E00\u4E2A\u51FD\u6570 (\u53EA\u6709\u4E00\u4E2Arender)
**  
*/
const NewTodoListUI = (props)=&gt; {
    return (
        &lt;div&gt;
        &lt;Input
            value={props.inputValue}
            placeholder=&quot;todo info&quot;
            style={{ width: &#39;200px&#39; }}
            onChange={props.handleInputChange}
        /&gt;
        &lt;Button onClick={props.handleBtnClick}&gt;\u63D0\u4EA4&lt;/Button&gt;
        &lt;List
            bordered
            dataSource={props.list}
            renderItem={(item,index) =&gt; (&lt;List.Item onClick={()=&gt;{props.handleItemDelete(index)}}&gt;{item}&lt;/List.Item&gt;)}
        /&gt;
    &lt;/div&gt;  
    )
}


export default NewTodoListUI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_4-4-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 4.4 \u751F\u547D\u5468\u671F</h3><h4 id="_4-4-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_4-4-1-\u6982\u8FF0" aria-hidden="true">#</a> 4.4.1 \u6982\u8FF0</h4><p>\u200B React\u751F\u547D\u5468\u671F\u51FD\u6570,\u6307\u7684\u662F\u7EC4\u4EF6\u5728\u67D0\u4E00\u4E2A\u65F6\u523B\u4F1A\u81EA\u52A8\u6267\u884C\u7684\u51FD\u6570</p><h4 id="_4-4-2-\u65E7\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_4-4-2-\u65E7\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 4.4.2 \u65E7\u7684\u751F\u547D\u5468\u671F</h4><ul><li>\u6302\u8F7D(Mount):\u7EC4\u4EF6\u7B2C\u4E00\u4E2A\u5728DOM\u6811\u4E2D\u88AB\u6E32\u67D3\u7684\u8FC7\u7A0B:constructor\u6267\u884C -&gt; componentWillMount\u6267\u884C -&gt; render\u6267\u884C -&gt; componentDidMount\u6267\u884C</li><li>\u66F4\u65B0(Updation): \u7EC4\u4EF6\u72B6\u6001\u53D1\u751F\u53D8\u5316,\u91CD\u65B0\u66F4\u65B0\u6E32\u67D3\u7684\u8FC7\u7A0B <ul><li>props\u53D1\u751F\u53D8\u5316: componentWillReceiveProps -&gt; shouldComponentUpdate -&gt; componentWillUpdate -&gt; render -&gt; componentDidUpdate</li><li>state\u53D1\u751F\u53D8\u5316: shouldComponentUpdate -&gt; componentWillUpdate -&gt; render -&gt; componentDidUpdate</li></ul></li><li>\u5378\u8F7D(Unmount):componentWillUnmount</li></ul><h4 id="_4-4-3-\u65B0\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_4-4-3-\u65B0\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 4.4.3 \u65B0\u7684\u751F\u547D\u5468\u671F</h4><ul><li>\u6302\u8F7D(Mount): constructor() -&gt; getDerivedStateFromProps() -&gt; render() -&gt; componentDidMount()</li><li>\u66F4\u65B0(Updation): getDerivedStateFromProps() -&gt; shouldComponentUpdate() -&gt; render() -&gt; getSnapshotBeforeUpdate() -&gt; componentDidUpdate()</li><li>\u5378\u8F7D(UnMount): componentWillUnmount()</li></ul><h4 id="_4-4-4-\u91CD\u8981\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_4-4-4-\u91CD\u8981\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 4.4.4 \u91CD\u8981\u7684\u751F\u547D\u5468\u671F</h4><ul><li>render: \u521D\u59CB\u5316\u6E32\u67D3\u6216\u8005\u66F4\u65B0\u6E32\u67D3\u8C03\u7528</li><li>componentDidMount: \u505A\u4E00\u4E9B\u521D\u59CB\u5316\u7684\u4E8B\u60C5,\u5982:\u5F00\u542F\u5B9A\u65F6\u5668,\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42,\u8BA2\u9605\u6D88\u606F\u7B49</li><li>componentWillUnmount: \u505A\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C,\u5982:\u6E05\u7406\u5B9A\u65F6\u5668</li></ul><h3 id="_4-5-\u7EC4\u4EF6\u7684\u4E09\u5927\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-5-\u7EC4\u4EF6\u7684\u4E09\u5927\u5C5E\u6027" aria-hidden="true">#</a> 4.5 \u7EC4\u4EF6\u7684\u4E09\u5927\u5C5E\u6027</h3><h4 id="_4-5-1-state-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-5-1-state-\u5C5E\u6027" aria-hidden="true">#</a> 4.5.1 state \u5C5E\u6027</h4><ul><li>state\u662F\u7EC4\u4EF6\u5BF9\u8C61\u6700\u91CD\u8981\u7684\u5C5E\u6027,\u503C\u662F\u5BF9\u8C61(\u53EF\u4EE5\u5305\u542B\u591A\u4E2Akey:value\u7684\u7EC4\u5408)</li><li>\u7EC4\u4EF6\u88AB\u79F0\u4E3A<code>\u72B6\u6001\u673A</code>,\u901A\u8FC7\u66F4\u65B0\u7EC4\u4EF6\u7684state\u6765\u66F4\u65B0\u5BF9\u5E94\u7684\u9875\u9762\u663E\u793A(\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6)</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>//1.\u521B\u5EFA\u7EC4\u4EF6
class Weather extends React.Component {
    constructor(props) {
        super(props);
        // \u521D\u59CB\u5316\u72B6\u6001
        this.state = {
            isHot: false,
            wind: &#39;\u5FAE\u98CE&#39;
        }
        // \u89E3\u51B3handleChangeWeather\u7684this\u6307\u5411\u95EE\u9898
        this.handleChangeWeather = this.handleChangeWeather.bind(this);
    }
    // render\u8C03\u7528\u4E86 1 + n \u6B21 ,1 \u662F\u521D\u59CB\u5316\u7684\u90A3\u6B21,n\u662F\u72B6\u6001\u66F4\u65B0\u7684\u6B21\u6570
    render() {
        // \u8BFB\u53D6\u72B6\u6001
        const {isHot, wind} = this.state;
        return (
            &lt;h1 onClick={this.handleChangeWeather}&gt;\u4ECA\u5929\u7684\u5929\u6C14\u5F88{isHot ? &#39;\u708E\u70ED&#39;: &#39;\u51C9\u723D&#39;}.{wind}&lt;/h1&gt;
        );
    }
    
    // handleChangeWeather \u51FD\u6570
    handleChangeWeather() {
        const isHot = this.state.isHot;
        // \u4E25\u91CD\u6CE8\u610F\uFF1A\u72B6\u6001\u5FC5\u987B\u901A\u8FC7setState\u8FDB\u884C\u66F4\u65B0,\u4E14\u66F4\u65B0\u662F\u4E00\u79CD\u5408\u5E76\uFF0C\u4E0D\u662F\u66FF\u6362\u3002
        this.setState({isHot:!isHot})
        // \u4E25\u91CD\u6CE8\u610F\uFF1A\u72B6\u6001(state)\u4E0D\u53EF\u76F4\u63A5\u66F4\u6539\uFF0C\u4E0B\u9762\u8FD9\u884C\u5C31\u662F\u76F4\u63A5\u66F4\u6539\uFF01\uFF01\uFF01
        // this.state.isHot = !isHot //\u8FD9\u662F\u9519\u8BEF\u7684\u5199\u6CD5
    }
}

//2.\u6E32\u67D3\u7EC4\u4EF6\u5230\u9875\u9762
ReactDOM.render(&lt;Weather/&gt;,document.getElementById(&#39;test&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u7B80\u5316
class Weather extends React.Component {
    // \u521D\u59CB\u5316\u72B6\u6001
    state = {
        isHot: false,
        wind: &#39;\u5FAE\u98CE&#39;
    }
		render() {
				const {isHot,wind} = this.state
        return &lt;h1 onClick={this.handleChangeWeather}&gt;\u4ECA\u5929\u5929\u6C14\u5F88{isHot ? &#39;\u708E\u70ED&#39; : &#39;\u51C9\u723D&#39;}\uFF0C{wind}&lt;/h1&gt;
    }
		// \u81EA\u5B9A\u4E49\u65B9\u6CD5 \u4F7F\u7528\u8D4B\u503C\u8BED\u53E5+\u7BAD\u5934\u51FD\u6570
		handleChangeWeather = () =&gt; {
        const isHot = this.state.isHot
        this.setState({isHot:!isHot})
    }
}
ReactDOM.render(&lt;Weather/&gt;,document.getElementById(&#39;test&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-2-props-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-5-2-props-\u5C5E\u6027" aria-hidden="true">#</a> 4.5.2 props \u5C5E\u6027</h4><ul><li>\u6BCF\u4E2A\u7EC4\u4EF6\u5BF9\u8C61\u90FD\u4F1A\u6709props\u5C5E\u6027,\u7EC4\u4EF6\u6807\u7B7E\u7684\u6240\u6709\u5C5E\u6027\u90FD\u4FDD\u5B58\u5728props\u4E2D</li><li>\u4F5C\u7528:\u901A\u8FC7\u6807\u7B7E\u5C5E\u6027\u4ECE\u7EC4\u4EF6\u5916\u5411\u7EC4\u4EF6\u5185\u4F20\u9012\u53D8\u5316\u7684\u6570\u636E</li><li>\u6CE8\u610F:\u7EC4\u4EF6\u5185\u90E8\u4E0D\u8981\u4FEE\u6539props\u6570\u636E</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u7C7B\u7EC4\u4EF6\u4F7F\u7528props
class Person extends Component {
    render() {
        const {name, age, sex} = this.props;
        return (
        	&lt;ul&gt;
                &lt;li&gt;\u59D3\u540D:{name}&lt;/li&gt;
                &lt;li&gt;\u6027\u522B:{sex}&lt;/li&gt;
                &lt;li&gt;\u5E74\u9F84:{age}&lt;/li&gt;
            &lt;/ul&gt;
        );
    }
}

// \u6E32\u67D3\u7EC4\u4EF6\u5230\u9875\u9762\u4E0A
ReactDOM.reader(&lt;Person name=&quot;jerry&quot; age={19} sex=&quot;\u7537&quot; /&gt;,document,getElementById(&#39;test&#39;));

// \u89E3\u6784\u8D4B\u503C\u7684\u65B9\u5F0F
const p = {name: &#39;zzz&#39;, age = 19, sex=&#39;\u5973&#39;};
ReactDOM.reader(&lt;Person {...p} /&gt;,document,getElementById(&#39;test&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u51FD\u6570\u4F7F\u7528props
function Person (props) {
    const {name, age, sex} = props;
    return (
        &lt;ul&gt;
            &lt;li&gt;\u59D3\u540D\uFF1A{name}&lt;/li&gt;
            &lt;li&gt;\u6027\u522B\uFF1A{sex}&lt;/li&gt;
            &lt;li&gt;\u5E74\u9F84\uFF1A{age}&lt;/li&gt;
        &lt;/ul&gt;
    )
}

//\u6B64\u5904\u9650\u5236\u53EF\u4EE5\u6362\u6210typrScript
Person.propTypes = {
    name:PropTypes.string.isRequired, //\u9650\u5236name\u5FC5\u4F20\uFF0C\u4E14\u4E3A\u5B57\u7B26\u4E32
    sex:PropTypes.string,//\u9650\u5236sex\u4E3A\u5B57\u7B26\u4E32
    age:PropTypes.number,//\u9650\u5236age\u4E3A\u6570\u503C
}
//\u6307\u5B9A\u9ED8\u8BA4\u6807\u7B7E\u5C5E\u6027\u503C
Person.defaultProps = {
    sex:&#39;\u7537&#39;,//sex\u9ED8\u8BA4\u503C\u4E3A\u7537
    age:18 //age\u9ED8\u8BA4\u503C\u4E3A18
}
//\u6E32\u67D3\u7EC4\u4EF6\u5230\u9875\u9762
ReactDOM.render(&lt;Person name=&quot;jerry&quot;/&gt;,document.getElementById(&#39;test1&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-3-refs" tabindex="-1"><a class="header-anchor" href="#_4-5-3-refs" aria-hidden="true">#</a> 4.5.3 refs</h4><ul><li>\u7EC4\u4EF6\u5185\u7684\u6807\u7B7E\u53EF\u4EE5\u5B9A\u4E49ref\u6765\u6807\u8BC6\u81EA\u5DF1</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u5B57\u7B26\u4E32\u5F62\u5F0F\u7684ref \u4E0D\u63A8\u8350,\u5C06\u88AB\u6DD8\u6C70
showData = ()=&gt;{
    const {input1} = this.refs
    alert(input1.value)
}
//\u5C55\u793A\u53F3\u4FA7\u8F93\u5165\u6846\u7684\u6570\u636E
showData2 = ()=&gt;{
    const {input2} = this.refs
    alert(input2.value)
}

render(){
    return(
        &lt;div&gt;
            &lt;input ref=&quot;input1&quot; type=&quot;text&quot; placeholder=&quot;\u70B9\u51FB\u6309\u94AE\u63D0\u793A\u6570\u636E&quot;/&gt;&amp;nbsp;
            &lt;button onClick={this.showData}&gt;\u70B9\u6211\u63D0\u793A\u5DE6\u4FA7\u7684\u6570\u636E&lt;/button&gt;&amp;nbsp;
            &lt;input ref=&quot;input2&quot; onBlur={this.showData2} type=&quot;text&quot; placeholder=&quot;\u5931\u53BB\u7126\u70B9\u63D0\u793A\u6570\u636E&quot;/&gt;
        &lt;/div&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u56DE\u8C03\u5F62\u5F0F\u7684ref
showData = ()=&gt;{
    const {input1} = this
    alert(input1.value)
}
//\u5C55\u793A\u53F3\u4FA7\u8F93\u5165\u6846\u7684\u6570\u636E
showData2 = ()=&gt;{
    const {input2} = this
    alert(input2.value)
}
render(){
    return(
        &lt;div&gt;
            &lt;input ref={c =&gt; this.input1 = c } type=&quot;text&quot; placeholder=&quot;\u70B9\u51FB\u6309\u94AE\u63D0\u793A\u6570\u636E&quot;/&gt;&amp;nbsp;
            &lt;button onClick={this.showData}&gt;\u70B9\u6211\u63D0\u793A\u5DE6\u4FA7\u7684\u6570\u636E&lt;/button&gt;&amp;nbsp;
            &lt;input onBlur={this.showData2} ref={c =&gt; this.input2 = c } type=&quot;text&quot; placeholder=&quot;\u5931\u53BB\u7126\u70B9\u63D0\u793A\u6570\u636E&quot;/&gt;&amp;nbsp;
        &lt;/div&gt;
    )
}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// createRef\u521B\u5EFAref\u5BB9\u5668 \u6700\u63A8\u8350
// React.createRef\u8C03\u7528\u540E\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BB9\u5668\uFF0C\u8BE5\u5BB9\u5668\u53EF\u4EE5\u5B58\u50A8\u88ABref\u6240\u6807\u8BC6\u7684\u8282\u70B9,\u8BE5\u5BB9\u5668\u662F\u201C\u4E13\u4EBA\u4E13\u7528\u201D\u7684
myRef = React.createRef()
myRef2 = React.createRef()
//\u5C55\u793A\u5DE6\u4FA7\u8F93\u5165\u6846\u7684\u6570\u636E
showData = ()=&gt;{
	alert(this.myRef.current.value);
}
//\u5C55\u793A\u53F3\u4FA7\u8F93\u5165\u6846\u7684\u6570\u636E
showData2 = ()=&gt;{
	alert(this.myRef2.current.value);
}
render(){
	return(
		&lt;div&gt;
			&lt;input ref={this.myRef} type=&quot;text&quot; placeholder=&quot;\u70B9\u51FB\u6309\u94AE\u63D0\u793A\u6570\u636E&quot;/&gt;&amp;nbsp;
			&lt;button onClick={this.showData}&gt;\u70B9\u6211\u63D0\u793A\u5DE6\u4FA7\u7684\u6570\u636E&lt;/button&gt;&amp;nbsp;
			&lt;input onBlur={this.showData2} ref={this.myRef2} type=&quot;text&quot; placeholder=&quot;\u5931\u53BB\u7126\u70B9\u63D0\u793A\u6570\u636E&quot;/&gt;&amp;nbsp;
		&lt;/div&gt;
	)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u4E94\u3001\u7EC4\u4EF6\u901A\u4FE1</h2><h3 id="_5-1-\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> 5.1 \u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</h3><h4 id="_5-1-1-\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#_5-1-1-\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C" aria-hidden="true">#</a> 5.1.1 \u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C</h4><ul><li>\u7236\u7EC4\u4EF6\u901A\u8FC7<strong>\u5C5E\u6027=\u503C</strong>\u7684\u5F62\u5F0F\u6765\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u6570\u636E</li><li>\u5B50\u7EC4\u4EF6\u901A\u8FC7<strong>props\u53C2\u6570</strong>\u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u7C7B\u7EC4\u4EF6

import React, { Component } from &#39;react&#39;;
// \u7C7B\u5B50\u7EC4\u4EF6
class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age, height } = this.props;
        
        return (
            &lt;div&gt;
            	&lt;h2&gt;\u6211\u662Fclass\u7684\u7EC4\u4EF6&lt;/h2&gt;
                &lt;p&gt;\u5C55\u793A\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:{name + &quot;&quot; + age + height}&lt;/p&gt;
            &lt;/div&gt;
        );
    }
}

export default class App extends Component {
    render() {
        return (
        	&lt;div&gt;
          		&lt;ChildComponent name=&#39;zzz&#39; age=&#39;18&#39; height=&#39;1.88&#39; /&gt;
          &lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u51FD\u6570\u7EC4\u4EF6

function ChildComponent(props) {
    const { name, age, height } = props;
    
    return (
    	&lt;div&gt;
        	&lt;h2&gt;\u6211\u662Ffunction\u7684\u7EC4\u4EF6&lt;/h2&gt;
      		&lt;p&gt;\u5C55\u793A\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E:{name + &quot;&quot; + age + height}&lt;/p&gt;
      &lt;/div&gt;
    )
}

export default class App extends Component {
    render() {
        return (
        	&lt;div&gt;
          		&lt;ChildComponent name=&#39;zzz&#39; age=&#39;18&#39; height=&#39;1.88&#39; /&gt;
          &lt;/div&gt;
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-2-proptypes-defaultprops" tabindex="-1"><a class="header-anchor" href="#_5-1-2-proptypes-defaultprops" aria-hidden="true">#</a> 5.1.2 propTypes&amp;defaultProps</h4><ul><li>\u5BF9\u4E8E\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u7684\u6570\u636E,\u6709\u65F6\u5019\u6211\u4EEC\u53EF\u80FD\u5E0C\u671B\u8FDB\u884C\u9A8C\u8BC1,\u4F7F\u7528propTypes\u8FDB\u884C\u6821\u9A8C</li><li>\u5982\u679C\u6CA1\u6709\u4F20\u9012,\u9700\u8981\u4E00\u4E2A\u9ED8\u8BA4\u503C,\u53EF\u4EE5\u4F7F\u7528defaultprops</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>childComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
}
childComponent.defaultProps = {
    name: &#39;zzz&#39;,
    age: 18,
    height: 100
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-3-\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#_5-1-3-\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012" aria-hidden="true">#</a> 5.1.3 \u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u9012</h4><ul><li>\u5728Vue\u4E2D\u901A\u8FC7\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u6765\u5B8C\u6210</li><li>\u5728React\u4E2D\u540C\u6837\u662F\u901A\u8FC7props\u4F20\u9012\u6D88\u606F,\u53EA\u662F\u8BA9\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570,\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570.</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u5B50\u7EC4\u4EF6
class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { parent } = this.props;
        return (
	        &lt;div&gt;
                &lt;div onClick={()=&gt;{parent(1)}}&gt;\u5B50\u7EC4\u4EF6\u663E\u793A\u7684\u5185\u5BB9:1&lt;/div&gt;
                &lt;div onClick={()=&gt;{parent(2)}}&gt;\u5B50\u7EC4\u4EF6\u663E\u793A\u7684\u5185\u5BB9:2&lt;/div&gt;
                &lt;div onClick={()=&gt;{parent(3)}}&gt;\u5B50\u7EC4\u4EF6\u663E\u793A\u7684\u5185\u5BB9:3&lt;/div&gt;
            &lt;/div&gt;
        )
    }
}

// \u7236\u7EC4\u4EF6
class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    
    getChildMsg = (msg)=&gt;{
        console.log(msg);
        this.setState({
            count: msg
        })
    }
    
    render() {
        // \u8FD9\u91CC \u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u503C,\u7236\u7EC4\u4EF6\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570,\u5E76\u901A\u8FC7props\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6
        return (
            &lt;div&gt;
                &lt;div&gt;\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u503C: { this.state.count }&lt;/div&gt;
                &lt;Child parent={this.getChildMsg} /&gt;
            &lt;/div&gt;
        )
    }
}

ReactDOM.render(&lt;Father /&gt;, document.getElementById(&quot;test&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u516D\u3001\u9AD8\u9636\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u9AD8\u9636\u7EC4\u4EF6" aria-hidden="true">#</a> \u516D\u3001\u9AD8\u9636\u7EC4\u4EF6</h2><h3 id="_6-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_6-1-\u6982\u5FF5" aria-hidden="true">#</a> 6.1 \u6982\u5FF5</h3><ul><li>\u9AD8\u9636\u7EC4\u4EF6\u672C\u4E8B\u4E0D\u662F\u4E00\u4E2A\u7EC4\u4EF6,\u662F\u4E00\u4E2A\u51FD\u6570,\u8FD9\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u7EC4\u4EF6,\u8FD4\u56DE\u503C\u4E5F\u662F\u4E00\u4E2A\u7EC4\u4EF6</li><li>\u9AD8\u9636\u7EC4\u4EF6\u5E76\u4E0D\u662FReact API\u7684\u4E00\u90E8\u5206,\u5B83\u662F\u57FA\u4E8EReact\u7684\u7EC4\u5408\u7279\u6027\u800C\u5F62\u6210\u7684\u8BBE\u8BA1\u6A21\u5F0F</li><li>\u5728ES6\u4E2D,\u7C7B\u8868\u8FBE\u5F0F\u4E2D\u7C7B\u540D\u662F\u53EF\u4EE5\u7701\u7565\u7684,\u7EC4\u4EF6\u7684\u540D\u79F0\u90FD\u53EF\u4EE5\u901A\u8FC7displayName\u6765\u4FEE\u6539</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> EnhanceComponent <span class="token operator">=</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span><span class="token parameter">WrappedComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">NewComponent</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrappedComponent <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    NewComponent<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">&quot;zzz&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> NewComponent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E03\u3001redux" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001redux" aria-hidden="true">#</a> \u4E03\u3001Redux</h2><h3 id="_7-1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_7-1-\u6982\u8FF0" aria-hidden="true">#</a> 7.1 \u6982\u8FF0</h3><ul><li>Javascript\u9700\u8981\u7BA1\u7406\u7684\u72B6\u6001\u8D8A\u6765\u8D8A\u591A\uFF0C\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u8FD9\u4E9B\u72B6\u6001\u5305\u62EC\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u6570\u636E\u3001\u7F13\u5B58\u6570\u636E\u3001\u7528\u6237\u64CD\u4F5C\u4EA7\u751F\u7684\u6570\u636E\u7B49\u7B49\uFF0C\u4E5F\u5305\u62EC\u4E00\u4E9BUI\u7684\u72B6\u6001\u3002</li><li>redux\u662F\u4E00\u4E2A\u4E13\u95E8\u7528\u4E8E\u505A<code>\u72B6\u6001\u7BA1\u7406\u7684JS\u5E93</code>(\u4E0D\u662Freact\u63D2\u4EF6\u5E93)\u3002</li><li>\u4F5C\u7528: \u96C6\u4E2D\u5F0F\u7BA1\u7406react\u5E94\u7528\u4E2D\u591A\u4E2A\u7EC4\u4EF6\u5171\u4EAB\u7684\u72B6\u6001\u3002</li></ul><h3 id="_7-2-\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_7-2-\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 7.2 \u5DE5\u4F5C\u6D41\u7A0B</h3><p><img src="https://gcore.jsdelivr.net/gh/easydeleroy/imgHosting@main/ios/image-20211216203441632.png" alt="image-20211216203441632" loading="lazy"></p><p><img src="https://gcore.jsdelivr.net/gh/easydeleroy/imgHosting@main/ios/image-20211216203352660.png" alt="image-20211216203352660" loading="lazy"></p><p>\u200B \u573A\u666F\u6F14\u793A: <code>React Components</code>:\u501F\u4E66\u8005;<code>Action Creators</code> :\u501F\u4EC0\u4E48\u4E66;<code>Store</code>:\u56FE\u4E66\u7BA1\u7406\u5458;<code>Reducers</code>:\u4E66\u7C4D\u8BB0\u5F55\u672C; \u501F\u4E66\u8005(<code>React Components</code>)\u5BF9\u56FE\u4E66\u7BA1\u7406\u5458(<code>Store</code>)\u8BF4,\u501F\u4E00\u672C\u300AWeb\u5165\u95E8\u300B(<code>Action Creators</code>),\u7BA1\u7406\u5458(<code>Store</code>)\u901A\u8FC7\u4E66\u7C4D\u8BB0\u5F55\u672C(<code>Reducers</code>)\u53BB\u627E\u8FD9\u672C\u4E66,\u627E\u5230\u540E\u7ED9\u501F\u4E66\u8005.</p><ul><li>Store: <code>store</code>\u662F\u4FDD\u5B58\u6570\u636E<code>state</code>\u7684\u5730\u65B9,\u53EF\u4EE5\u770B\u4F5C\u662F\u6570\u636E\u6E90\u5BF9\u6570\u636E\u8FDB\u884C\u7EDF\u4E00\u7BA1\u7406,\u6574\u4E2A\u5E94\u7528\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A<code>store</code>,\u6240\u6709\u7EC4\u4EF6\u5747\u53EF\u901A\u8FC7<code>redux</code>\u89C4\u8303\u4E0E<code>store</code>\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u4EA4\u4E92.</li><li>Action: <code>Action</code>\u5C31\u662FJavascript\u666E\u901A\u5BF9\u8C61,action\u4E2D\u5FC5\u987B\u4F7F\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684<code>type</code>\u5B57\u6BB5\u6765\u8868\u793A\u5C06\u8981\u6267\u884C\u7684\u52A8\u4F5C\u540D\u79F0.</li><li>Reducers: action\u53D1\u9001\u7ED9store,\u6839\u636Eaction\u4E2D\u7684type\u6765\u6539\u53D8\u76F8\u5E94\u7684store\u5185\u7684state,\u5C31\u9700\u8981\u901A\u8FC7reducers.reducers\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570,\u5E76\u4E14\u8BB0\u4F4Factions\u53EA\u63CF\u8FF0\u4E86\u6709\u4E8B\u60C5\u53D1\u9001\u4E86\u8FD9\u4E00\u4E8B\u5B9E,\u5E76\u6CA1\u6709\u63CF\u8FF0\u5E94\u7528\u5982\u4F55\u66F4\u65B0state,\u800C\u662F\u7531reducers\u6839\u636Eaction\u5BF9\u8C61\u5185\u7684\u4FE1\u606F\u6765\u6539\u53D8store\u5185\u7684\u6570\u636E.</li></ul><p>\u200B redux\u6D41\u7A0B: \u5F53\u7EC4\u4EF6\u9700\u8981\u6539\u53D8store\u5185\u7684\u6570\u636E\u65F6,\u5C31\u53D1\u9001\u4E00\u4E2Aaction\u7ED9\u5230store,store\u6536\u5230action\u540E\u5C31\u4F1A\u8C03\u7528\u76F8\u5E94\u7684reducers\u51FD\u6570,reducers\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u6765\u4F5C\u4E3A\u65B0\u7684\u6570\u636E\u503C\u56DE\u4F20\u7ED9store,\u4E4B\u540E\u7EC4\u4EF6\u518D\u4ECEstore\u91CC\u9762\u83B7\u53D6\u66F4\u65B0\u540E\u7684\u6570\u636E\u4E86.</p><p>\u200B \u6D41\u7A0B:</p><ul><li>\u5B9A\u4E49action,reducers,store,\u57FA\u7840</li><li>\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165store,\u901A\u8FC7store.subscribe(),\u81EA\u52A8\u76D1\u542Cstore\u5185\u7684\u53D8\u5316</li><li>\u7EC4\u4EF6\u4E2D\u9700\u8981\u6539\u53D8store\u65F6,\u7528store.dispatch(action),\u6267\u884C\u540Ereducers\u4F1A\u81EA\u52A8\u6267\u884C\u76F8\u5E94\u7684\u903B\u8F91\u4FEE\u6539store</li><li>\u7EC4\u4EF6\u4E2D\u83B7\u53D6store,\u4F7F\u7528store.getState()</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// action.js \u5B9A\u4E49action \u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61.</span>
<span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;ADD_TODO&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token string">&#39;redux&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> action<span class="token punctuation">;</span>

<span class="token comment">// reducers.js \u5B9A\u4E49\u4E00\u4E2A\u7EAF\u51FD\u6570,\u7528\u4E8E\u5904\u7406store\u5185\u7684state</span>
<span class="token keyword">const</span> <span class="token function-variable function">reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token parameter">state<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span> <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">ADD_TODO</span><span class="token operator">:</span>
      <span class="token keyword">return</span> newState<span class="token punctuation">;</span>
    <span class="token keyword">default</span> <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> reducer<span class="token punctuation">;</span>

<span class="token comment">// store.js store\u5C31\u662F\u6574\u4E2A\u9879\u76EE\u4FDD\u5B58\u6570\u636E\u7684\u5730\u65B9,\u5E76\u4E14\u53EA\u80FD\u6709\u4E00\u4E2A,\u521B\u5EFAstore\u5C31\u662F\u628Areducer\u7ED9\u4ED6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u628A\u5B9A\u4E49\u7684reducer\u5F15\u5165\u8FDB\u6765</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5168\u5C40\u5C31\u7BA1\u7406\u4E00\u4E2Astore</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>

<span class="token comment">// component.js \u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> action <span class="token keyword">from</span> <span class="token string">&#39;./action&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// reduce\u9700\u8981\u8C03\u7528store.subscribe\u76D1\u542Cstore\u7684\u53D8\u5316,store.getState\u7528\u6765\u83B7\u53D6store\u5185\u7684state</span>
    <span class="token comment">// store.subscribe\u8C03\u7528\u8FD4\u56DE\u7684\u503Cunsubscibe\u5728\u9875\u9762\u5378\u8F7D\u7684\u65F6\u5019\u8C03\u7528,\u76EE\u7684\u662F\u53D6\u6D88\u9875\u9762\u5BF9store\u7684\u76D1\u542C,\u9632\u6B62\u5185\u5B58\u6CC4\u9732</span>
    <span class="token keyword">let</span> unsubscribe <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// store.dispatch\u4F1A\u5411store\u53D1\u9001action,store\u63A5\u6536\u5230action\u540E\u5C31\u4F1A\u81EA\u52A8\u8C03\u7528reducers</span>
    <span class="token comment">// reducers\u6839\u636Eaction\u4E2D\u7684type\u6267\u884C\u76F8\u5E94\u7684\u5904\u7406\u903B\u8F91,\u5E76\u4E14\u8FD4\u56DE\u65B0\u7684state\u7ED9\u5230store</span>
    <span class="token comment">// \u6B64\u65F6store.subscribe()\u5C31\u4F1A\u88AB\u89E6\u53D1,\u901A\u8FC7store.getState()\u5C31\u53EF\u4EE5\u62FF\u5230store\u5185\u7684state\u503C</span>
    store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5176\u5B9E\u5C31\u662F\u4EE5\u4E0B\u4EE3\u7801</span>
   	<span class="token comment">//store.dispatch({</span>
    <span class="token comment">//  type: &#39;ADD_TODO&#39;,</span>
    <span class="token comment">//  payload: &#39;redux&#39;</span>
    <span class="token comment">//})</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>change<span class="token punctuation">}</span><span class="token operator">&gt;</span>test<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-redux\u7684\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_7-3-redux\u7684\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> 7.3 redux\u7684\u6838\u5FC3\u6982\u5FF5</h3><h4 id="_7-3-1-action" tabindex="-1"><a class="header-anchor" href="#_7-3-1-action" aria-hidden="true">#</a> 7.3.1 action</h4><ul><li>\u52A8\u4F5C\u7684\u5BF9\u8C61,\u6240\u6709\u7684\u6570\u636E\u53D8\u5316,\u5FC5\u987B\u901A\u8FC7\u6D3E\u53D1(dispatch)action\u6765\u66F4\u65B0.</li><li>action\u662F\u4E00\u4E2A\u666E\u901A\u7684JavaScript\u5BF9\u8C61,\u5305\u542B\u4E86\u4E24\u4E2A\u5C5E\u6027 <ul><li>type: \u6807\u8BC6\u5C5E\u6027,\u503C\u4E3A\u5B57\u7B26\u4E32,\u552F\u4E00,\u5FC5\u8981\u5C5E\u6027,\u63CF\u8FF0\u5BF9\u72B6\u6001\u8FDB\u884C\u600E\u4E48\u7684\u64CD\u4F5C,\u4E5F\u5C31\u662FAction\u7684\u540D\u79F0.</li><li>data: \u6570\u636E\u5C5E\u6027,\u503C\u7C7B\u578B\u4EFB\u610F,\u53EF\u9009\u5C5E\u6027</li></ul></li><li>\u5F3A\u5236\u4F7F\u7528action\u7684\u597D\u5904\u662F\u53EF\u4EE5\u6E05\u6670\u7684\u77E5\u9053\u6570\u636E\u5230\u5E95\u53D1\u751F\u4E86\u4EC0\u4E48\u6837\u7684\u53D8\u5316,\u6240\u6709\u7684\u6570\u636E\u53D8\u5316\u90FD\u662F\u53EF\u8DDF\u8E2A\u7684.</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> action <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;ADD_FRIEND&quot;</span><span class="token punctuation">,</span>
   	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zzz&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-2-reducer" tabindex="-1"><a class="header-anchor" href="#_7-3-2-reducer" aria-hidden="true">#</a> 7.3.2 reducer</h4><ul><li>\u7528\u4E8E\u521D\u59CB\u5316\u72B6\u6001,\u52A0\u5DE5\u72B6\u6001,\u5C06state\u548Caction\u8054\u7CFB\u8D77\u6765.</li><li>reducer\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570,\u6839\u636E\u65E7\u7684state\u548Caction,\u4EA7\u751F\u65B0\u7684state.</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>const defaultState = {
    inputValue: &#39;11&#39;,
    list: []
}
// reducer \u53EF\u4EE5\u63A5\u53D7state,\u4F46\u662F\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8state
// state \u4EE3\u8868\u5B58\u50A8\u7684\u6240\u6709\u6570\u636E
// action \u6307\u7684\u662F\u7528\u6237\u4F20\u9012\u8FC7\u6765\u7684\u90A3\u53E5\u8BDD
export default (state = defaultState, action)=&gt; {
    if (action.type === CHANGE_INPUT_VALUE) {
        // \u5BF9state\u505A\u4E00\u6B21\u6DF1\u62F7\u8D1D
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = &#39;&#39;;
        return newState; 
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    if (action.type === &#39;change_input_value&#39;) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    
    if (action.type === &#39;add_item&#39;) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = &quot;&quot;;
        return newState;
    }
    return state;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-3-state" tabindex="-1"><a class="header-anchor" href="#_7-3-3-state" aria-hidden="true">#</a> 7.3.3 state</h4><p>\u200B Store\u5BF9\u8C61\u5305\u542B\u6240\u6709\u6570\u636E,\u5982\u679C\u60F3\u5F97\u5230\u67D0\u4E2A\u65F6\u70B9\u7684\u6570\u636E,\u5C31\u8981\u5BF9Store\u751F\u6210\u5FEB\u7167,\u8FD9\u79CD\u65F6\u70B9\u7684\u6570\u636E\u96C6\u5408,\u5C31\u53EB\u505AState.Redux\u89C4\u5B9A,\u4E00\u4E2AState\u5BF9\u5E94\u4E00\u4E2AView.</p><h4 id="_7-3-4-store" tabindex="-1"><a class="header-anchor" href="#_7-3-4-store" aria-hidden="true">#</a> 7.3.4 store</h4><ul><li>\u5C06state\u3001action\u3001reducer\u8054\u7CFB\u5728\u4E00\u8D77\u7684\u5BF9\u8C61,\u5C31\u662F\u4E00\u4E2A\u7528\u6765\u4FDD\u5B58\u6570\u636E\u7684\u5730\u65B9,\u53EF\u4EE5\u770B\u4F5C\u4E00\u4E2A\u5BB9\u5668,\u6574\u4E2A\u5E94\u7528\u53EA\u6709\u4E00\u4E2AStore.</li><li>\u529F\u80FD <ul><li>createStore(fn),\u751F\u6210Store</li><li>getState(): \u5F97\u5230state</li><li>dispatch(action): \u5206\u53D1action,\u89E6\u53D1reducer\u8C03\u7528,\u4EA7\u751F\u65B0\u7684state</li><li>Subscribe(listener): \u6CE8\u518C\u76D1\u542C,\u5F53\u4EA7\u751F\u4E86\u65B0\u7684state\u65F6,\u81EA\u52A8\u8C03\u7528</li></ul></li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>//\u76EE\u5F55\u7ED3\u6784
| -- src // \u6E90\u4EE3\u7801\u6587\u4EF6\u5939
|		| -- store // redux\u6587\u4EF6\u5939
|		| 		| -- index.js // \u4E3B\u6587\u4EF6,\u5BFC\u51FA\u4E00\u4E2Astore
|		| 		| -- reducer.js // \u5BFC\u51FA\u4E00\u4E2Areducer
|		| 		| -- actionTypes.js // \u5BFC\u51FAaction\u7684type\u7684\u5E38\u91CF
|		| 		| -- actionCreators.js // \u5BFC\u51FA\u4E00\u4E2A\u4E2A\u7528\u4E8E\u521B\u5EFAaction\u7684\u51FD\u6570

// index.js
/*
** \u521B\u5EFAstore\u7684\u65F6\u5019,\u9700\u8981\u5148\u53BB\u521B\u5EFAreducer

** store\u8BBE\u8BA1\u539F\u5219
****  store \u5FC5\u987B\u662F\u552F\u4E00\u7684
****  \u53EA\u6709store\u53EA\u80FD\u6539\u53D8\u81EA\u5DF1\u7684\u5185\u5BB9 reducer\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684store store\u81EA\u5DF1\u53BB\u66F4\u65B0
****  Reducer \u5FC5\u987B\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570(\u7ED9\u5B9A\u56FA\u5B9A\u7684\u8F93\u5165,\u5C31\u4E00\u5B9A\u662F\u6709\u56FA\u5B9A\u7684\u8F93\u51FA(\u4E5F\u5C31\u662F\u4E0D\u80FD\u6709\u65E5\u671F\u53D8\u6362\u3001ajax\u8BF7\u6C42\u7B49),\u800C\u4E14\u4E0D\u4F1A\u6709\u4EFB\u4F55\u526F\u4F5C\u7528 (\u6BD4\u5982\u4E0D\u80FD\u4FEE\u6539\u53C2\u6570))

** api
****  createStore \u5E2E\u52A9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2Astore
****  store.dispatch \u7528\u4E8E\u6D3E\u53D1action
****  store.getState \u83B7\u53D6store\u4E2D\u7684\u6240\u6709\u5185\u5BB9
****  store.subscribe  \u76D1\u542Cstore\u7684\u6539\u53D8
*/

import { createStore } from &quot;redux&quot;;

import reducer from &quot;./reducer&quot;;

// \u521B\u5EFA\u4E00\u4E2Astore,\u4F20\u5165reducer
const store = createStore(
    reducer
);

export default store;


// reducer.js
// \u5F15\u5165actionType\u5E38\u91CF
import { DELETE_TODO_ITEM, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, INIT_LIST_ACTION } from &quot;./actionTypes&quot;;

const defaultState = {
    inputValue: &#39;11&#39;,
    list: []
}

// reducer \u53EF\u4EE5\u63A5\u53D7state,\u4F46\u662F\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8state
// state \u4EE3\u8868\u5B58\u50A8\u7684\u6240\u6709\u6570\u636E
// action \u6307\u7684\u662F\u7528\u6237\u4F20\u9012\u8FC7\u6765\u7684\u90A3\u53E5\u8BDD
export default (state = defaultState, action) =&gt; {
    if (action.type === CHANGE_INPUT_VALUE) {
        // \u5BF9state\u505A\u4E00\u6B21\u6DF1\u62F7\u8D1D
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = &#39;&#39;;
        return newState; 
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    if (action.type === &#39;change_input_value&#39;) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    
    if (action.type === &#39;add_item&#39;) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = &quot;&quot;;
        return newState;
    }
    return state;
}

// actionCreators.js
import axios from &quot;axios&quot;;
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, GET_INIT_LIST, INIT_LIST_ACTION } from &quot;./actionTypes&quot;;

export const getInputChangeAction = (value) =&gt; ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () =&gt; ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) =&gt; ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) =&gt; ({
    type: INIT_LIST_ACTION,
    data
})


export const getInitList = () =&gt; ({
    type: GET_INIT_LIST
})


// \u4F7F\u7528redux-thunk\u4E2D\u95F4\u4EF6\u540E,\u8FD9\u65F6\u7684action\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\u4E86
// export const getTodoList = () =&gt; {
//     // store \u5728 \u81EA\u52A8\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u7684\u65F6\u5019,\u4F1A\u4F20\u9012\u8FC7\u6765dispatch
//     return (dispatch) =&gt; {
//         axios.get(&#39;http://localhost:9006/todolist&#39;).then((res)=&gt;{
//             const data = res.data;
//             console.log(data)
//             const action = initListAction(data);
//             dispatch(action);
//         })
//     }
// }

// actionTypes.js
export const CHANGE_INPUT_VALUE = &#39;change_input_value&#39;;
export const ADD_TODO_ITEM = &#39;add_todo_item&#39;;
export const DELETE_TODO_ITEM = &#39;delete_todo_item&#39;;
export const INIT_LIST_ACTION = &#39;init_list_action&#39;;
export const GET_INIT_LIST = &#39;get_init_list&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-\u4E09\u5927\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_7-4-\u4E09\u5927\u539F\u5219" aria-hidden="true">#</a> 7.4 \u4E09\u5927\u539F\u5219</h3><h4 id="_7-4-1-\u5355\u4E00\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#_7-4-1-\u5355\u4E00\u6570\u636E\u6E90" aria-hidden="true">#</a> 7.4.1 \u5355\u4E00\u6570\u636E\u6E90</h4><ul><li>\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684state\u88AB\u5B58\u50A8\u5728\u4E00\u68F5objec tree\u4E2D,\u5E76\u4E14\u8FD9\u4E2Aobject tree \u53EA\u5B58\u50A8\u5728\u4E00\u4E2Astore\u4E2D</li><li>Redux\u5E76\u6CA1\u6709\u5F3A\u5236\u8BA9\u6211\u4EEC\u4E0D\u80FD\u521B\u5EFA\u591A\u4E2AStore,\u4F46\u662F\u90A3\u6837\u505A\u5E76\u4E0D\u5229\u4E8E\u6570\u636E\u7684\u7EF4\u62A4</li><li>\u5355\u4E00\u7684\u6570\u636E\u6E90\u53EF\u4EE5\u8BA9\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684state\u53D8\u5F97\u65B9\u4FBF\u7EF4\u62A4\u3001\u8FFD\u8E2A\u3001\u4FEE\u6539</li></ul><h4 id="_7-4-2-state\u662F\u53EA\u8BFB\u7684" tabindex="-1"><a class="header-anchor" href="#_7-4-2-state\u662F\u53EA\u8BFB\u7684" aria-hidden="true">#</a> 7.4.2 State\u662F\u53EA\u8BFB\u7684</h4><ul><li>\u552F\u4E00\u4FEE\u6539State\u7684\u65B9\u6CD5\u4E00\u5B9A\u662F\u89E6\u53D1action,\u4E0D\u8981\u8BD5\u56FE\u5728\u5176\u4ED6\u5730\u65B9\u901A\u8FC7\u4EFB\u4F55\u7684\u65B9\u5F0F\u6765\u4FEE\u6539State</li><li>\u8FD9\u6837\u5C31\u786E\u4FDD\u4E86View\u6216\u7F51\u7EDC\u8BF7\u6C42\u90FD\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539state,\u5B83\u4EEC\u53EA\u80FD\u901A\u8FC7action\u6765\u63CF\u8FF0\u81EA\u5DF1\u60F3\u8981\u5982\u4F55\u4FEE\u6539state</li><li>\u8FD9\u6837\u53EF\u4EE5\u4FDD\u8BC1\u6240\u6709\u7684\u4FEE\u6539\u90FD\u88AB\u96C6\u4E2D\u5316\u5904\u7406\uFF0C\u5E76\u4E14\u6309\u7167\u4E25\u683C\u7684\u987A\u5E8F\u6765\u6267\u884C\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u62C5\u5FC3\u7ADF\u6001\u7684\u95EE\u9898\uFF1B</li></ul><h4 id="_7-4-3-\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_7-4-3-\u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539" aria-hidden="true">#</a> 7.4.3 \u4F7F\u7528\u7EAF\u51FD\u6570\u6765\u6267\u884C\u4FEE\u6539</h4><ul><li>\u901A\u8FC7reducer\u5C06\u65E7state\u548Cactions\u8054\u7CFB\u5728\u4E00\u8D77,\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684state</li><li>\u968F\u7740\u5E94\u7528\u7A0B\u5E8F\u7684\u590D\u6742\u5EA6\u589E\u52A0,\u53EF\u4EE5\u5C06reducer\u62C6\u5206.</li></ul><h3 id="_7-5-\u4F7F\u7528\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_7-5-\u4F7F\u7528\u8FC7\u7A0B" aria-hidden="true">#</a> 7.5 \u4F7F\u7528\u8FC7\u7A0B</h3><ol><li>\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61,\u4F5C\u4E3A\u6211\u4EEC\u8981\u4FDD\u5B58\u7684\u72B6\u6001</li><li>\u521B\u5EFAStore\u6765\u5B58\u50A8\u8FD9\u4E2Astate <ol><li>\u521B\u5EFAstore\u65F6\u5FC5\u987B\u521B\u5EFAreducer</li><li>\u901A\u8FC7store.getState\u6765\u521B\u5EFA\u5F53\u524Dstate</li></ol></li><li>\u901A\u8FC7action\u6765\u4FEE\u6539state <ol><li>\u901A\u8FC7dispatch\u6765\u6D3E\u53D1action</li><li>\u901A\u5E38action\u4E2D\u90FD\u4F1A\u6709type\u5C5E\u6027,\u4E5F\u53EF\u4EE5\u643A\u5E26\u5176\u4ED6\u7684\u6570\u636E</li></ol></li><li>\u4FEE\u6539reducer\u4E2D\u7684\u5904\u7406\u4EE3\u7801</li><li>\u6D3E\u53D1action\u4E4B\u524D,\u76D1\u542Cstore\u7684\u53D8\u5316</li></ol><h3 id="_7-6-react-redux" tabindex="-1"><a class="header-anchor" href="#_7-6-react-redux" aria-hidden="true">#</a> 7.6 react-redux</h3><p>\u200B react-redux\u662F\u4E00\u4E2Areact\u63D2\u4EF6\u5E93,\u4E13\u95E8\u7528\u6765\u7B80\u5316react\u5E94\u7528\u4E2D\u4F7F\u7528redux.\u4ED6\u662F\u4ECEredux\u5C01\u88C5\u800C\u6765,\u56E0\u6B64\u57FA\u672C\u539F\u7406\u548Credux\u662F\u4E00\u6837\u7684,\u540C\u65F6\u5B58\u5728\u4E00\u4E9B\u5DEE\u5F02.</p><p>\u200B react-redux\u7B80\u5316\u4E86redux\u4E0Estore\u4EA4\u4E92\u65F6,\u9700\u8981\u624B\u52A8\u8C03\u7528<code>store.subscript()</code>\u76D1\u542Cstore\u53D8\u5316.</p><p><img src="https://gcore.jsdelivr.net/gh/easydeleroy/imgHosting@main/ios/2f45c6b06d0649a68992d5b833692409~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image.png" loading="lazy"></p><h4 id="_7-6-1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_7-6-1-\u5B89\u88C5" aria-hidden="true">#</a> 7.6.1 \u5B89\u88C5</h4><p><code>yarn add react-redux</code></p><h4 id="_7-6-2-react-redux\u5C06\u6240\u6709\u7EC4\u4EF6\u5206\u4E3A\u4E24\u5927\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-6-2-react-redux\u5C06\u6240\u6709\u7EC4\u4EF6\u5206\u4E3A\u4E24\u5927\u7C7B" aria-hidden="true">#</a> 7.6.2 React-redux\u5C06\u6240\u6709\u7EC4\u4EF6\u5206\u4E3A\u4E24\u5927\u7C7B</h4><ul><li>UI\u7EC4\u4EF6 <ol><li>\u53EA\u8D1F\u8D23UI\u7684\u5448\u73B0,\u4E0D\u5E26\u6709\u4EFB\u4F55\u4E1A\u52A1\u903B\u8F91</li><li>\u6CA1\u6709\u72B6\u6001(\u5373\u4E0D\u4F7F\u7528this.state\u53D8\u91CF)</li><li>\u901A\u8FC7props\u63A5\u6536\u6570\u636E</li><li>\u4E0D\u4F7F\u7528\u4EFB\u4F55Redux\u7684API\u5BB9\u5668\u7EC4\u4EF6</li><li>\u4E00\u822C\u4FDD\u5B58\u5728components\u6587\u4EF6\u5939\u559C\u7231,\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5378\u8F7D\u5BB9\u5668\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u52A0\u5DE5\u6210\u5BB9\u5668\u7EC4\u4EF6</li></ol></li><li>\u5BB9\u5668\u7EC4\u4EF6 <ol><li>\u8D1F\u8D23\u7BA1\u7406\u6570\u636E\u548C\u4E1A\u52A1\u903B\u8F91,\u4E0D\u8D1F\u8D23UI\u7684\u5448\u73B0</li><li>\u4F7F\u7528Redux\u7684API</li><li>\u4E00\u822C\u4FDD\u5B58\u5728containers\u6587\u4EF6\u5939\u4E0B</li></ol></li></ul><h4 id="_7-6-2-\u76F8\u5173\u7684api" tabindex="-1"><a class="header-anchor" href="#_7-6-2-\u76F8\u5173\u7684api" aria-hidden="true">#</a> 7.6.2 \u76F8\u5173\u7684API</h4><ul><li><p>Provider ,RR\u63D0\u4F9B\u7684\u7EC4\u4EF6,\u8BE5\u7EC4\u4EF6\u628A\u6839\u7EC4\u4EF6\u5305\u542B\u8D77\u6765,\u5E76\u4E14\u4F20\u5165store,\u8BA9\u6240\u6709\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u5F97\u5230state\u6570\u636E</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>import React from &#39;react&#39;
import ReactDOM from &quot;react-dom&quot;
import App from &#39;./App&#39;
import store from &#39;./redux/store&#39;
import {Provider} from &#39;react-redux&#39;

ReactDOM.render(
	/* \u6B64\u5904\u9700\u8981\u7528Provider\u5305\u88F9App\uFF0C\u76EE\u7684\u662F\u8BA9App\u6240\u6709\u7684\u540E\u4EE3\u5BB9\u5668\u7EC4\u4EF6\u90FD\u80FD\u63A5\u6536\u5230store */
	&lt;Provider store={store}&gt;
		&lt;App/&gt;
	&lt;/Provider&gt;,
	document.getElementById(&#39;root&#39;)
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Connect \u7528\u4E8E\u5305\u88C5UI\u7EC4\u4EF6\u751F\u6210\u5BB9\u5668\u7EC4\u4EF6,connect\u5305\u88F9\u540E\u751F\u6210\u4E86\u4E00\u4E2A\u5BB9\u5668\u7EC4\u4EF6,connect\u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570:<code>mapStateToProps</code>\u548C<code>mapDispatchToProps</code>.\u5B83\u4EEC\u5B9A\u4E49\u4E86UI\u7EC4\u4EF6\u7684\u4E1A\u52A1\u903B\u8F91.\u524D\u8005\u8D1F\u8D23\u8F93\u5165\u903B\u8F91,\u5373\u5C06state\u6620\u5C04\u5230UI\u7EC4\u4EF6\u7684\u53C2\u6570(props)\u4E0A;\u540E\u8005\u8D1F\u8D23\u8F93\u51FA\u903B\u8F91,\u5373\u5C06\u7528\u6237\u5BF9UI\u7EC4\u4EF6\u7684\u64CD\u4F5C\u6620\u5C04\u6210<code>Action</code>,\u6B64\u65F6\u5C31\u53EF\u4EE5\u4E0Estore\u4EA4\u4E92\u4E86.</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>import React from &quot;react&quot;;
import store from &quot;./store&quot;;

import { connect } from &quot;react-redux&quot;;

const TowTodoList = (props) =&gt; {
    const { inputValue, list, handleClick, changeInputValue} = props;
    return (
        &lt;div&gt;
            &lt;div&gt;
                &lt;input value={inputValue} onChange={changeInputValue}/&gt;
                &lt;button onClick={handleClick}&gt;\u63D0\u4EA4&lt;/button&gt;
            &lt;/div&gt;
            &lt;ul&gt;
                {
                    list.map((item,index)=&gt;{
                        return &lt;li key={index}&gt;{item}&lt;/li&gt;
                    })
                }
            &lt;/ul&gt;
        &lt;/div&gt;
    )
}

const mapStateToProps = (state) =&gt; {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// \u5427store.dispatch,\u6302\u8F7D\u5230props\u4E0A\u53BB
const mapDispatchProps = (dispatch) =&gt; {
    return {
        changeInputValue(e) {
            const action = {
                type: &#39;change_input_value&#39;,
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: &#39;add_item&#39;
            }
            dispatch(action);
        }
    }
}

// \u8BA9\u6211\u7684TowTodoList \u548C store\u8FDB\u884C\u8FDE\u63A5,store\u4E0A\u7684\u5C5E\u6027\u4F1A\u6620\u5C04\u5230props\u4E0A,\u89C4\u5219\u5728mapStateToProps; \u5982\u679C\u60F3\u5BF9store\u4E2D\u7684\u6570\u636E\u505A\u4FEE\u6539.\u901A\u8FC7props\u505A\u4FEE\u6539
export default connect(mapStateToProps,mapDispatchProps)(TowTodoList); // TowTodoList \u662F\u4E00\u4E2AUI\u7EC4\u4EF6,connect\u5C06\u4E00\u4E9B\u4E1A\u52A1\u548C\u903B\u8F91\u4E0E\u5176\u8FDE\u63A5\u4EE5\u540E,\u5C31\u6210\u4E86\u4E00\u4E2A\u5BB9\u5668\u7EC4\u4EF6\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mapStateToProps \u662F\u4E00\u4E2A\u51FD\u6570,\u5EFA\u7ACB\u4E00\u4E2A\u4ECE(\u5916\u90E8\u7684)state\u5BF9\u8C61\u5230(UI\u7EC4\u4EF6\u7684)props\u5BF9\u8C61\u7684\u6620\u5C04\u5173\u7CFB,\u628Astore\u7684state\u6302\u8F7D\u5230\u7EC4\u4EF6\u7684props\u4E0A.mapStateToProps\u6267\u884C\u540E\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61,\u91CC\u9762\u7684\u6BCF\u4E00\u4E2A\u952E\u503C\u5BF9\u5C31\u662F\u4E00\u4E2A\u6620\u5C04.\u5C06\u5916\u90E8\u7684\u6570\u636E(\u5373state\u5BF9\u8C61)\u8F6C\u6362\u4E3AUI\u7EC4\u4EF6\u7684\u6807\u7B7E\u5C5E\u6027,\u5B83\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61,\u5BF9\u8C61\u4E2D\u7684key\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684key,value\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684value</p></li><li><p>mapDispatchToProps \u5C06\u5206\u53D1action\u7684\u51FD\u6570,\u8F6C\u6362\u4E3AUI\u7EC4\u4EF6\u7684\u6807\u7B7E\u5C5E\u6027,\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61,\u5BF9\u8C61\u4E2D\u7684key\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6\u7684props\u7684key,value\u4F5C\u4E3AUI\u7EC4\u4EF6\u7684props\u7684value,mapDispatchToProps\u7528\u4E8E\u4F20\u9012\u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5</p></li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>------------------------------\u4E0D\u7B80\u5316\u4EE3\u7801-----------------------------------------------
/* 
	1.mapStateToProps\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1B
	2.\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684key\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684key,value\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684value
	3.mapStateToProps\u7528\u4E8E\u4F20\u9012\u72B6\u6001
*/
function mapStateToProps(state){
	return {count:state}
}

/* 
	1.mapDispatchToProps\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1B
	2.\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684key\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684key,value\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684value
	3.mapDispatchToProps\u7528\u4E8E\u4F20\u9012\u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5
*/
function mapDispatchToProps(dispatch){
	return {
		jia:number =&gt; dispatch(createIncrementAction(number)),
		jian:number =&gt; dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) =&gt; dispatch(createIncrementAsyncAction(number,time)),
	}
}

//\u4F7F\u7528connect()()\u521B\u5EFA\u5E76\u66B4\u9732\u4E00\u4E2ACount\u7684\u5BB9\u5668\u7EC4\u4EF6
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

----------------\u4E0B\u9762\u662F\u7B80\u5316\u4EE3\u7801-----------------------------
//\u4F7F\u7528connect()()\u521B\u5EFA\u5E76\u66B4\u9732\u4E00\u4E2ACount\u7684\u5BB9\u5668\u7EC4\u4EF6
//\u4F7F\u7528connect(\u4F20\u5165\u72B6\u6001,\u64CD\u4F5C\u72B6\u6001\u65B9\u6CD5)(UI\u7EC4\u4EF6)
export default connect(
state =&gt; ({
count: state.count,
personCount: state.persons.length
}),
{increment, decrement, incrementAsync}
)(Count)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-7-redux\u8C03\u8BD5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_7-7-redux\u8C03\u8BD5\u5DE5\u5177" aria-hidden="true">#</a> 7.7 Redux\u8C03\u8BD5\u5DE5\u5177</h3><ol><li><p>\u5B89\u88C5chrome\u63D2\u4EF6 <code>Redux DecTools</code></p></li><li><p>\u4E0B\u8F7D\u5DE5\u5177\u4F9D\u8D56\u5305 <code>npm install --save-dev redux-devtools-extension</code></p></li><li><p>\u4FEE\u6539store.js</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>/**
* \u8BE5\u6587\u4EF6\u64B0\u6587\u7528\u4E8E\u66B4\u9732\u4E00\u4E2Astore\u5BF9\u8C61,\u6574\u4E2A\u5E94\u7528\u53EA\u6709\u4E00\u4E2Astore\u5BF9\u8C61
*/
//\u5F15\u5165createStore,\u4E13\u95E8\u7528\u4E8E\u521B\u5EFAredux\u4E2D\u6700\u4E3A\u6838\u5FC3\u7684store\u5BF9\u8C61
import {createStore,applyMiddleware} from &#39;redux&#39;
//\u5F15\u5165\u6C47\u603B\u540E\u7684reducer
import reducer from &#39;./reducers&#39;
//\u5F15\u5165redux-thunk\uFF0C\u7528\u4E8E\u652F\u6301\u5F02\u6B65action
import thunk from &#39;redux-thunk&#39;
//\u5F15\u5165redux-devtools-extension
import {composeWithDevTools} from &#39;redux-devtools-extension&#39;
//\u66B4\u9732store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u516B\u3001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8DEF\u7531" aria-hidden="true">#</a> \u516B\u3001\u8DEF\u7531</h2><h3 id="_8-1-\u8DEF\u7531\u53D1\u5C55" tabindex="-1"><a class="header-anchor" href="#_8-1-\u8DEF\u7531\u53D1\u5C55" aria-hidden="true">#</a> 8.1 \u8DEF\u7531\u53D1\u5C55</h3><ol><li>\u9636\u6BB5\u4E00: \u540E\u7AEF\u8DEF\u7531\u9636\u6BB5 \u5F53\u6211\u4EEC\u9875\u9762\u4E2D\u9700\u8981\u8BF7\u6C42\u4E0D\u540C\u7684\u8DEF\u5F84\u5185\u5BB9\u65F6, \u4EA4\u7ED9\u670D\u52A1\u5668\u6765\u8FDB\u884C\u5904\u7406, \u670D\u52A1\u5668\u6E32\u67D3\u597D\u6574\u4E2A\u9875\u9762, \u5E76\u4E14\u5C06\u9875\u9762\u8FD4\u56DE\u7ED9\u5BA2\u6237</li><li>\u9636\u6BB5\u4E8C: \u524D\u540E\u7AEF\u5206\u79BB\u9636\u6BB5</li><li>\u9636\u6BB5\u4E09: \u5355\u9875\u9762\u5BCC\u5E94\u7528(SPA) \u6574\u4E2A\u9875\u9762\u53EA\u6709\u4E00\u4E2A\u5B8C\u6574\u7684\u9875\u9762,\u70B9\u51FB\u9875\u9762\u4E2D\u7684\u94FE\u63A5\u4E0D\u4F1A\u5237\u65B0\u9875\u9762,\u53EA\u4F1A\u505A\u9875\u9762\u7684\u5C40\u90E8\u66F4\u65B0,\u6E32\u67D3\u4E0D\u540C\u7684\u7EC4\u4EF6</li></ol><h3 id="_8-2-\u524D\u7AEF\u8DEF\u7531\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_8-2-\u524D\u7AEF\u8DEF\u7531\u7684\u539F\u7406" aria-hidden="true">#</a> 8.2 \u524D\u7AEF\u8DEF\u7531\u7684\u539F\u7406</h3><p>\u200B URL\u53D1\u751F\u53D8\u5316,\u540C\u65F6\u4E0D\u5F15\u8D77\u9875\u9762\u7684\u5237\u65B0\u6709\u4E24\u79CD\u529E\u6CD5,\u5F53\u76D1\u542C\u5230URL\u53D1\u751F\u6539\u53D8\u65F6,\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u81EA\u5DF1\u5224\u65AD\u5F53\u524D\u7684URL,\u51B3\u5B9A\u5230\u5E95\u6E32\u67D3\u4EC0\u4E48\u6837\u7684\u5185\u5BB9</p><h4 id="_8-2-1-\u901A\u8FC7url\u7684hash\u6539\u53D8url" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u901A\u8FC7url\u7684hash\u6539\u53D8url" aria-hidden="true">#</a> 8.2.1 \u901A\u8FC7URL\u7684hash\u6539\u53D8URL</h4><p>\u200B URL\u7684hash\u4E5F\u5C31\u662F\u951A\u70B9(#),\u672C\u8D28\u4E0A\u662F\u6539\u53D8window.location\u7684href\u5C5E\u6027.\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u8D4B\u503Clocation.hash\u6765\u6539\u53D8href,\u4F46\u662F\u9875\u9762\u4E0D\u53D1\u751F\u5237\u65B0.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u83B7\u53D6router-view</span>
<span class="token keyword">const</span> routerViewEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.router-view&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u76D1\u542Chashchange</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;#/home&#39;</span><span class="token operator">:</span>
            routerViewEl<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;#/about&#39;</span><span class="token operator">:</span>
            routerViewEl<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;about&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-2-\u901A\u8FC7html5\u7684history\u6A21\u5F0F\u4FEE\u6539url" tabindex="-1"><a class="header-anchor" href="#_8-2-2-\u901A\u8FC7html5\u7684history\u6A21\u5F0F\u4FEE\u6539url" aria-hidden="true">#</a> 8.2.2 \u901A\u8FC7HTML5\u7684history\u6A21\u5F0F\u4FEE\u6539URL</h4><p>\u200B history\u63A5\u53E3\u662FH5\u65B0\u589E\u7684,\u6709\u516D\u79CD\u6A21\u5F0F\u6539\u53D8URL,\u800C\u4E0D\u5237\u65B0\u9875\u9762</p><ul><li>replaceState: \u66FF\u6362\u539F\u6765\u7684\u8DEF\u5F84</li><li>pushState: \u4F7F\u7528\u65B0\u7684\u8DEF\u5F84</li><li>popState: \u8DEF\u5F84\u7684\u56DE\u9000</li><li>go: \u5411\u524D\u6216\u5411\u540E\u6539\u53D8\u8DEF\u5F84</li><li>forward: \u5411\u524D\u6539\u53D8\u8DEF\u5F84</li><li>back: \u5411\u540E\u6539\u53D8\u8DEF\u5F84</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1. \u83B7\u53D6router-view</span>
<span class="token keyword">const</span> routerViewEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.router-view&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2. \u76D1\u542C\u6240\u6709\u7684a\u5143\u7D20</span>
<span class="token keyword">const</span> aEls <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> aEl <span class="token keyword">of</span> aEls<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    aEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> href <span class="token operator">=</span> aEl<span class="token punctuation">,</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">historyChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 3. \u76D1\u542CpopState\u548Cgo\u64CD\u4F5C</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;popstate&quot;</span><span class="token punctuation">,</span> historyChange<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span> historyChange<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 4. \u6267\u884C\u8BBE\u7F6E\u9875\u9762\u64CD\u4F5C</span>
<span class="token keyword">function</span> <span class="token function">historyChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;/home&#39;</span><span class="token operator">:</span>
            routerViewEl<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&#39;/about&#39;</span><span class="token operator">:</span>
            routerViewEl<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&quot;about&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-react-router" tabindex="-1"><a class="header-anchor" href="#_8-3-react-router" aria-hidden="true">#</a> 8.3 react-router</h3><h4 id="_8-3-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_8-3-1-\u6982\u5FF5" aria-hidden="true">#</a> 8.3.1 \u6982\u5FF5</h4><p>\u200B react\u7684\u63D2\u4EF6\u5E93,\u4F46\u662F\u4ECE4\u5F00\u59CB,\u8DEF\u7531\u4E0D\u5728\u96C6\u4E2D\u5728\u4E00\u4E2A\u5305\u4E2D\u8FDB\u884C\u7BA1\u7406,\u6211\u4EEC\u9700\u8981\u5B89\u88C5<code>yarn add react-router-dom</code></p><ul><li>React-router\u662Frouter\u7684\u6838\u5FC3\u90E8\u5206\u4EE3\u7801</li><li>React-router-dom\u662F\u7528\u4E8E\u6D4F\u89C8\u5668\u7684</li><li>react-router-native\u662F\u7528\u4E8E\u539F\u751F\u5E94\u7528</li></ul><h4 id="_8-3-2-\u76F8\u5173api" tabindex="-1"><a class="header-anchor" href="#_8-3-2-\u76F8\u5173api" aria-hidden="true">#</a> 8.3.2 \u76F8\u5173API</h4><ol><li>\u5185\u7F6E\u7EC4\u4EF6 <ol><li><code>Router</code>\u5305\u542B\u4E86\u5BF9\u8DEF\u7531\u6539\u53D8\u7684\u76D1\u542C,\u5E76\u4E14\u4F1A\u5C06\u76F8\u5E94\u7684\u8DEF\u5F84\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6 <ul><li><code>&lt;BrowserRouter&gt;</code>\u4F7F\u7528history\u6A21\u5F0F</li><li><code>&lt;HashRouter&gt;</code> \u4F7F\u7528hash\u6A21\u5F0F</li></ul></li><li>Link \u7528\u4E8E\u8DEF\u5F84\u7684\u8DF3\u8F6C,\u6700\u7EC8\u4F1A\u88AB\u6E32\u67D3\u6210a\u5143\u7D20 <ul><li><code>&lt;Link to=&quot;&quot;&gt;</code> \u901A\u5E38\u8DEF\u5F84\u7684\u8DF3\u8F6C\u662F\u4F7F\u7528Link\u7EC4\u4EF6,to\u7528\u4E8E\u8BBE\u7F6E\u8DF3\u8F6C\u7684\u8DEF\u5F84</li><li><code>&lt;NavLink&gt;</code> \u5728Link\u7684\u57FA\u7840\u4E0A,\u589E\u52A0\u4E86\u4E00\u4E9B\u6837\u5F0F\u5C5E\u6027</li></ul></li><li>Route \u7528\u4E8E\u8DEF\u5F84\u7684\u5339\u914D <code>&lt;Route path=&quot;&quot; component=&quot;&quot; exact&gt;</code><ul><li>Path: \u8BBE\u7F6E\u5339\u914D\u5230\u7684\u8DEF\u5F84</li><li>component: \u8BBE\u7F6E\u5339\u914D\u5230\u7684\u8DEF\u5F84\u540E,\u6E32\u67D3\u7684\u7EC4\u4EF6</li><li>exact: \u7CBE\u51C6\u5339\u914D.\u53EA\u6709\u5339\u914D\u5230\u5B8C\u5168\u4E00\u81F4\u7684\u8DEF\u5F84,\u624D\u4F1A\u6E32\u67D3\u5BF9\u5E94\u7684\u7EC4\u4EF6</li></ul></li><li><code>&lt;Switch&gt;</code>: \u9ED8\u8BA4\u60C5\u51B5\u4E0B,react-router\u4E2D\u53EA\u8981\u662F\u8DEF\u5F84\u88AB\u5339\u914D\u5230\u7684Route\u5BF9\u5E94\u7684\u7EC4\u4EF6\u5168\u90FD\u4F1A\u88AB\u6E32\u67D3.\u4F46\u662F\u6211\u4EEC\u53EA\u8981\u5339\u914D\u5230\u7684\u7B2C\u4E00\u4E2A,\u8FD9\u65F6\u5C31\u53EF\u4EE5\u7528<code>&lt;Switch&gt;</code> \u5305\u88F9\u4F4F\u6240\u6709\u7684<code>&lt;Route&gt;</code></li><li><code>&lt;Redirect&gt;</code>: \u7528\u4E8E\u8DEF\u7531\u7684\u91CD\u5B9A\u5411,\u5F53\u8FD9\u4E2A\u7EC4\u4EF6\u51FA\u73B0\u65F6,\u5C31\u4F1A\u6267\u884C\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684to\u8DEF\u5F84\u4E2D.\u4E00\u822C\u4F1A\u628A\u5B83\u5199\u5230\u6240\u6709\u8DEF\u7531\u7684\u6700\u4E0B\u9762,\u5F53\u6240\u6709\u8DEF\u7531\u90FD\u65E0\u6CD5\u5339\u914D\u65F6,\u8DF3\u8F6C\u5230Redirect\u6307\u5B9A\u7684\u8DEF\u7531</li></ol></li><li>\u5176\u4ED6 <ol><li>history\u5BF9\u8C61</li><li>match\u5BF9\u8C61</li><li>withRouter\u5BF9\u8C61</li></ol></li></ol><h4 id="_8-3-3-\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_8-3-3-\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> 8.3.3 \u57FA\u672C\u4F7F\u7528</h4><ol><li>\u660E\u786E\u597D\u754C\u9762\u4E2D\u7684\u5BFC\u822A\u533A\u3001\u5C55\u793A\u533A</li><li>\u5BFC\u822A\u533A\u7684a\u6807\u7B7E\u6539\u4E3ALink\u6807\u7B7E</li><li>\u5C55\u793A\u533A\u5199Route\u6807\u7B7E\u8FDB\u884C\u8DEF\u5F84\u5339\u914D</li><li><code>&lt;App&gt;</code>\u7684\u6700\u5916\u4FA7\u5305\u88F9\u4E86\u4E00\u4E2A<code>&lt;BrowserRouter&gt;</code>\u6216<code>&lt;HashRouter&gt;</code></li></ol><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>import React, { Component } from &#39;react&#39;;
import ReactDOM from &#39;react-dom&#39;;
import { BrowserRouter, Route, Link } from &#39;react-router-dom&#39;;

import Home from &#39;./pages/home&#39;;
import About from &#39;./pages/&#39;

class App extends Component {
    render() {
        return (
            &lt;BrowserRouter&gt;
                &lt;Link to=&quot;/&quot;&gt;\u9996\u9875&lt;/Link&gt;
                &lt;Link to=&quot;/about&quot;&gt;\u5173\u4E8E&lt;/Link&gt;
                
                &lt;Route exact path=&#39;/&#39; component={Home} /&gt;
                &lt;Route path=&#39;/about&#39; component={About} /&gt;
            &lt;/BrowserRouter&gt;
        )
    }
}

// \u901A\u8FC7render\u5C06\u5185\u5BB9\u6302\u8F7D\u5230root\u6807\u7B7E\u4E0A
ReactDOM.render(
    &lt;App /&gt;
    , document.getElementById(&#39;root&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-navlink\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#_8-4-navlink\u5C01\u88C5" aria-hidden="true">#</a> 8.4 NavLink\u5C01\u88C5</h3><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>export default class MyNavLink extends Component {
	render() {
        // activeClassName\u6307\u5B9A\u6837\u5F0F\u540D
        return &lt;NavLink activeClassName=&quot;linkclass&quot; className=&quot;&quot; {...this.props} /&gt;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-5-\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_8-5-\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> 8.5 \u5D4C\u5957\u8DEF\u7531</h3><ul><li>\u6CE8\u518C\u5B50\u8DEF\u7531\u65F6\u8981\u5199\u4E0A\u7236\u8DEF\u7531\u7684path\u503C</li><li>\u8DEF\u7531\u7684\u5339\u914D\u662F\u6309\u7167\u6CE8\u518C\u8DEF\u7531\u7684\u987A\u5E8F\u8FDB\u884C\u7684</li></ul><h3 id="_8-6-\u8DEF\u7531\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_8-6-\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a> 8.6 \u8DEF\u7531\u4F20\u53C2</h3><h4 id="_8-6-1-\u65B9\u5F0F\u4E00-\u52A8\u6001\u8DEF\u7531\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_8-6-1-\u65B9\u5F0F\u4E00-\u52A8\u6001\u8DEF\u7531\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 8.6.1 \u65B9\u5F0F\u4E00: \u52A8\u6001\u8DEF\u7531\u7684\u65B9\u5F0F</h4><p>\u200B \u52A8\u6001\u8DEF\u7531\u7684\u6982\u5FF5\u6307\u8DEF\u7531\u4E2D\u7684\u8DEF\u5F84\u5E76\u4E0D\u4F1A\u56FA\u5B9A,<code>&lt;Route&gt;</code>\u7EC4\u4EF6\u4E2D\u7684path\u7684\u503C<code>/detail/:id</code>,\u8FDB\u884C\u5339\u914D</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u8DEF\u7531\u94FE\u63A5\u643A\u5E26\u53C2\u6570
&lt;Link to=&#39;/detail/18/\u6807\u9898&#39;&gt;\u8BE6\u60C5&lt;/Link&gt;
// \u6CE8\u518C\u8DEF\u7531\u63A5\u53D7\u53C2\u6570
&lt;Route path=&#39;/detail/:id/:title&#39; component={Detail} /&gt;
// \u53C2\u6570\u6253\u5370
const { id, title } = this.props.match.params;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-6-2-\u65B9\u5F0F\u4E8C-search\u4F20\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_8-6-2-\u65B9\u5F0F\u4E8C-search\u4F20\u53C2\u6570" aria-hidden="true">#</a> 8.6.2 \u65B9\u5F0F\u4E8C: search\u4F20\u53C2\u6570</h4><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u8DEF\u7531\u94FE\u63A5\u643A\u5E26\u53C2\u6570
&lt;Link to=&#39;/detail?id=18&amp;title=\u6807\u9898&#39;&gt;\u8BE6\u60C5&lt;/Link&gt;
// \u6CE8\u518C\u8DEF\u7531 \u65E0\u9700\u58F0\u660E\u63A5\u6536
&lt;Route path=&#39;/detail&#39; component={Detail} /&gt;
// \u63A5\u6536
import qs from &#39;querystring&#39;;
const { search } = this.props.location;
// \u83B7\u53D6\u5230\u7684search\u662F\`urlencoded\u7F16\u7801\u5B57\u7B26\u4E32\`\uFF0C\u9700\u8981\`\u501F\u52A9querystring\u89E3\u6790\`
const { id, title } = qs.parse(search.slice(1));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-6-3-\u65B9\u5F0F\u4E09-state\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_8-6-3-\u65B9\u5F0F\u4E09-state\u53C2\u6570" aria-hidden="true">#</a> 8.6.3 \u65B9\u5F0F\u4E09: state\u53C2\u6570</h4><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u8DEF\u7531\u94FE\u63A5\u4E2D\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61
&lt;Link to={{
        pathname: &#39;/detail&#39;,
        state: {
            id:1,
            title:&#39;\u6807\u9898&#39;
        }
    }}&gt;\u8BE6\u60C5&lt;/Link&gt;
// \u6CE8\u518C\u8DEF\u7531
&lt;Route path=&#39;/detail&#39; component={Detail} /&gt;
// \u4F7F\u7528BrowserRouter\u5237\u65B0\u624D\u53EF\u4EE5\u4FDD\u7559\u4F4F\u53C2\u6570,\u4F7F\u7528HashRouter\u5237\u65B0\u540Estate\u5C06\u4F1A\u6CA1\u6709history\u6765\u4FDD\u5B58\u53C2\u6570
// \u63A5\u6536state\u53C2\u6570,\u540E\u9762\u6DFB\u52A0\`||{}\`\u662F\u9632\u6B62\u4F7F\u7528\`HashRouter\`\u540Estate\u4E3Aundefined\u65F6\u62A5\u9519
const {id,title} = this.props.location.state || {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#_8-7-\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A" aria-hidden="true">#</a> 8.7 \u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A</h3><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>import React, { Component } from &#39;react&#39;
import { Link, Route } from &#39;react-router-dom&#39;
import Detail from &#39;./Detail&#39;

export default class Message extends Component {
 state = {
   messageArr: [
     { id: &#39;01&#39;, title: &#39;\u6D88\u606F1&#39; },
     { id: &#39;02&#39;, title: &#39;\u6D88\u606F2&#39; },
     { id: &#39;03&#39;, title: &#39;\u6D88\u606F3&#39; },
   ]
 }

 replaceShow = (id, title) =&gt; {
   //replace\u8DF3\u8F6C+\u643A\u5E26params\u53C2\u6570
   //this.props.history.replace(\`/home/message/detail/\${id}/\${title}\`)

   //replace\u8DF3\u8F6C+\u643A\u5E26search\u53C2\u6570
   // this.props.history.replace(\`/home/message/detail?id=\${id}&amp;title=\${title}\`)

   //replace\u8DF3\u8F6C+\u643A\u5E26state\u53C2\u6570
   this.props.history.replace(\`/home/message/detail\`, { id, title })
 }

 pushShow = (id, title) =&gt; {
   //push\u8DF3\u8F6C+\u643A\u5E26params\u53C2\u6570
   // this.props.history.push(\`/home/message/detail/\${id}/\${title}\`)

   //push\u8DF3\u8F6C+\u643A\u5E26search\u53C2\u6570
   // this.props.history.push(\`/home/message/detail?id=\${id}&amp;title=\${title}\`)

   //push\u8DF3\u8F6C+\u643A\u5E26state\u53C2\u6570
   this.props.history.push(\`/home/message/detail\`, { id, title })

 }

 back = () =&gt; {
   this.props.history.goBack()
 }

 forward = () =&gt; {
   this.props.history.goForward()
 }

 go = () =&gt; {
   this.props.history.go(-2)
 }

 render() {
   const { messageArr } = this.state
   return (
     &lt;div&gt;
       &lt;ul&gt;
         {
           messageArr.map((msgObj) =&gt; {
             return (
               &lt;li key={msgObj.id}&gt;

                 {/* \u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012params\u53C2\u6570 */}
                 {/* &lt;Link to={\`/home/message/detail/\${msgObj.id}/\${msgObj.title}\`}&gt;{msgObj.title}&lt;/Link&gt; */}

                 {/* \u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012search\u53C2\u6570 */}
                 {/* &lt;Link to={\`/home/message/detail/?id=\${msgObj.id}&amp;title=\${msgObj.title}\`}&gt;{msgObj.title}&lt;/Link&gt; */}

                 {/* \u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012state\u53C2\u6570 */}
                 &lt;Link to={{ pathname: &#39;/home/message/detail&#39;, state: { id: msgObj.id, title: msgObj.title } }}&gt;{msgObj.title}&lt;/Link&gt;
			&amp;nbsp;&lt;button onClick={() =&gt; this.pushShow(msgObj.id, msgObj.title)}&gt;push\u67E5\u770B&lt;/button&gt;
			&amp;nbsp;&lt;button onClick={() =&gt; this.replaceShow(msgObj.id, msgObj.title)}&gt;replace\u67E5\u770B&lt;/button&gt;
               &lt;/li&gt;
             )
           })
         }
       &lt;/ul&gt;
       &lt;hr /&gt;
       {/* \u58F0\u660E\u63A5\u6536params\u53C2\u6570 */}
       {/* &lt;Route path=&quot;/home/message/detail/:id/:title&quot; component={Detail}/&gt; */}

       {/* search\u53C2\u6570\u65E0\u9700\u58F0\u660E\u63A5\u6536\uFF0C\u6B63\u5E38\u6CE8\u518C\u8DEF\u7531\u5373\u53EF */}
       {/* &lt;Route path=&quot;/home/message/detail&quot; component={Detail}/&gt; */}

       {/* state\u53C2\u6570\u65E0\u9700\u58F0\u660E\u63A5\u6536\uFF0C\u6B63\u5E38\u6CE8\u518C\u8DEF\u7531\u5373\u53EF */}
       &lt;Route path=&quot;/home/message/detail&quot; component={Detail} /&gt;

       &lt;button onClick={this.back}&gt;\u56DE\u9000&lt;/button&gt;&amp;nbsp;
       &lt;button onClick={this.forward}&gt;\u524D\u8FDB&lt;/button&gt;&amp;nbsp;
       &lt;button onClick={this.go}&gt;go&lt;/button&gt;
     &lt;/div&gt;
   )
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-7-withrouter" tabindex="-1"><a class="header-anchor" href="#_8-7-withrouter" aria-hidden="true">#</a> 8.7 withRouter</h3><ul><li>withRouter\u53EF\u4EE5\u52A0\u5DE5\u4E00\u822C\u7EC4\u4EF6,\u8BA9\u4E00\u822C\u7EC4\u4EF6\u5177\u5907\u8DEF\u7531\u7EC4\u4EF6\u6240\u7279\u6709\u7684API</li><li>withRouter\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u65B0\u7EC4\u4EF6</li></ul><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>import React, { Component } from &#39;react&#39;
import { withRouter } from &#39;react-router-dom&#39;
class Header extends Component {
    back = () =&gt; { this.props.history.goBack() }
    forward = () =&gt; { this.props.history.goForward() }
    go = () =&gt; { this.props.history.go(-2) }
    render() {
        console.log(&#39;Header\u7EC4\u4EF6\u6536\u5230\u7684props\u662F&#39;, this.props);
        return (
            &lt;div className=&quot;page-header&quot;&gt;
                &lt;h2&gt;React Router Demo&lt;/h2&gt;
                &lt;button onClick={this.back}&gt;\u56DE\u9000&lt;/button&gt;&amp;nbsp;
                &lt;button onClick={this.forward}&gt;\u524D\u8FDB&lt;/button&gt;&amp;nbsp;
                &lt;button onClick={this.go}&gt;go&lt;/button&gt;
            &lt;/div&gt;
        )
    }
}
export default withRouter(Header)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-8-react-router-config" tabindex="-1"><a class="header-anchor" href="#_8-8-react-router-config" aria-hidden="true">#</a> 8.8 react-router-config</h3><ul><li>\u6240\u6709\u7684\u7406\u7531\u90FD\u662F\u76F4\u63A5\u4F7F\u7528Route\u7EC4\u4EF6,\u5E76\u4E14\u6DFB\u52A0\u5C5E\u6027\u6765\u5B8C\u6210,\u8FD9\u6837\u4F1A\u4F7F\u5F97\u8DEF\u7531\u975E\u5E38\u6DF7\u4E71</li><li>React-router-config \u53EF\u4EE5 \u5C06\u6240\u6709\u7684\u8DEF\u7531\u914D\u7F6E\u653E\u5728\u4E00\u4E2A\u5730\u65B9\u8FDB\u884C\u96C6\u4E2D\u7BA1\u7406</li><li><code>yarn add react-router-config</code></li></ul>`,172);function g(k,x){const s=r("ExternalLinkIcon");return t(),l("div",null,[o,n("ol",null,[n("li",null,[u,n("a",v,[p,d(s)])]),m,b]),h])}var _=a(c,[["render",g],["__file","React\u603B\u7ED3\u7B14\u8BB0.html.vue"]]);export{_ as default};
