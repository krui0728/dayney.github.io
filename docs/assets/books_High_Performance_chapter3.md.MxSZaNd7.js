import{_ as a,c as e,o as t,V as i}from"./chunks/framework.yfXT0vyi.js";const m=JSON.parse('{"title":"高性能JavaScript读书笔记--数据存储","description":"","frontmatter":{"outline":"deep","editLink":false},"headers":[],"relativePath":"books/High_Performance/chapter3.md","filePath":"books/High_Performance/chapter3.md","lastUpdated":1705663669000}'),o={name:"books/High_Performance/chapter3.md"},r=i('<h1 id="高性能javascript读书笔记-数据存储" tabindex="-1">高性能JavaScript读书笔记--数据存储 <a class="header-anchor" href="#高性能javascript读书笔记-数据存储" aria-label="Permalink to &quot;高性能JavaScript读书笔记--数据存储&quot;">​</a></h1><h1 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h1><blockquote><ol><li><p>访问字面量和局部变量的速度最快，相反，访问数组元素和对象成员相对较慢</p></li><li><p>由于局部变量存在与作用域链的起始位置，因此访问局部变量比访问跨作用域变量更快。变量在作用域链中的位置越深，访问所需时间就越长。由于全局变量总处于作用域链的最末端，因此访问速度也是最慢的。</p></li><li><p>避免使用with语句，因为它会改变执行环境作用域链。同样，try-catch语句中的catch子句也有同样的影响，因此也要小心使用。</p></li><li><p>嵌套的对象成员会明显影响性能，尽量少用。</p></li><li><p>属性或方法在原型链中的位置越深，访问它的速度也越慢。</p></li><li><p>通常来说，你可以通过把常用的对象成员/数组元素/跨域变量保存在局部变量中来改善JavaScript性能，因为局部变量访问速度更快。</p></li></ol></blockquote>',3),c=[r];function l(p,s,_,n,h,d){return t(),e("div",null,c)}const u=a(o,[["render",l]]);export{m as __pageData,u as default};
