import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as e}from"./app.8b942ccd.js";const p={},t=e(`<h1 id="sass\u603B\u7ED3\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#sass\u603B\u7ED3\u7B14\u8BB0" aria-hidden="true">#</a> Sass\u603B\u7ED3\u7B14\u8BB0</h1><h2 id="\u4E00\u3001\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6982\u8FF0" aria-hidden="true">#</a> \u4E00\u3001\u6982\u8FF0</h2><h3 id="_1-1-\u4EC0\u4E48\u662Fsass" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662Fsass" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662Fsass</h3><p>\u200B css\u9884\u5904\u7406\u5668,\u6269\u5C55\u4E86css3\uFF0C\u589E\u52A0\u4E86\u89C4\u5219\u3001\u53D8\u91CF\u3001\u6DF7\u5165\u3001\u9009\u62E9\u5668\u3001\u7EE7\u627F\u7B49\u7279\u6027\u3002sass\u751F\u6210\u826F\u597D\u683C\u5F0F\u5316\u7684css\u4EE3\u7801\uFF0C\u6613\u4E8E\u7EC4\u7EC7\u548C\u7EF4\u62A4\u3002</p><h3 id="_1-2-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7248\u672C" aria-hidden="true">#</a> 1.2 \u7248\u672C</h3><p>\u200B Sass\u6709\u4E09\u4E2A\u7248\u672C: Dart Sass\u3001libsass\u3001RubySass.\u63A8\u8350\u4F7F\u7528Dart Sass\u7248\u672C</p><h3 id="_1-3-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5" aria-hidden="true">#</a> 1.3 \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># npm \u9ED8\u8BA4\u5B89\u88C5\u7684\u5C31\u662FDart Sass</span>
<span class="token function">npm</span> <span class="token function">install</span> -g sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 1.4 \u5E38\u7528\u547D\u4EE4</h3><p>\u7F16\u8BD1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sass sass/style.scss:css/style.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u76D1\u542C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sass --watch sass:css 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165\u4EA4\u4E92\u6A21\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sass -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-5-\u7F16\u8BD1\u8F93\u51FAcss\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-5-\u7F16\u8BD1\u8F93\u51FAcss\u683C\u5F0F" aria-hidden="true">#</a> 1.5 \u7F16\u8BD1\u8F93\u51FAcss\u683C\u5F0F</h3><ul><li>nested \u5D4C\u5957</li><li>compact \u7D27\u51D1</li><li>expanded \u6269\u5C55</li><li>compressed \u538B\u7F29</li></ul><p>\u6CE8\u610F: dart sass\u53EA\u652F\u6301<code>expanded</code>\u548C<code>compressed</code></p><h2 id="\u4E8C\u3001\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> \u4E8C\u3001\u57FA\u672C\u8BED\u6CD5</h2><h3 id="_2-1-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-1-\u53D8\u91CF" aria-hidden="true">#</a> 2.1 \u53D8\u91CF</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u57FA\u672C</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #1269b5<span class="token punctuation">;</span>
<span class="token comment">// \u5D4C\u5957</span>
<span class="token property"><span class="token variable">$primary-border</span></span><span class="token punctuation">:</span> 1px solid <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u9009\u62E9\u5668\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9009\u62E9\u5668\u5D4C\u5957" aria-hidden="true">#</a> 2.2 \u9009\u62E9\u5668\u5D4C\u5957</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">ul </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

<span class="token comment">// \u5D4C\u5957\u65F6\u4F7F\u7528\u7236\u9009\u62E9\u5668</span>
<span class="token selector">a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #1269b5<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token selector">.nav </span><span class="token punctuation">{</span>
  <span class="token selector"><span class="token parent important">&amp;</span>-nav </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5C5E\u6027\u5D4C\u5957</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">border: 1px solid #fff</span><span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-mixin" tabindex="-1"><a class="header-anchor" href="#_2-3-mixin" aria-hidden="true">#</a> 2.3 mixin</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u5B9A\u4E49</span>
<span class="token keyword">@mixin</span> \u540D\u5B57 <span class="token punctuation">(</span>\u53C2\u65701<span class="token punctuation">,</span> \u53C2\u65702...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4F7F\u7528</span>
<span class="token keyword">@include</span> \u540D\u5B57<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token selector">alert </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fcf8e3<span class="token punctuation">;</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #664c2b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.alter-warning </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> alert<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u643A\u5E26\u53C2\u6570</span>
<span class="token keyword">@mixin</span>  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token variable">$text-color</span><span class="token punctuation">,</span><span class="token variable">$background</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text-color</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$background</span><span class="token punctuation">;</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
  	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">$text-color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.alter-success </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">alert</span><span class="token punctuation">(</span>#8a6d3b<span class="token punctuation">,</span> #fcf8e3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#_2-4-\u6269\u5C55" aria-hidden="true">#</a> 2.4 \u6269\u5C55</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.alert a </span><span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold
<span class="token punctuation">}</span>

<span class="token selector">.alert-info </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .alert<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #8a6d3b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-partials" tabindex="-1"><a class="header-anchor" href="#_2-5-partials" aria-hidden="true">#</a> 2.5 partials</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">// \u4F7F\u7528_\u5F00\u5934 _base.scss</span>
<span class="token keyword">@import</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u5BFC\u5165</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#_2-6-\u6CE8\u91CA" aria-hidden="true">#</a> 2.6 \u6CE8\u91CA</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token comment">/* */</span> 

<span class="token comment">// </span>

<span class="token comment">// \u8F93\u51FA \u4E0D\u4F1A\u542B\u6709</span>

<span class="token comment">/*\uFF01 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_2-7-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 2.7 \u6570\u636E\u7C7B\u578B</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property">number</span> <span class="token punctuation">:</span> 1 1px 10%\u7B49\u90FD\u662F

string <span class="token string">&#39;ning&#39;</span> <span class="token operator">+</span> hao = <span class="token string">&#39;ninghao&#39;</span>

<span class="token property">color</span><span class="token punctuation">:</span> hex rgb <span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>100% 50%<span class="token punctuation">)</span> \u8272\u76F8 \u9971\u548C\u5EA6 \u660E\u5EA6 <span class="token function">hsla</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token property">list</span><span class="token punctuation">:</span> 1px solid #fff 

<span class="token property">map</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">key1</span><span class="token punctuation">:</span>value1<span class="token punctuation">,</span><span class="token property">key2</span><span class="token punctuation">:</span>value2<span class="token punctuation">)</span>

boolean tru/<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-number\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-8-number\u51FD\u6570" aria-hidden="true">#</a> 2.8 number\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token function">abs</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span> \u7EDD\u5BF9\u503C

<span class="token function">round</span><span class="token punctuation">(</span>3.5<span class="token punctuation">)</span> \u56DB\u820D\u4E94\u5165

<span class="token function">ceil</span><span class="token punctuation">(</span>3.2<span class="token punctuation">)</span> \u8FDB\u4F4D 4

<span class="token function">floor</span><span class="token punctuation">(</span>3.2<span class="token punctuation">)</span> \u9000\u4F4D 3

<span class="token function">percentage</span><span class="token punctuation">(</span>650px <span class="token operator">/</span> 1000 px<span class="token punctuation">)</span> 65%

<span class="token function">min</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3<span class="token punctuation">)</span> 1

<span class="token function">max</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span>2<span class="token punctuation">,</span>3<span class="token punctuation">)</span> 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-string\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-9-string\u51FD\u6570" aria-hidden="true">#</a> 2.9 string\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> HELLO

<span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token string">&#39;HELLO&#39;</span><span class="token punctuation">)</span> hello

<span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> 5

<span class="token function">str-index</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ll&#39;</span><span class="token punctuation">)</span> 3 \u7D22\u5F15\u4ECE1\u5F00\u59CB

<span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span>6<span class="token punctuation">)</span> helloaaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-color\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-10-color\u51FD\u6570" aria-hidden="true">#</a> 2.10 color\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>adjust-hue \u8C03\u6574\u989C\u8272\u7684\u8272\u76F8 <span class="token function">adjust-hue</span><span class="token punctuation">(</span><span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>100<span class="token punctuation">,</span>50%<span class="token punctuation">)</span><span class="token punctuation">,</span>137deg<span class="token punctuation">)</span>

lighten \u6539\u53D8\u989C\u8272\u7684\u660E\u5EA6\u53D8\u4EAE <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>100<span class="token punctuation">,</span>50%<span class="token punctuation">)</span><span class="token punctuation">,</span> 30%<span class="token punctuation">)</span> 80%

darken  \u6539\u53D8\u989C\u8272\u7684\u660E\u5EA6\u53D8\u6697 <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>100<span class="token punctuation">,</span>50%<span class="token punctuation">)</span><span class="token punctuation">,</span> 20%<span class="token punctuation">)</span> 30%

saturate \u589E\u52A0\u989C\u8272\u7684\u9971\u548C\u5EA6 saturate <span class="token punctuation">(</span><span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>100%<span class="token punctuation">,</span>50%<span class="token punctuation">)</span><span class="token punctuation">,</span> 20%<span class="token punctuation">)</span> 80%

desaturate \u964D\u4F4E\u989C\u8272\u7684\u9971\u548C\u5EA6 

<span class="token function">opacify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u964D\u4F4E\u900F\u660E\u5EA6

<span class="token function">transparentize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u589E\u52A0\u900F\u660E\u5EA6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-11-list\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-11-list\u51FD\u6570" aria-hidden="true">#</a> 2.11 list\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token function">length</span><span class="token punctuation">(</span>5px 10px<span class="token punctuation">)</span> 2

<span class="token function">nth</span><span class="token punctuation">(</span>5px 10px<span class="token punctuation">,</span> 1<span class="token punctuation">)</span> 5px

<span class="token function">index</span><span class="token punctuation">(</span>1px solid red<span class="token punctuation">,</span> solid<span class="token punctuation">)</span> 2 \u8FD4\u56DE\u5E8F\u53F7

<span class="token function">append</span><span class="token punctuation">(</span>1px solid<span class="token punctuation">,</span> red<span class="token punctuation">)</span> 1px solid red

<span class="token function">join</span><span class="token punctuation">(</span>1px 2px<span class="token punctuation">,</span> 10px 0<span class="token punctuation">)</span> 1px 2px 10px 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-12-map\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-12-map\u51FD\u6570" aria-hidden="true">#</a> 2.12 map\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>length

<span class="token function">map-get</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span><span class="token property">dark</span><span class="token punctuation">:</span>#000<span class="token punctuation">)</span><span class="token punctuation">,</span>dark<span class="token punctuation">)</span> #000

<span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span><span class="token property">dark</span><span class="token punctuation">:</span>#000<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;dark&#39;</span><span class="token punctuation">)</span>

map-values

map-has-key

<span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \u5408\u5E76

<span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-13-boolean\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-13-boolean\u51FD\u6570" aria-hidden="true">#</a> 2.13 boolean\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code>&lt; <span class="token operator">&gt;</span> <span class="token operator">and</span> <span class="token operator">or</span> <span class="token function">not</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-14-interpolation\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-14-interpolation\u8BED\u6CD5" aria-hidden="true">#</a> 2.14 Interpolation\u8BED\u6CD5</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$version</span></span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/*! \u9879\u76EE\u5F53\u524D\u7248\u672C\u662F #{$version} */</span>

<span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> <span class="token string">&quot;border&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.alert-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">#{$attr}</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-15-\u63A7\u5236\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-15-\u63A7\u5236\u6307\u4EE4" aria-hidden="true">#</a> 2.15 \u63A7\u5236\u6307\u4EE4</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@if</span> <span class="token selector">\u6761\u4EF6 </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$theme</span> == dark </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@for</span> <span class="token variable">$var</span> <span class="token keyword">from</span> &lt;\u5F00\u59CB\u503C&gt; <span class="token keyword">through</span> <span class="token selector">&lt;\u7ED3\u675F\u503C&gt; </span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">@for</span> <span class="token variable">$var</span> <span class="token keyword">from</span> <span class="token selector">&lt;\u5F00\u59CB\u503C&gt; to &lt;\u7ED3\u675F\u503C&gt; </span><span class="token punctuation">{</span><span class="token punctuation">}</span> to\u4E0D\u5305\u542B\u7ED3\u675F\u503C\u7684\u5FAA\u73AF
<span class="token property"><span class="token variable">$columns</span></span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector"><span class="token variable">$columns</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.col-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@each</span> 
<span class="token property"><span class="token variable">$icons</span></span><span class="token punctuation">:</span> success error warning<span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$icon</span> in <span class="token variable">$icons</span> </span><span class="token punctuation">{</span>
  .icon-#<span class="token punctuation">{</span>#icon<span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>../images/#<span class="token punctuation">{</span>icon<span class="token punctuation">}</span>.png<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@while</span> <span class="token selector">\u6761\u4EF6 </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$i</span> &gt; 0 </span><span class="token punctuation">{</span>
  <span class="token selector">.item-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 5px <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property"><span class="token variable">$i</span></span><span class="token punctuation">:</span> <span class="token variable">$i</span> <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-16-\u81EA\u5B9A\u4E49\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-16-\u81EA\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a> 2.16 \u81EA\u5B9A\u4E49\u51FD\u6570</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@function</span> \u540D\u5B57<span class="token punctuation">(</span>\u53C2\u65701<span class="token punctuation">,</span> \u53C2\u65702<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">@return</span>

<span class="token punctuation">}</span>

<span class="token keyword">@function</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token property">light</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span><span class="token property">dark</span><span class="token punctuation">:</span>#000<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">color</span><span class="token punctuation">(</span>light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-17-\u8B66\u544A\u6216\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#_2-17-\u8B66\u544A\u6216\u9519\u8BEF" aria-hidden="true">#</a> 2.17 \u8B66\u544A\u6216\u9519\u8BEF</h3><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token keyword">@warn</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

@error <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),i=[t];function c(l,o){return s(),a("div",null,i)}var r=n(p,[["render",c],["__file","Sass\u603B\u7ED3\u7B14\u8BB0.html.vue"]]);export{r as default};
