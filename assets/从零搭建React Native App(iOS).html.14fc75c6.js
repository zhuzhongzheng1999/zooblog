import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.8b942ccd.js";const e={},p=t(`<h1 id="\u4ECE\u96F6\u642D\u5EFAreactnative-app-ios-swift\u7248" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u96F6\u642D\u5EFAreactnative-app-ios-swift\u7248" aria-hidden="true">#</a> \u4ECE\u96F6\u642D\u5EFAReactNative App(iOS-Swift\u7248)</h1><h2 id="\u4E00\u3001\u73AF\u5883\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u73AF\u5883\u8BF4\u660E" aria-hidden="true">#</a> \u4E00\u3001\u73AF\u5883\u8BF4\u660E</h2><ul><li><p>Mac\u7535\u8111</p></li><li><p>Xcode: 12.5</p></li><li><p>Swift</p></li><li><p>ReactNative: 0.66.0-rc.3</p></li><li><p>react-navigation: 6.0.8</p></li></ul><h2 id="\u4E8C\u3001\u5FEB\u901F\u642D\u5EFAapp" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5FEB\u901F\u642D\u5EFAapp" aria-hidden="true">#</a> \u4E8C\u3001\u5FEB\u901F\u642D\u5EFAApp</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7DReactNative</span>
npx react-native init RN066RC3 --version <span class="token number">0.66</span>.0-rc.3
<span class="token comment"># \u8FD0\u884C</span>
<span class="token function">npm</span> run ios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09\u3001\u5BFC\u5165\u73B0\u6709ios\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5BFC\u5165\u73B0\u6709ios\u9879\u76EE" aria-hidden="true">#</a> \u4E09\u3001\u5BFC\u5165\u73B0\u6709iOS\u9879\u76EE</h2><ul><li>\u5220\u9664\u6389iOS\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</li><li>\u5C06\u73B0\u6709\u7684iOS\u9879\u76EE\u62F7\u8D1D\u5230iOS\u76EE\u5F55\u4E0B</li><li>\u5220\u9664\u6389<code>Podfile.lock</code>\u548C<code>pod</code>\u6587\u4EF6\u5939</li><li>\u5C06\u4E0B\u9762\u5185\u5BB9\u62F7\u8D1D\u5230<code>podfile</code>\u6587\u4EF6\u4E2D,\u5E76\u6DFB\u52A0\u81EA\u5DF1\u9700\u8981\u7684\u4F9D\u8D56\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>require_relative &#39;../node_modules/react-native/scripts/react_native_pods&#39;
require_relative &#39;../node_modules/@react-native-community/cli-platform-ios/native_modules&#39;


platform :ios, &#39;11.0&#39;

target &#39;SwiftRn&#39; do
  use_frameworks!
  config = use_native_modules!


  use_react_native!(
    :path =&gt; config[:reactNativePath],
    # to enable hermes on iOS, change \`false\` to \`true\` and then install pods
    :hermes_enabled =&gt; false
  )


  # Enables Flipper.
  #
  # Note that if you have use_frameworks! enabled, Flipper will not work and
  # you should disable the next line.
  # use_flipper!()

  post_install do |installer|
    react_native_post_install(installer)
    __apply_Xcode_12_5_M1_post_install_workaround(installer)
  end

  pod &#39;AFNetworking&#39;
  pod &#39;SnapKit&#39;
  pod &#39;SVProgressHUD&#39;
	
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6253\u5F00<code>index.js</code>\u6587\u4EF6,<code>AppRegistry.registerComponent(appName, () =&gt; App);</code>\u4FEE\u6539\u8FD9\u91CC\u7684<code>appName</code>\u4E0E<code>RCTRootView</code>\u4E2D\u7684\u4EE3\u7801\u4FDD\u6301\u4E00\u81F4</li><li>\u8FD0\u884C<code>yarn install</code> \u5B89\u88C5\u4F9D\u8D56</li><li>\u8FDB\u5165ios\u76EE\u5F55\u4E0B\u8FD0\u884C<code>pod install</code> \u5B89\u88C5\u4F9D\u8D56</li></ul><h2 id="\u56DB\u3001ios\u5DE5\u7A0B\u4E2D\u5F15\u5165rn\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001ios\u5DE5\u7A0B\u4E2D\u5F15\u5165rn\u754C\u9762" aria-hidden="true">#</a> \u56DB\u3001iOS\u5DE5\u7A0B\u4E2D\u5F15\u5165RN\u754C\u9762</h2><h3 id="_4-1-\u540C\u6B65\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-1-\u540C\u6B65\u8C03\u8BD5" aria-hidden="true">#</a> 4.1 \u540C\u6B65\u8C03\u8BD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD0\u884CRN\u4EE3\u7801</span>
<span class="token function">yarn</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//  \u4FEE\u6539iOS\u4EE3\u7801</span>
<span class="token comment">//  AppDelegate.swift</span>
<span class="token comment">//  SwiftRn</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by zhuzhongzheng on 2022/3/5.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">UIKit</span>
<span class="token keyword">import</span> <span class="token class-name">React</span>

<span class="token attribute atrule">@main</span>
<span class="token keyword">class</span> <span class="token class-name">AppDelegate</span><span class="token punctuation">:</span> <span class="token class-name">UIResponder</span><span class="token punctuation">,</span> <span class="token class-name">UIApplicationDelegate</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">var</span> window<span class="token punctuation">:</span> <span class="token class-name">UIWindow</span><span class="token operator">?</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span> didFinishLaunchingWithOptions launchOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">LaunchOptionsKey</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        window <span class="token operator">=</span> <span class="token class-name">UIWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
		<span class="token keyword">let</span> jsCodeLocation <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;http://localhost:8081/index.bundle?platform=ios&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> rnView <span class="token operator">=</span> <span class="token class-name">RCTRootView</span><span class="token punctuation">(</span>
            bundleURL<span class="token punctuation">:</span> jsCodeLocation<span class="token operator">!</span> <span class="token keyword">as</span> <span class="token constant">URL</span><span class="token punctuation">,</span>
            moduleName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;SwiftRn&quot;</span></span><span class="token punctuation">,</span>
            initialProperties<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span>
            launchOptions<span class="token punctuation">:</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">let</span> rootViewController <span class="token operator">=</span> <span class="token class-name">UIViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        rootViewController<span class="token punctuation">.</span>view <span class="token operator">=</span> rnView
        
        window<span class="token operator">?</span><span class="token punctuation">.</span>rootViewController <span class="token operator">=</span> rootViewController
        window<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makeKeyAndVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">Log</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>message<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span> fileName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token literal constant">#file</span><span class="token punctuation">,</span> funcName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token literal constant">#function</span><span class="token punctuation">,</span> lineNum<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token literal constant">#line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token directive property"><span class="token directive-name">#if</span> DEBUG</span>
        
        <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token punctuation">(</span>fileName <span class="token keyword">as</span> <span class="token class-name">NSString</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lastPathComponent
        
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">funcName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">-[</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">lineNum</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">]: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">message</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        
    <span class="token directive property"><span class="token directive-name">#endif</span></span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#_4-2-\u6253\u5305" aria-hidden="true">#</a> 4.2 \u6253\u5305</h3><ul><li>\u5728<code>package.json</code>\u4E2D\u6DFB\u52A0<code>&quot;buildios&quot;: &quot;react-native bundle --entry-file index.js --dev false --bundle-output ./ios/jsbundle/index.ios.jsbundle --assets-dest ./ios/assets --platform ios&quot;</code>\u547D\u4EE4</li><li>\u5728ios\u6587\u4EF6\u5939\u4E2D\u521B\u5EFAjsbundle \u548C assets\u6587\u4EF6\u5939,\u5E76\u62D6\u62FD\u81F3xcode\u5DE5\u7A0B\u4E2D,\u9009\u62E9create folder references</li><li>\u8FD0\u884C <code>yarn run buildios</code>\u547D\u4EE4 \u751F\u6210<code>jsbundle</code>\u6587\u4EF6\u548C<code>assets</code>\u4E0B\u7684\u8D44\u6E90\u6587\u4EF6</li><li>\u4FEE\u6539<code>AppDelegate.swift</code>\u6587\u4EF6</li></ul><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//</span>
<span class="token comment">//  AppDelegate.swift</span>
<span class="token comment">//  SwiftRn</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by zhuzhongzheng on 2022/3/5.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">UIKit</span>
<span class="token keyword">import</span> <span class="token class-name">React</span>

<span class="token attribute atrule">@main</span>
<span class="token keyword">class</span> <span class="token class-name">AppDelegate</span><span class="token punctuation">:</span> <span class="token class-name">UIResponder</span><span class="token punctuation">,</span> <span class="token class-name">UIApplicationDelegate</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> window<span class="token punctuation">:</span> <span class="token class-name">UIWindow</span><span class="token operator">?</span>
    <span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span> didFinishLaunchingWithOptions launchOptions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">UIApplication</span><span class="token punctuation">.</span><span class="token class-name">LaunchOptionsKey</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span> 
        window <span class="token operator">=</span> <span class="token class-name">UIWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> jsCodeLocation <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;jsbundle/index.ios&quot;</span></span><span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;jsbundle&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> rnView <span class="token operator">=</span> <span class="token class-name">RCTRootView</span><span class="token punctuation">(</span>
            bundleURL<span class="token punctuation">:</span> jsCodeLocation<span class="token operator">!</span> <span class="token keyword">as</span> <span class="token constant">URL</span><span class="token punctuation">,</span>
            moduleName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;SwiftRn&quot;</span></span><span class="token punctuation">,</span>
            initialProperties<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span>
            launchOptions<span class="token punctuation">:</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">let</span> rootViewController <span class="token operator">=</span> <span class="token class-name">UIViewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        rootViewController<span class="token punctuation">.</span>view <span class="token operator">=</span> rnView
        
        window<span class="token operator">?</span><span class="token punctuation">.</span>rootViewController <span class="token operator">=</span> rootViewController
        window<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">makeKeyAndVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">Log</span><span class="token operator">&lt;</span><span class="token class-name">T</span><span class="token operator">&gt;</span> <span class="token punctuation">(</span>message<span class="token punctuation">:</span> <span class="token class-name">T</span><span class="token punctuation">,</span> fileName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token literal constant">#file</span><span class="token punctuation">,</span> funcName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token literal constant">#function</span><span class="token punctuation">,</span> lineNum<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token literal constant">#line</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token directive property"><span class="token directive-name">#if</span> DEBUG</span>
        
        <span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token punctuation">(</span>fileName <span class="token keyword">as</span> <span class="token class-name">NSString</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lastPathComponent
        
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;-</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">file</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">funcName</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">-[</span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">lineNum</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">]: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">message</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span></span><span class="token punctuation">)</span>
        
    <span class="token directive property"><span class="token directive-name">#endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u6253\u5305\u547D\u4EE4\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_4-3-\u6253\u5305\u547D\u4EE4\u8BF4\u660E" aria-hidden="true">#</a> 4.3 \u6253\u5305\u547D\u4EE4\u8BF4\u660E</h3><ul><li><code>--entry-file &lt;path&gt;</code>\uFF1A\u914D\u7F6E\u5165\u53E3JS\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u76F8\u5BF9\u4E8E\u6839\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</li><li><code>--platform [string]</code>\uFF1A\u9700\u8981\u7F16\u8BD1\u7684\u5E73\u53F0\uFF0C\u201Cios\u201D\u6216\u201Candroid\u201D(\u9ED8\u8BA4:ios)\u3002</li><li><code>--transformer [string]</code>\uFF1A\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u4EE3\u7801\u8F6C\u6362\u5DE5\u5177\u3002</li><li><code>--dev [boolean]</code>\uFF1A\u662F\u5426\u4F7F\u7528\u5F00\u53D1\u8005\u73AF\u5883\uFF0C\u5982\u679C\u662Ffalse\uFF0C\u5219\u7981\u7528\u8B66\u544A\u5E76\u5C06\u538B\u7F29\u4EE3\u7801(\u9ED8\u8BA4\u4E3Atrue)\u3002</li><li><code>--minify [boolean]</code>\uFF1A\u662F\u5426\u538B\u7F29\u4EE3\u7801\u3002\u5982\u679Cdev\u4E3A\u771F\uFF0C\u5219\u9ED8\u8BA4\u4E3Afalse\uFF0C\u5982\u679Cdev\u4E3Afalse\uFF0C\u5219\u4E3Atrue\u3002\u7981\u7528\u8FF7\u4F60\u5316\u53EF\u4EE5\u52A0\u901F\u6784\u5EFA\uFF0C\u5BF9\u4E8E\u6D4B\u8BD5\u662F\u5F88\u6709\u7528\u7684\u3002</li><li><code>--bundle-output &lt;path&gt;</code>\uFF1Abundle\u7684\u8F93\u51FA\u8DEF\u5F84\uFF0C\u7528\u4E8E\u5B58\u50A8\u6240\u6253\u5305\u540E\u7684\u4EE3\u7801\u3002</li><li><code>--bundle-encoding [string]</code>\uFF1A\u7F16\u7801\u3002(\u9ED8\u8BA4\u503C:utf8)\u3002</li><li><code>--max-workers [number]</code>\uFF1A\u6307\u5B9A\u7528\u4E8E\u8F6C\u6362\u6587\u4EF6\u7684\u6700\u5927\u5DE5\u4F5C\u6C60\u3002\u8FD9\u4E2A\u9ED8\u8BA4\u503C\u662F\u7535\u8111\u53EF\u7528\u7684\u5185\u6838\u6570\u3002</li><li><code>--sourcemap-output [string]</code>\uFF1Asourcemap\u7684\u8F93\u51FA\u6587\u4EF6\u540D\u3002</li><li><code>--sourcemap-sources-root [string]</code>\uFF1Asourcemap\u7684\u8F93\u51FA\u76EE\u5F55\uFF08\u9ED8\u8BA4\u8981\u5199\u76F8\u5BF9\u8DEF\u5F84\uFF09\u3002</li><li><code>--sourcemap-use-absolute-path</code>\uFF1A\u542F\u7528sourcemap\u8F93\u51FA\u76EE\u5F55\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u3002</li><li><code>--assets-dest [string]</code>\uFF1Abundle\u4E2D\u5F15\u7528\u7684\u6587\u4EF6\u76EE\u5F55\u540D\u79F0\u3002</li><li><code>--verbose</code>\uFF1A\u542F\u7528\u65E5\u5FD7\u3002</li><li><code>--reset-cache</code>\uFF1A\u5220\u9664\u7F13\u5B58\u6587\u4EF6\u3002</li><li><code>--read-global-cache</code>\uFF1A\u4ECE\u5168\u5C40\u7F13\u5B58\u4E2D\u83B7\u53D6\u8F6C\u6362\u7684JS\u4EE3\u7801\u3002</li><li><code>--config [string]</code>\uFF1A\u6307\u5B9A\u4E00\u4E2ACLI\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u3002</li><li><code>-h, --help</code>\uFF1A\u4F7F\u7528\u5E2E\u52A9\u3002</li></ul><h2 id="\u4E94\u3001ios\u4E0Ern\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001ios\u4E0Ern\u901A\u4FE1" aria-hidden="true">#</a> \u4E94\u3001iOS\u4E0ERN\u901A\u4FE1</h2><h3 id="_5-1-\u521B\u5EFA\u4E00\u4E2Aswift\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-1-\u521B\u5EFA\u4E00\u4E2Aswift\u6587\u4EF6" aria-hidden="true">#</a> 5.1 \u521B\u5EFA\u4E00\u4E2ASwift\u6587\u4EF6</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token comment">//</span>
<span class="token comment">//  SwiftRnInteractionManager.swift</span>
<span class="token comment">//  SwiftRn</span>
<span class="token comment">//</span>
<span class="token comment">//  Created by zhuzhongzheng on 2022/3/5.</span>
<span class="token comment">//</span>

<span class="token keyword">import</span> <span class="token class-name">React</span>
<span class="token keyword">import</span> <span class="token class-name">UIKit</span>

<span class="token comment">// Swift\u66B4\u9732\u7ED9Rn\u7684\u6A21\u5757\u548C\u65B9\u6CD5</span>
<span class="token attribute atrule">@objc</span><span class="token punctuation">(</span><span class="token class-name">SwiftMethodsExporter</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">SwiftMethodsExporter</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u51B3GCD\u51FA\u73B0\u7684\u8B66\u544A</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">requiresMainQueueSetup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// return false \u4EE5\u8BA9\u5B83\u5728\u5355\u72EC\u7684\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u3002</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  
  	<span class="token comment">// RN\u8C03\u7528\u539F\u751F\u7684\u65B9\u6CD5\u65F6,\u5728\u4E3B\u7EBF\u7A0B\u4E2D\u8C03\u7528</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">var</span> methodQueue<span class="token punctuation">:</span> <span class="token class-name">DispatchQueue</span><span class="token operator">!</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">.</span>main
    <span class="token punctuation">}</span>

    <span class="token comment">// \u539F\u751F\u6A21\u5757\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E9B\u5E38\u91CF\uFF0C\u8FD9\u4E9B\u5E38\u91CF\u5728JS\u7AEF\u968F\u65F6\u90FD\u53EF\u4EE5\u8BBF\u95EE\u4F20\u9012\u4E00\u4E9B\u9759\u6001\u6570\u636E\uFF0C\u53EF\u4EE5\u907F\u514D\u901A\u8FC7 bridge \u8FDB\u884C\u4E00\u6B21\u6765\u56DE\u4EA4\u4E92\u3002</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">func</span> <span class="token function-definition function">constantsToExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span><span class="token operator">!</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;constantKey&quot;</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;constantValue&quot;</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4E0D\u643A\u5E26\u53C2\u6570\u7684\u66B4\u9732\u7ED9Rn\u7684\u65B9\u6CD5</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">func</span> <span class="token function-definition function">swiftMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;swiftMethod&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u5E26\u6709\u53C2\u6570\u7684\u53EF\u4F9BRN\u8C03\u7528\u7684\u65B9\u6CD5</span>
    <span class="token attribute atrule">@objc</span><span class="token punctuation">(</span>swiftMethodWith<span class="token punctuation">:</span>age<span class="token punctuation">:</span><span class="token punctuation">)</span>
    <span class="token keyword">func</span> <span class="token function-definition function">swiftMethodWith</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;swiftMethodWith name: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> age: </span><span class="token interpolation-punctuation punctuation">\\(</span><span class="token interpolation">age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// React Native bridge\u662F\u5F02\u6B65\u7684\uFF0C\u56E0\u6B64\u5C06\u7ED3\u679C\u4F20\u9012\u7ED9JS\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u4F7F\u7528\u56DE\u8C03\u6216\u89E6\u53D1\u4E8B\u4EF6</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">func</span> <span class="token function-definition function">swiftMethodCallback</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> callback<span class="token punctuation">:</span> <span class="token class-name">RCTResponseSenderBlock</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4F20\u9012\u7ED9JS\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570,\u4F9BJS\u8C03\u7528\u6765\u83B7\u53D6Swift\u7684\u7ED3\u679C NSNull\u4E3Aerror</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">NSNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;CallbackValue&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u7528\u6237\u8C03\u7528Rn\u65B9\u6CD5\u7684\u7C7B</span>
<span class="token attribute atrule">@objc</span><span class="token punctuation">(</span><span class="token class-name">RnEventEmitter</span><span class="token punctuation">)</span>
<span class="token keyword">open</span> <span class="token keyword">class</span> <span class="token class-name">RnEventEmitter</span><span class="token punctuation">:</span> <span class="token class-name">RCTEventEmitter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">var</span> emitter<span class="token punctuation">:</span> <span class="token class-name">RnEventEmitter</span><span class="token operator">?</span>

    <span class="token keyword">override</span> <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token class-name">RnEventEmitter</span><span class="token punctuation">.</span>emitter <span class="token operator">=</span> <span class="token keyword">self</span>
    <span class="token punctuation">}</span>
    
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token function-definition function">requiresMainQueueSetup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token comment">// return false \u4EE5\u8BA9\u5B83\u5728\u5355\u72EC\u7684\u7EBF\u7A0B\u4E2D\u8FD0\u884C\u3002</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Rn\u76D1\u542C\u7684\u65B9\u6CD5,\u4E5F\u5C31\u662F\u53EF\u4EE5\u4F9BSwift\u8C03\u7528\u7684\u65B9\u6CD5\u7684\u96C6\u5408</span>
    <span class="token attribute atrule">@objc</span>
    <span class="token keyword">open</span> <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">supportedEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;onTestEvent&quot;</span></span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-\u521B\u5EFA\u4E00\u4E2A-m\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-2-\u521B\u5EFA\u4E00\u4E2A-m\u6587\u4EF6" aria-hidden="true">#</a> 5.2 \u521B\u5EFA\u4E00\u4E2A<code>.m</code>\u6587\u4EF6</h3><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>//
//  SwiftRnInteractionManager.m
//  SwiftRn
//
//  Created by zhuzhongzheng on 2022/3/5.
//

#import &lt;Foundation/Foundation.h&gt;

#import &lt;React/RCTBridgeModule.h&gt;
#import &lt;React/RCTEventEmitter.h&gt;


// RCT_EXTERN_MODULE \u662F\u66B4\u9732\u7ED9RN\u7684\u6A21\u5757  Rn\u901A\u8FC7NativeModules\u83B7\u53D6\u6A21\u5757

// Swift\u66B4\u9732\u7ED9Rn\u7684\u6A21\u5757\u548C\u65B9\u6CD5
@interface RCT_EXTERN_MODULE (SwiftMethodsExporter, NSObject)
    // \u66B4\u9732\u7ED9RN\u7684swift\u65B9\u6CD5
    RCT_EXTERN_METHOD(swiftMethod)
    RCT_EXTERN_METHOD(swiftMethodWith : (NSString *) name age : (NSInteger)age)
    RCT_EXTERN_METHOD(swiftMethodCallback : (RCTResponseSenderBlock)callback)
@end


// \u66B4\u9732\u7ED9Rn\u7528\u4E8E\u76D1\u542C\u4E8B\u4EF6\u7684\u6A21\u5757
@interface RCT_EXTERN_MODULE (RnEventEmitter, RCTEventEmitter)
    RCT_EXTERN_METHOD(supportedEvents)
@end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-\u540C\u65F6\u4F1A\u751F\u6210\u4E00\u4E2Abridging-header-h\u6865\u63A5\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-3-\u540C\u65F6\u4F1A\u751F\u6210\u4E00\u4E2Abridging-header-h\u6865\u63A5\u6587\u4EF6" aria-hidden="true">#</a> 5.3 \u540C\u65F6\u4F1A\u751F\u6210\u4E00\u4E2A<code>Bridging-Header.h</code>\u6865\u63A5\u6587\u4EF6</h3><div class="language-c++ ext-c++ line-numbers-mode"><pre class="language-c++"><code>//
//  Created by zhuzhongzheng on 2022/3/5.
//

// Swift\u4E0ERn\u4EA4\u4E92\u9700\u8981\u4F7F\u7528\u7684\u5934\u6587\u4EF6
#import &lt;React/RCTBridgeModule.h&gt;
#import &lt;React/RCTBridge.h&gt;
#import &lt;React/RCTEventDispatcher.h&gt;
#import &lt;React/RCTEventEmitter.h&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-rn\u8C03\u7528\u539F\u751F\u7684\u65B9\u6CD5\u53CA\u76D1\u542Cios\u8C03\u7528rn\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-4-rn\u8C03\u7528\u539F\u751F\u7684\u65B9\u6CD5\u53CA\u76D1\u542Cios\u8C03\u7528rn\u7684\u65B9\u6CD5" aria-hidden="true">#</a> 5.4 RN\u8C03\u7528\u539F\u751F\u7684\u65B9\u6CD5\u53CA\u76D1\u542CiOS\u8C03\u7528RN\u7684\u65B9\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: RN\u9996\u9875
 * @Author: zhuzhongzheng
 * @Date: 2022-03-03 15:11:25
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-03-05 19:34:08
 */</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  View<span class="token punctuation">,</span>
  Text<span class="token punctuation">,</span>
  StyleSheet<span class="token punctuation">,</span>
  SafeAreaView<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  NativeModules<span class="token punctuation">,</span>
  NativeEventEmitter<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6Swift\u66B4\u9732\u51FA\u6765\u7684\u6A21\u5757 \u4E5F\u5C31\u662Fswift\u91CC\u7684RCT_EXTERN_MODULE\u66B4\u9732\u51FA\u6765\u7684</span>
<span class="token comment">// SwiftMethodsExporter \u4E3A\u66B4\u9732\u51FA\u6765\u4F9BRn\u8C03\u7528\u7684\u65B9\u6CD5</span>
<span class="token comment">// RNEventEmitter \u662F\u7528\u4E8E\u6DFB\u52A0\u76D1\u542C\u4E8B\u4EF6,\u4F9BSwift\u8C03\u7528</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> SwiftMethodsExporter<span class="token punctuation">,</span> RnEventEmitter <span class="token punctuation">}</span> <span class="token operator">=</span> NativeModules<span class="token punctuation">;</span>
<span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeEventEmitter</span><span class="token punctuation">(</span>RnEventEmitter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> subscription

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">onTextEventValue</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">swiftCallbackValue</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6DFB\u52A0\u76D1\u542C\u4E8B\u4EF6</span>
    subscription <span class="token operator">=</span> eventEmitter<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&quot;onTestEvent&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTestEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u539F\u751F\u6A21\u5757\u53EF\u4EE5\u5BFC\u51FA\u4E00\u4E9B\u5E38\u91CF</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>SwiftMethodsExporter<span class="token punctuation">.</span>constantKey<span class="token punctuation">,</span> <span class="token string">&quot;constantKey&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  
  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D6\u6D88\u8BA2\u9605\uFF0C\u901A\u5E38\u5728componentWillUnmount\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\u5B9E\u73B0\u3002</span>
    subscription<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>SafeAreaView<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>View style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u539F\u751F\u4F20\u9012\u8FC7\u6765\u7684\u5E38\u91CF<span class="token operator">:</span><span class="token punctuation">{</span>SwiftMethodsExporter<span class="token punctuation">.</span>constantKey<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&gt;</span>Swift\u521D\u59CB\u5316\u9875\u9762\u65F6\u4F20\u9012\u8FC7\u6765\u7684\u503C<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>swiftSendMsg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&gt;</span>Swift\u8C03\u7528Rn\u7684\u65B9\u6CD5\u4F20\u9012\u8FC7\u6765\u7684\u503C<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>onTextEventValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&gt;</span>Rn\u8C03\u7528Swift\u56DE\u8C03\u56DE\u6765\u7684\u503C<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>swiftCallbackValue<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Button title<span class="token operator">=</span><span class="token string">&quot;\u8C03\u7528Swift\u7684\u65B9\u6CD5&quot;</span> onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>swiftMethods<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>View<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>SafeAreaView<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8C03\u7528Swift\u7684\u67D0\u4E2A\u51FD\u6570</span>
  <span class="token function-variable function">swiftMethods</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    SwiftMethodsExporter<span class="token punctuation">.</span><span class="token function">swiftMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    SwiftMethodsExporter<span class="token punctuation">.</span><span class="token function">swiftMethodWith</span><span class="token punctuation">(</span><span class="token string">&quot;zzz&quot;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u56DE\u8C03,\u53EF\u4EE5\u83B7\u53D6Swift\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E</span>
    SwiftMethodsExporter<span class="token punctuation">.</span><span class="token function">swiftMethodCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;swiftMethodCallback&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">swiftCallbackValue</span><span class="token operator">:</span> msg
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onTestEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">onTextEventValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lineHeight</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-ios\u8C03\u7528rn\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-5-ios\u8C03\u7528rn\u65B9\u6CD5" aria-hidden="true">#</a> 5.5 iOS\u8C03\u7528RN\u65B9\u6CD5</h3><div class="language-swift ext-swift line-numbers-mode"><pre class="language-swift"><code><span class="token class-name">RnEventEmitter</span><span class="token punctuation">.</span>emitter<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">sendEvent</span><span class="token punctuation">(</span>withName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">&quot;onTestEvent&quot;</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;data&quot;</span></span><span class="token punctuation">:</span><span class="token string-literal"><span class="token string">&quot;swift&quot;</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u516D\u3001rn\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001rn\u8DEF\u7531" aria-hidden="true">#</a> \u516D\u3001RN\u8DEF\u7531</h2><h3 id="_6-1-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_6-1-\u4F9D\u8D56" aria-hidden="true">#</a> 6.1 \u4F9D\u8D56</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &quot;@react-navigation/native&quot;: &quot;^6.0.8&quot;,
 &quot;@react-navigation/native-stack&quot;: &quot;^6.5.0&quot;,
 &quot;react-native-safe-area-context&quot;: &quot;^4.1.2&quot;,
 &quot;react-native-screens&quot;: &quot;^3.13.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-\u5165\u53E3\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5165\u53E3\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> 6.2 \u5165\u53E3\u6587\u4EF6\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: \u5165\u53E3\u6587\u4EF6
 * @Author: zhuzhongzheng
 * @Date: 2022-03-03 15:11:25
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-03-07 14:40:09
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>AppRegistry<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-native&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navigator <span class="token keyword">from</span> <span class="token string">&#39;./Navigator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>name <span class="token keyword">as</span> appName<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.json&#39;</span><span class="token punctuation">;</span>

AppRegistry<span class="token punctuation">.</span><span class="token function">registerComponent</span><span class="token punctuation">(</span>appName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Navigator<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-\u8DEF\u7531\u6587\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6-3-\u8DEF\u7531\u6587\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> 6.3 \u8DEF\u7531\u6587\u4EF6\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: RN\u9996\u9875
 * @Author: zhuzhongzheng
 * @Date: 2022-03-03 15:11:25
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-03-09 12:04:58
 */</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NavigationContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@react-navigation/native&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createNativeStackNavigator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@react-navigation/native-stack&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> HomeScreen <span class="token keyword">from</span> <span class="token string">&quot;./src/pages/HomeScreen&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DetailScreen <span class="token keyword">from</span> <span class="token string">&quot;./src/pages/DetailScreen&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Stack <span class="token operator">=</span> <span class="token function">createNativeStackNavigator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Navigator</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>NavigationContainer<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Navigator initialRouteName<span class="token operator">=</span><span class="token string">&quot;Home&quot;</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen 
        	name<span class="token operator">=</span><span class="token string">&quot;Home&quot;</span> 
        	component<span class="token operator">=</span><span class="token punctuation">{</span>HomeScreen<span class="token punctuation">}</span> 
    		options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u9996\u9875&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    	  <span class="token operator">/</span><span class="token operator">&gt;</span>
		  <span class="token operator">&lt;</span>Stack<span class="token punctuation">.</span>Screen 
        	name<span class="token operator">=</span><span class="token string">&quot;Detail&quot;</span> 
        	component<span class="token operator">=</span><span class="token punctuation">{</span>DetailScreen<span class="token punctuation">}</span> 
    		options<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;\u8BE6\u60C5\u9875&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    	  <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Stack<span class="token punctuation">.</span>Navigator<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>NavigationContainer<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Navigator<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-homescreen-js\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-4-homescreen-js\u6587\u4EF6" aria-hidden="true">#</a> 6.4 HomeScreen.js\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description:
 * @Author: zhuzhongzheng
 * @Date: 2022-03-07 14:38:21
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-03-10 16:22:23
 */</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SafeAreaView<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>SafeAreaView<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button
          title<span class="token operator">=</span><span class="token string">&quot;\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875&quot;</span>
          onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;Detail&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>SafeAreaView<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomeScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-detailscreen-js\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-5-detailscreen-js\u6587\u4EF6" aria-hidden="true">#</a> 6.5 DetailScreen.js\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description:
 * @Author: zhuzhongzheng
 * @Date: 2022-03-07 14:38:21
 * @LastEditors: zhuzhongzheng
 * @LastEditTime: 2022-03-10 16:22:23
 */</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> SafeAreaView<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-native&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DetailScreen</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>SafeAreaView<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Button
          title<span class="token operator">=</span><span class="token string">&quot;\u8DF3\u8F6C\u5230\u9996\u9875&quot;</span>
          onPress<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>navigation<span class="token punctuation">.</span><span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&quot;Home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>SafeAreaView<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DetailScreen<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2><ul><li>RN\u7EC4\u4EF6</li><li>RN\u4E2D\u4F7F\u7528\u539F\u751F\u7EC4\u4EF6</li><li>\u539F\u751F\u4E2D\u4F7F\u7528RN\u7EC4\u4EF6</li></ul>`,42),o=[p];function i(l,c){return s(),a("div",null,o)}var d=n(e,[["render",i],["__file","\u4ECE\u96F6\u642D\u5EFAReact Native App(iOS).html.vue"]]);export{d as default};
