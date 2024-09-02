import{_ as a,c as s,o as n,V as i}from"./chunks/framework.CthfA3PS.js";const u=JSON.parse('{"title":"JavaScript精度","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/javascript/precision.md","filePath":"frontend/javascript/precision.md","lastUpdated":1717125637000}'),p={name:"frontend/javascript/precision.md"},t=i(`<h1 id="javascript精度" tabindex="-1">JavaScript精度 <a class="header-anchor" href="#javascript精度" aria-label="Permalink to &quot;JavaScript精度&quot;">​</a></h1><h2 id="_1-背景" tabindex="-1">1 背景 <a class="header-anchor" href="#_1-背景" aria-label="Permalink to &quot;1 背景&quot;">​</a></h2><p>主要是在一次面试的过程中，对方问我 <strong>js</strong> 精度的问题，我没有回答上来，平时只留意解决精度不准确的问题（1.放大计算，计算好了再缩小； 2.使用计算库；3. 交给后端计算等），一时半会还真没有想到这个问题是怎么造成的，现在得空，就问 <strong>GPT</strong>，帮我解决心中的疑惑</p><p>在这篇博客中，我们将详细解释为什么会出现这个问题，并介绍一些解决这个问题的方法。</p><h2 id="_2-前言" tabindex="-1">2 前言 <a class="header-anchor" href="#_2-前言" aria-label="Permalink to &quot;2 前言&quot;">​</a></h2><p>Javascript是一种强大的编程语言，可以轻松处理各种数据类型，包括字符串、数字、数组等等。然而，在处理数字问题时，我们有可能遇到小数相加不准确的问题。</p><p>这个问题一直存在于Javascript语言中，它的原因是因为<strong>Javascript采用的是二进制浮点数表示法</strong>。</p><p>在这篇博客中，我们将详细解释为什么会出现这个问题，并介绍一些解决这个问题的方法。</p><h2 id="_3-javascript中小数相加的问题" tabindex="-1">3 Javascript中小数相加的问题 <a class="header-anchor" href="#_3-javascript中小数相加的问题" aria-label="Permalink to &quot;3 Javascript中小数相加的问题&quot;">​</a></h2><h3 id="在javascript中-小数就是浮点数。在进行小数相加时-我们可能会遇到下面这种情况" tabindex="-1">在Javascript中，小数就是浮点数。在进行小数相加时，我们可能会遇到下面这种情况： <a class="header-anchor" href="#在javascript中-小数就是浮点数。在进行小数相加时-我们可能会遇到下面这种情况" aria-label="Permalink to &quot;在Javascript中，小数就是浮点数。在进行小数相加时，我们可能会遇到下面这种情况：&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出0.300000004</span></span></code></pre></div><p>这个结果看起来很奇怪，因为我们期望的输出应该是0.3，而不是0.300000004。这是因为在Javascript中，小数的计算是采用二进制浮点数表示法进行的。在这种表示法中，<strong>一个小数通常是由一个正负符号、一个基数（也称作底数）和一个指数（也称作阶码）组成的</strong>。</p><h3 id="_3-1-二进制无法准确地表示某些十进制小数" tabindex="-1">3.1 二进制无法准确地表示某些十进制小数 <a class="header-anchor" href="#_3-1-二进制无法准确地表示某些十进制小数" aria-label="Permalink to &quot;3.1 二进制无法准确地表示某些十进制小数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 十进制小数在二进制中的表示需要无限位,但计算机只能表示有限位数。</span></span>
<span class="line"><span>2. 比如在十进制中,0.1这个数可以精确地表示,但是转换到二进制后就是0.0001100110011001...(无限循环)。</span></span>
<span class="line"><span>3. 这种无法精确表示的小数在计算机中会产生舍入误差。例如0.1 + 0.2在计算机中不等于0.3,而是0.30000000000000004。</span></span>
<span class="line"><span>这种舍入误差在一些对精度要求很高的应用中会产生问题,比如金融计算、科学计算等。</span></span></code></pre></div><h3 id="_3-2-限位是什么意思" tabindex="-1">3.2 限位是什么意思 <a class="header-anchor" href="#_3-2-限位是什么意思" aria-label="Permalink to &quot;3.2 限位是什么意思&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 计算机使用二进制表示数字,每一位被称为一个&quot;bit&quot;。</span></span>
<span class="line"><span>2. 计算机能表示的数字范围取决于使用的bit数。比如8bit可以表示0到255之间的整数。</span></span>
<span class="line"><span>3. 对于小数,计算机通常会使用固定的小数位数来表示,比如float类型通常使用32bit,可以表示小数点后7位左右。</span></span>
<span class="line"><span>4. 这就造成了&quot;限位&quot;的问题 - 无法用有限的bit数精确表示所有的实数。</span></span>
<span class="line"><span>5. 对于无法精确表示的小数,计算机会进行舍入操作,从而产生微小的误差。这在需要高精度计算的场景下会带来问题</span></span></code></pre></div><h3 id="_3-3-为什么-十进制中-0-1这个数可以精确地表示-但是转换到二进制后就是0-0001100110011001-无限循环" tabindex="-1">3.3 为什么 十进制中,0.1这个数可以精确地表示,但是转换到二进制后就是0.0001100110011001...(无限循环) <a class="header-anchor" href="#_3-3-为什么-十进制中-0-1这个数可以精确地表示-但是转换到二进制后就是0-0001100110011001-无限循环" aria-label="Permalink to &quot;3.3 为什么 十进制中,0.1这个数可以精确地表示,但是转换到二进制后就是0.0001100110011001...(无限循环)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1. 十进制中的0.1可以精确地表示,是因为它是一个&quot;基本&quot;分数,即10的负一次方。在十进制系统中,小数点后的每一位都代表10的负一次方、负二次方等。</span></span>
<span class="line"><span>2. 而在二进制系统中,小数点后的每一位代表2的负一次方、负二次方等。</span></span>
<span class="line"><span>3. 0.1这个数在十进制中等于1/10,但在二进制中无法用有限位数精确表示。</span></span>
<span class="line"><span>4. 将0.1转换成二进制,需要反复除以2并记录余数。此过程会产生无限循环小数0.0001100110011001...。</span></span>
<span class="line"><span>5. 这是因为在二进制系统中,1/10这个分数无法用有限位二进制数精确表示。它是一个无限循环小数。</span></span>
<span class="line"><span>6. 计算机只能用有限位存储数字,因此无法完全精确地表示0.1这样的数字,只能近似表示。这就是导致舍入误差的根本原因。</span></span></code></pre></div><h3 id="_3-4-将0-1转换成二进制-需要反复除以2并记录余数-具体过程" tabindex="-1">3.4 将0.1转换成二进制,需要反复除以2并记录余数 具体过程 <a class="header-anchor" href="#_3-4-将0-1转换成二进制-需要反复除以2并记录余数-具体过程" aria-label="Permalink to &quot;3.4 将0.1转换成二进制,需要反复除以2并记录余数 具体过程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>步骤如下:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>取小数部分0.1</span></span>
<span class="line"><span>将0.1乘以2, 得到 0.2, 记录整数部分0</span></span>
<span class="line"><span>将0.2乘以2, 得到 0.4, 记录整数部分0</span></span>
<span class="line"><span>将0.4乘以2, 得到 0.8, 记录整数部分0</span></span>
<span class="line"><span>将0.8乘以2, 得到 1.6, 记录整数部分1</span></span>
<span class="line"><span>将0.6乘以2, 得到 1.2, 记录整数部分1</span></span>
<span class="line"><span>将0.2乘以2, 得到 0.4, 记录整数部分0</span></span>
<span class="line"><span>重复步骤4-7, 会发现余数不断重复, 形成无限循环小数</span></span>
<span class="line"><span>最终0.1的二进制表示为:0.0001100110011001100110011001100110011...</span></span></code></pre></div><p>计算的时候，是先将小数转换为二进制，有些小数转换为二进制是无限循环小数，计算的时候，就会导致计算不准。</p>`,21),e=[t];function l(h,r,c,o,d,k){return n(),s("div",null,e)}const v=a(p,[["render",l]]);export{u as __pageData,v as default};