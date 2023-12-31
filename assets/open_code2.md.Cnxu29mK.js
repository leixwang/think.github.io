import{_ as s,o as n,c as a,R as l}from"./chunks/framework.wHQdAk9n.js";const p="/assets/440px-Star_polygon_5-2.svg.AwO_Js_N.png",o="/assets/wu.tVKhOmu6.png",e="/assets/dun.Mu61yZTs.png",c="/assets/caihong.tqAT4Ksz.png",D=JSON.parse('{"title":"带你走进编程世界II","description":"","frontmatter":{},"headers":[],"relativePath":"open/code2.md","filePath":"open/code2.md","lastUpdated":1700391094000}'),r={name:"open/code2.md"},t=l('<h1 id="带你走进编程世界ii" tabindex="-1">带你走进编程世界II <a class="header-anchor" href="#带你走进编程世界ii" aria-label="Permalink to &quot;带你走进编程世界II&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#复习回顾">复习回顾</a></li><li><a href="#五角星">五角星</a><ul><li><a href="#特性">特性</a></li></ul></li><li><a href="#美国队长盾牌">美国队长盾牌</a></li><li><a href="#彩虹">彩虹</a></li></ul></nav><h2 id="复习回顾" tabindex="-1">复习回顾 <a class="header-anchor" href="#复习回顾" aria-label="Permalink to &quot;复习回顾&quot;">​</a></h2><p>复习一下上次课我们所学的画图函数.</p><div class="tip custom-block"><p class="custom-block-title">思考题</p><p>我们上次画了那里图形?</p><ol><li>一条直线</li><li>正方形</li><li>三角形</li><li>圆形</li><li>爱心</li></ol></div><h2 id="五角星" tabindex="-1">五角星 <a class="header-anchor" href="#五角星" aria-label="Permalink to &quot;五角星&quot;">​</a></h2><p>五角星是指一种有五只尖角、并以五条直线画成的星星图形。英文“五角星”（pentagram）一词出于希腊语，原意大概是“五条直线的”或“五条线”。中文“五角星”的意义则显而易见，指有五只角的星形。然而，中文“五角星”不一定指“标准”五角星。中文“五角星”一词有时亦泛指所有有五只角的星形物。</p><p><img src="'+p+'" alt=""></p><h3 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h3><ol><li>5条边长度都相等</li><li>5个角的角度都相等, 每个角都是36度</li><li>内角各为180度</li></ol><p><img src="'+o+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _ </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  left(</span><span style="color:#005CC5;">72</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  right(</span><span style="color:#005CC5;">144</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _ </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">  forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  left(</span><span style="color:#005CC5;">72</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  right(</span><span style="color:#005CC5;">144</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h2 id="美国队长盾牌" tabindex="-1">美国队长盾牌 <a class="header-anchor" href="#美国队长盾牌" aria-label="Permalink to &quot;美国队长盾牌&quot;">​</a></h2><p><img src="`+e+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#1、先将画笔往下移动200步，以使得图形能够完整呈现</span></span>
<span class="line"><span style="color:#24292E;">penup()       </span><span style="color:#6A737D;">#抬笔</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#移动到指定为止</span></span>
<span class="line"><span style="color:#24292E;">pendown()     </span><span style="color:#6A737D;">#落笔</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#2、画第一个圆形</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#设置第一个图形的颜色</span></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)      </span><span style="color:#6A737D;">#设置画笔的速度</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()  </span><span style="color:#6A737D;">#开始填充</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">#画出第一个圆</span></span>
<span class="line"><span style="color:#24292E;">end_fill()    </span><span style="color:#6A737D;">#结束填充</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#3、画第二个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">160</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;light grey&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">160</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#4、画第三个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#5、画第四个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#6、画五角星</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">85</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">27</span><span style="color:#24292E;">)        </span><span style="color:#6A737D;">#先移动到指定为止（手动调整的位置）</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;light grey&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">#设置五角星的颜色</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    forward(</span><span style="color:#005CC5;">65</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    left(</span><span style="color:#005CC5;">72</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    forward(</span><span style="color:#005CC5;">65</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    right(</span><span style="color:#005CC5;">144</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#1、先将画笔往下移动200步，以使得图形能够完整呈现</span></span>
<span class="line"><span style="color:#24292E;">penup()       </span><span style="color:#6A737D;">#抬笔</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#移动到指定为止</span></span>
<span class="line"><span style="color:#24292E;">pendown()     </span><span style="color:#6A737D;">#落笔</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#2、画第一个圆形</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">#设置第一个图形的颜色</span></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)      </span><span style="color:#6A737D;">#设置画笔的速度</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()  </span><span style="color:#6A737D;">#开始填充</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">#画出第一个圆</span></span>
<span class="line"><span style="color:#24292E;">end_fill()    </span><span style="color:#6A737D;">#结束填充</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#3、画第二个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">160</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;light grey&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">160</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#4、画第三个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#5、画第四个圆形</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#6、画五角星</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">85</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">27</span><span style="color:#24292E;">)        </span><span style="color:#6A737D;">#先移动到指定为止（手动调整的位置）</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;light grey&quot;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">#设置五角星的颜色</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">range</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">):</span></span>
<span class="line"><span style="color:#24292E;">    forward(</span><span style="color:#005CC5;">65</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    left(</span><span style="color:#005CC5;">72</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    forward(</span><span style="color:#005CC5;">65</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    right(</span><span style="color:#005CC5;">144</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></details><h2 id="彩虹" tabindex="-1">彩虹 <a class="header-anchor" href="#彩虹" aria-label="Permalink to &quot;彩虹&quot;">​</a></h2><p><img src="`+c+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">line</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;orange&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;yellow&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;green&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;cyan&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;purple&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">240</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pensize(</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">250</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">210</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">220</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> line:</span></span>
<span class="line"><span style="color:#24292E;">    penup()</span></span>
<span class="line"><span style="color:#24292E;">    color(i)</span></span>
<span class="line"><span style="color:#24292E;">    goto(a,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    a </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">            </span><span style="color:#6A737D;"># a = b + 3</span></span>
<span class="line"><span style="color:#24292E;">    pendown()</span></span>
<span class="line"><span style="color:#24292E;">    left(</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    circle(b,</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    b </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">            </span><span style="color:#6A737D;"># b = b + 3</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">line</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&quot;orange&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;yellow&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;green&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;cyan&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;purple&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">240</span><span style="color:#24292E;">,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pensize(</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">250</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">210</span></span>
<span class="line"><span style="color:#24292E;">b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">220</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> line:</span></span>
<span class="line"><span style="color:#24292E;">    penup()</span></span>
<span class="line"><span style="color:#24292E;">    color(i)</span></span>
<span class="line"><span style="color:#24292E;">    goto(a,</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    a </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">            </span><span style="color:#6A737D;"># a = b + 3</span></span>
<span class="line"><span style="color:#24292E;">    pendown()</span></span>
<span class="line"><span style="color:#24292E;">    left(</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    circle(b,</span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    b </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">            </span><span style="color:#6A737D;"># b = b + 3</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>`,18),y=[t];function i(E,b,u,C,m,d){return n(),a("div",null,y)}const g=s(r,[["render",i]]);export{D as __pageData,g as default};
