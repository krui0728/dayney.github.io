import{_ as s,c as a,o as n,V as e}from"./chunks/framework.C-fAE6Ku.js";const _=JSON.parse('{"title":"SASS 使用小技巧","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/css/sassTips.md","filePath":"frontend/css/sassTips.md","lastUpdated":1720771546000}'),i={name:"frontend/css/sassTips.md"},t=e(`<h1 id="sass-使用小技巧" tabindex="-1">SASS 使用小技巧 <a class="header-anchor" href="#sass-使用小技巧" aria-label="Permalink to &quot;SASS 使用小技巧&quot;">​</a></h1><hr><h3 id="_1-使用变量名来生成对应的id名称、classname名称方便后续做皮肤切换" tabindex="-1">1. 使用变量名来生成对应的id名称、className名称方便后续做皮肤切换 <a class="header-anchor" href="#_1-使用变量名来生成对应的id名称、classname名称方便后续做皮肤切换" aria-label="Permalink to &quot;1. 使用变量名来生成对应的id名称、className名称方便后续做皮肤切换&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$demo: &#39;demo-test&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.#{$demo} {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  background-color: red;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">编译之后生成的代码是</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.demo-test {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  background-color: red;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,4),l=[t];function p(d,c,o,h,r,k){return n(),a("div",null,l)}const m=s(i,[["render",p]]);export{_ as __pageData,m as default};
