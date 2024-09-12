import{_ as n,c as s,o as a,V as p}from"./chunks/framework.CthfA3PS.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"frontend/engineering/gitignore.md","filePath":"frontend/engineering/gitignore.md","lastUpdated":1726153869000}'),e={name:"frontend/engineering/gitignore.md"},l=p(`<h2 id="gitignore文件的设置" tabindex="-1"><strong>.gitignore</strong>文件的设置 <a class="header-anchor" href="#gitignore文件的设置" aria-label="Permalink to &quot;**.gitignore**文件的设置&quot;">​</a></h2><h3 id="一、使用命令行工具生成" tabindex="-1">一、使用命令行工具生成 <a class="header-anchor" href="#一、使用命令行工具生成" aria-label="Permalink to &quot;一、使用命令行工具生成&quot;">​</a></h3><div class="language-node vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">node</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx gitignore node</span></span></code></pre></div><h3 id="二、手动创建-gitignore-文件" tabindex="-1">二、手动创建 .gitignore 文件 <a class="header-anchor" href="#二、手动创建-gitignore-文件" aria-label="Permalink to &quot;二、手动创建 .gitignore 文件&quot;">​</a></h3><p>​ 1. 手动在项目的根目录下创建 .gitignore 文件，并且填写以下文件。</p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># Node.js</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Logs</span></span>
<span class="line"><span>logs</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Environment Variables</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Build output</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IDE specific files</span></span>
<span class="line"><span>.vscode/</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># OS generated files</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>Thumbs.db</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Dependencies</span></span>
<span class="line"><span>/node_modules</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Temporary files</span></span>
<span class="line"><span>*.tmp</span></span>
<span class="line"><span>*.swp</span></span>
<span class="line"><span>*.swo</span></span></code></pre></div><ol start="2"><li><p>使用 ** touch ** 命令创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>touch .gitignore</span></span></code></pre></div></li></ol><h3 id="三、使用模板生成" tabindex="-1">三、使用模板生成 <a class="header-anchor" href="#三、使用模板生成" aria-label="Permalink to &quot;三、使用模板生成&quot;">​</a></h3><p>GitHub 提供了一些常用项目的 .gitignore 模板，你可以访问 <a href="https://www.toptal.com/developers/gitignore/" target="_blank" rel="noreferrer">gitignore.io</a> 根据你的项目类型生成适用的 .gitignore 文件。</p><h3 id="四、常用的配置如下" tabindex="-1">四、常用的配置如下 <a class="header-anchor" href="#四、常用的配置如下" aria-label="Permalink to &quot;四、常用的配置如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#.gitignore</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>node_modules</span></span>
<span class="line"><span>/dist</span></span>
<span class="line"><span>.eslintrc</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># local env files</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Log files</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span></code></pre></div>`,11),i=[l];function t(o,c,r,g,d,h){return a(),s("div",null,i)}const m=n(e,[["render",t]]);export{b as __pageData,m as default};