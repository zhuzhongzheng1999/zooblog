import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.8b942ccd.js";const o={},e=t(`<h1 id="vscode\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vscode\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> VSCode\u57FA\u672C\u4F7F\u7528</h1><h2 id="\u4E00\u3001\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u4E00\u3001\u73AF\u5883\u642D\u5EFA</h2><h3 id="_1-1-\u5B8C\u5168\u5378\u8F7Dvscode" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B8C\u5168\u5378\u8F7Dvscode" aria-hidden="true">#</a> 1.1. \u5B8C\u5168\u5378\u8F7Dvscode</h3><ol><li>\u5220\u9664\u8BBE\u7F6E\u548C\u914D\u7F6E ~/Library/Application Support/Code</li><li>\u5220\u9664\u6240\u6709\u6269\u5C55 ~/.vscode</li><li>\u5220\u9664\u5E94\u7528</li></ol><h3 id="_1-2-\u5B89\u88C5\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B89\u88C5\u4E0B\u8F7D" aria-hidden="true">#</a> 1.2 \u5B89\u88C5\u4E0B\u8F7D</h3><ol><li>\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\uFF0C\u590D\u5236\u5230Application\u4E2D</li><li>\u5F00\u542F\u540C\u6B65</li><li>\u5B89\u88C5\u4E2D\u6587\u63D2\u4EF6\uFF0C\u91CD\u542F</li><li>\u4F7F\u7528 command + \u5927\u5199 + p \u8F93\u5165 code \u5C06code\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u7EC8\u7AEF\u4E0A \u76F4\u63A5\u4F7F\u7528code\u547D\u4EE4\u6253\u5F00\u6587\u4EF6\u5939</li><li>git.mergeEditor \u5173\u95ED</li></ol><h3 id="_1-3-\u5B89\u88C5\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3-\u5B89\u88C5\u63D2\u4EF6" aria-hidden="true">#</a> 1.3 \u5B89\u88C5\u63D2\u4EF6</h3><ol><li>Material Icon Theme: \u56FE\u6807</li><li>One Dark Pro: \u4E3B\u9898</li><li>chinese: \u4E2D\u6587</li><li>korofileheader: \u5934\u90E8\u6CE8\u91CA</li><li>vetur: vue2\u63D2\u4EF6</li><li>LiveServer: \u672C\u5730\u670D\u52A1</li><li>Image preview: \u56FE\u7247\u9884\u89C8</li><li>Eslint</li><li>prettier</li><li>code runner: \u76F4\u63A5\u8FD0\u884C\u4EE3\u7801</li><li>Tabnine: AI\u4EE3\u7801\u63D0\u793A</li><li>gitlen: \u663E\u793A\u6BCF\u884C\u63D0\u4EA4\u8BB0\u5F55</li><li>npm Intellisense: npm\u5305\u63D0\u793A</li><li>todo-highlight: todo\u6CE8\u91CA\u9AD8\u4EAE</li><li>Turbo Console Log: \u5FEB\u901F\u751F\u6210console</li><li>path-intellisense: path\u63D0\u793A</li><li>CSS Peek: \u70B9\u51FB\u8FDB\u5165\u5230css\u4E2D\u7684class</li><li>editorconfig</li><li>project-manager</li><li>HTML CSS Support: \u652F\u6301css\u7684class\u8865\u5168</li><li>vue-helper: vue\u5C5E\u6027\u548C\u65B9\u6CD5\u8DF3\u8F6C\u3001\u63D0\u793A\u7B49</li></ol><h3 id="_1-4-\u81EA\u5B9A\u4E49settings\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-4-\u81EA\u5B9A\u4E49settings\u914D\u7F6E" aria-hidden="true">#</a> 1.4 \u81EA\u5B9A\u4E49settings\u914D\u7F6E</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>

    <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  icon</span>
    <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro&quot;</span><span class="token punctuation">,</span> <span class="token comment">// theme</span>

    <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>

    <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onFocusChange&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u52A8\u4FDD\u5B58\u65B9\u5F0F</span>

    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token comment">// \u5B57\u4F53</span>
    <span class="token property">&quot;editor.tabCompletion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u51FA\u73B0\u63A8\u8350\u503C\u65F6\uFF0C\u6309\u4E0Btab\u81EA\u52A8\u586B\u5165</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;source.organizeImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// import\u8BED\u53E5\u5B89\u88C5\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.lineNumbers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u884C\u53F7</span>

    <span class="token comment">// git\u76F8\u5173</span>
    <span class="token property">&quot;git.mergeEditor&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u89E3\u51B3\u4E0D\u663E\u793A\u5408\u5E76\u51B2\u7A81 </span>
    <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// koroFileHeader\u63D2\u4EF6</span>
    <span class="token comment">// \u5934\u90E8\u6CE8\u91CA</span>
    <span class="token property">&quot;fileheader.customMade&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u9ED8\u8BA4\u5B57\u6BB5</span>
        <span class="token property">&quot;Description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhuzhongzheng&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Do not edit&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u540E\u9ED8\u8BA4\u8BBE\u7F6E\u6587\u4EF6\u751F\u6210\u65F6\u95F4</span>
        <span class="token property">&quot;LastEditors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhuzhongzheng&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u540E\uFF0C\u4FDD\u5B58\u6587\u4EF6\u66F4\u6539\u9ED8\u8BA4\u66F4\u65B0\u6700\u540E\u7F16\u8F91\u4EBA</span>
        <span class="token property">&quot;LastEditTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Do not edit&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u540E\uFF0C\u4FDD\u5B58\u6587\u4EF6\u66F4\u6539\u9ED8\u8BA4\u66F4\u65B0\u6700\u540E\u7F16\u8F91\u65F6\u95F4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u51FD\u6570\u6CE8\u91CA</span>
    <span class="token property">&quot;fileheader.cursorMode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u9ED8\u8BA4\u5B57\u6BB5</span>
        <span class="token property">&quot;Description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhuzhongzheng&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;return&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u63D2\u4EF6\u914D\u7F6E\u9879</span>
    <span class="token property">&quot;fileheader.configObj&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;autoAdd&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u68C0\u6D4B\u6587\u4EF6\u6CA1\u6709\u5934\u90E8\u6CE8\u91CA\uFF0C\u81EA\u52A8\u6DFB\u52A0\u6587\u4EF6\u5934\u90E8\u6CE8\u91CA</span>
        <span class="token property">&quot;autoAddLine&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u4EF6\u8D85\u8FC7\u591A\u5C11\u884C\u6570 \u4E0D\u518D\u81EA\u52A8\u6DFB\u52A0\u5934\u90E8\u6CE8\u91CA</span>
        <span class="token property">&quot;autoAlready&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EA\u6DFB\u52A0\u63D2\u4EF6\u652F\u6301\u7684\u8BED\u8A00\u4EE5\u53CA\u7528\u6237\u901A\u8FC7\`language\`\u9009\u9879\u81EA\u5B9A\u4E49\u7684\u6CE8\u91CA</span>
        <span class="token property">&quot;supportAutoLanguage&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u4E4B\u540E\uFF0C\u5728\u6570\u7EC4\u5185\u7684\u6587\u4EF6\u624D\u652F\u6301\u81EA\u52A8\u6DFB\u52A0</span>
        <span class="token comment">// \u81EA\u52A8\u6DFB\u52A0\u5934\u90E8\u6CE8\u91CA\u9ED1\u540D\u5355</span>
        <span class="token property">&quot;prohibitAutoAdd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;md&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prohibitItemAutoAdd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;\u9879\u76EE\u7684\u5168\u79F0\u7981\u6B62\u9879\u76EE\u81EA\u52A8\u6DFB\u52A0\u5934\u90E8\u6CE8\u91CA, \u4F7F\u7528\u5FEB\u6377\u952E\u81EA\u884C\u6DFB\u52A0&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;wideSame&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u7B49\u5BBD\u8BBE\u7F6E</span>
        <span class="token property">&quot;wideNum&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u5B57\u6BB5\u957F\u5EA6 \u9ED8\u8BA4\u4E3A13</span>
        <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u7B2C\u51E0\u884C\u63D2\u5165</span>
        <span class="token property">&quot;headInsertLine&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;php&quot;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token comment">// php\u6587\u4EF6 \u63D2\u5165\u5230\u7B2C\u4E8C\u884C</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;beforeAnnotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u4E4B\u524D\u63D2\u5165\u5185\u5BB9</span>
        <span class="token property">&quot;afterAnnotation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5934\u90E8\u6CE8\u91CA\u4E4B\u540E\u63D2\u5165\u5185\u5BB9</span>
        <span class="token property">&quot;specialOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u7279\u6B8A\u5B57\u6BB5\u81EA\u5B9A\u4E49</span>
        <span class="token property">&quot;switch&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;newlineAddAnnotation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u9ED8\u8BA4\u9047\u5230\u6362\u884C\u7B26(\\r\\n \\n \\r)\u6DFB\u52A0\u6CE8\u91CA\u7B26\u53F7</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;moveCursor&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u52A8\u79FB\u52A8\u5149\u6807\u5230Description\u6240\u5728\u884C</span>
        <span class="token property">&quot;dateFormat&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm:ss&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;atSymbol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u66F4\u6539\u6240\u6709\u6587\u4EF6\u7684\u81EA\u5B9A\u4E49\u6CE8\u91CA\u4E2D\u7684@\u7B26\u53F7</span>
        <span class="token property">&quot;atSymbolObj&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//  \u66F4\u6539\u5355\u72EC\u8BED\u8A00/\u6587\u4EF6\u7684@</span>
        <span class="token property">&quot;colon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;: &quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u66F4\u6539\u6240\u6709\u6587\u4EF6\u7684\u6CE8\u91CA\u5192\u53F7</span>
        <span class="token property">&quot;colonObj&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//  \u66F4\u6539\u5355\u72EC\u8BED\u8A00/\u6587\u4EF6\u7684\u5192\u53F7</span>
        <span class="token property">&quot;filePathColon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8DEF\u5F84\u5206\u9694\u7B26\u66FF\u6362&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u503C\uFF1A mac: / window\u662F: \\</span>
        <span class="token property">&quot;showErrorMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u663E\u793A\u63D2\u4EF6\u9519\u8BEF\u901A\u77E5 \u7528\u4E8Edebugger</span>
        <span class="token property">&quot;CheckFileChange&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u4E2A\u6587\u4EF6\u4FDD\u5B58\u65F6\u8FDB\u884Cdiff\u68C0\u67E5</span>
        <span class="token property">&quot;createHeader&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u5EFA\u6587\u4EF6\u81EA\u52A8\u6DFB\u52A0\u5934\u90E8\u6CE8\u91CA</span>
        <span class="token property">&quot;useWorker&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u4F7F\u7528\u5DE5\u4F5C\u533A\u8BBE\u7F6E</span>
        <span class="token property">&quot;designAddHead&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u6DFB\u52A0\u6CE8\u91CA\u56FE\u6848\u65F6\u6DFB\u52A0\u5934\u90E8\u6CE8\u91CA</span>
        <span class="token property">&quot;typeParam&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9009\u9879\u7528\u4E8E\u63A7\u5236\u51FD\u6570\u6CE8\u91CA\u53C2\u6570\u662F\u5426\u9700\u8981{type}, \u9ED8\u8BA4\u9700\u8981</span>
        <span class="token comment">// \u81EA\u5B9A\u4E49\u8BED\u8A00\u6CE8\u91CA\u7B26\u53F7\uFF0C\u8986\u76D6\u63D2\u4EF6\u7684\u6CE8\u91CA\u683C\u5F0F</span>
        <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u9ED8\u8BA4\u6CE8\u91CA  \u6CA1\u6709\u5339\u914D\u5230\u6CE8\u91CA\u7B26\u53F7\u7684\u65F6\u5019\u4F7F\u7528\u3002</span>
        <span class="token property">&quot;annotationStr&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;head&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;middle&quot;</span><span class="token operator">:</span> <span class="token string">&quot; * @&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;end&quot;</span><span class="token operator">:</span> <span class="token string">&quot; */&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// tabnine</span>
    <span class="token property">&quot;tabnine.experimentalAutoImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[e];function l(c,i){return s(),a("div",null,p)}var k=n(o,[["render",l],["__file","VScode\u57FA\u672C\u4F7F\u7528.html.vue"]]);export{k as default};
