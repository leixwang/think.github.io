import{_ as s,o as n,c as a,R as l}from"./chunks/framework.wHQdAk9n.js";const p="/assets/square.fc-AB6DD.png",e="/assets/square2.q-UJKSYk.png",o="/assets/square1.q6oidKWD.png",r="/assets/cartesian.vx5WMcmy.jpg",c="/assets/heart.JSb9tH6l.png",f=JSON.parse('{"title":"带你走进编程世界I","description":"","frontmatter":{},"headers":[],"relativePath":"open/code1.md","filePath":"open/code1.md","lastUpdated":1700391094000}'),t={name:"open/code1.md"},i=l(`<h1 id="带你走进编程世界i" tabindex="-1">带你走进编程世界I <a class="header-anchor" href="#带你走进编程世界i" aria-label="Permalink to &quot;带你走进编程世界I&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#引入turtle库">引入turtle库</a></li><li><a href="#画笔控制">画笔控制</a></li><li><a href="#基本绘图">基本绘图</a></li><li><a href="#正方形-square">正方形 (Square)</a><ul><li><a href="#画个正方形">画个正方形</a></li><li><a href="#正方形填充颜色">正方形填充颜色</a></li></ul></li><li><a href="#直角坐标系">直角坐标系</a><ul><li><a href="#笛卡尔坐标系">笛卡尔坐标系</a></li><li><a href="#坐标系的表示">坐标系的表示</a></li></ul></li><li><a href="#爱心">爱心</a></li></ul></nav><h3 id="引入turtle库" tabindex="-1">引入turtle库 <a class="header-anchor" href="#引入turtle库" aria-label="Permalink to &quot;引入turtle库&quot;">​</a></h3><p>首先我们需要引入 <code>turtle</code> 库.</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="画笔控制" tabindex="-1">画笔控制 <a class="header-anchor" href="#画笔控制" aria-label="Permalink to &quot;画笔控制&quot;">​</a></h3><p>画笔落下时, 移动时将画线.</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">pd()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span>
<span class="line"><span style="color:#24292E;">down()     </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">pd()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span>
<span class="line"><span style="color:#24292E;">down()     </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>画笔抬起时, 移动时不画线. 便于重新设定需要写线的坐标.</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">pu()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span>
<span class="line"><span style="color:#24292E;">up()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">pu()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span>
<span class="line"><span style="color:#24292E;">up()       </span><span style="color:#D73A49;">//</span><span style="color:#24292E;"> 简写</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="基本绘图" tabindex="-1">基本绘图 <a class="header-anchor" href="#基本绘图" aria-label="Permalink to &quot;基本绘图&quot;">​</a></h3><p>forward() 是让海龟向前走, 如果我们让海龟前进100步:</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">forward()</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">forward()</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="正方形-square" tabindex="-1">正方形 (Square) <a class="header-anchor" href="#正方形-square" aria-label="Permalink to &quot;正方形 (Square)&quot;">​</a></h2><p>正方形是四边相等且四個角是直角的四边形。</p><p>正方形，是特殊的平行四边形之一。即有一组邻边相等，并且有一个角是直角的平行四边形称为正方形，又称正四边形。正方形，具有矩形和菱形的全部特性。</p><p>平面图形的周长就是它外围一圈的长度，即边长的总和。根据定义，正方形是四条边都相等，并且四个角都是直角的四边形。由于四条边长度都相等，所以计算正方形的周长是一件很简单的事。本文首先会介绍已知正方形的边长求周长的方法，然后会介绍已知正方形的面积求周长的方法，最后会介绍在已知圆半径的情况下，计算圆内接正方形周长的方法。</p><div class="warning custom-block"><p class="custom-block-title">性质</p><table><thead><tr><th>名称</th><th>性质</th></tr></thead><tbody><tr><td>边</td><td>两组对边分别平行；四条边都相等；邻边互相垂直。</td></tr><tr><td>内角</td><td>四个角都是90°，内角和为360°。</td></tr><tr><td>对角线</td><td>对角线互相垂直；对角线相等且互相平分；每条对角线平分一组对角。</td></tr><tr><td>对称性</td><td>既是中心对称图形，又是轴对称图形（有四条对称轴）。</td></tr><tr><td>特殊性质</td><td>正方形的一条对角线把正方形分成两个全等的等腰直角三角形，对角线与边的夹角是45°；正方形的两条对角线把正方形分成四个全等的等腰直角三角形。</td></tr><tr><td>其他性质1</td><td>正方形具有平行四边形、菱形、矩形的一切性质与特性。</td></tr><tr><td>其他性质2</td><td>在正方形里面画一个最大的圆（正方形的内切圆），该圆的面积约是正方形面积的78.5%[4分之π]； 完全覆盖正方形的最小的圆（正方形的外接圆）面积大约是正方形面积的157%[2分之π]。</td></tr><tr><td>其他性质3</td><td>正方形是特殊的矩形，正方形是特殊的菱形。</td></tr></tbody></table><hr><h4 id="计算公式" tabindex="-1">计算公式: <a class="header-anchor" href="#计算公式" aria-label="Permalink to &quot;计算公式:&quot;">​</a></h4><p>周长 = 边长 x 4</p><p>面积 = 边长 x 边长</p></div><h3 id="画个正方形" tabindex="-1">画个正方形 <a class="header-anchor" href="#画个正方形" aria-label="Permalink to &quot;画个正方形&quot;">​</a></h3><p><img src="`+p+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h3 id="正方形填充颜色" tabindex="-1">正方形填充颜色 <a class="header-anchor" href="#正方形填充颜色" aria-label="Permalink to &quot;正方形填充颜色&quot;">​</a></h3><p>我们将上面的画的正方形用蓝色上色.</p><div class="tip custom-block"><p class="custom-block-title">操作步骤:</p><ol><li>我们先设置需要填充的颜色, 这里我们填充蓝色 <code>blue</code><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">  color(&quot;blue&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  color(&quot;blue&quot;)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>设置开始和结束上色操作.<div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">  begin_fill()     // 填充开始</span></span>
<span class="line"><span style="color:#24292E;">  ...             // 画完封闭的图形</span></span>
<span class="line"><span style="color:#24292E;">  end_fill()       // 填充结束</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  begin_fill()     // 填充开始</span></span>
<span class="line"><span style="color:#24292E;">  ...             // 画完封闭的图形</span></span>
<span class="line"><span style="color:#24292E;">  end_fill()       // 填充结束</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol></div><p><img src="`+e+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">mainloop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;blue&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"><span style="color:#24292E;">mainloop()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></details><details class="details custom-block"><summary>思考题</summary><p>如果将正方形正好与屏幕对齐, 像下面的图所示, 我们应该怎么实现呢?</p><p><img src="`+o+'" alt=""></p></details><h2 id="直角坐标系" tabindex="-1">直角坐标系 <a class="header-anchor" href="#直角坐标系" aria-label="Permalink to &quot;直角坐标系&quot;">​</a></h2><p>在平面内画两条互相垂直，并且有公共原点的数轴。其中横轴为X轴，纵轴为Y轴。这样我们就说在平面上建立了平面直角坐标系，简称直角坐标系。还分为第一象限，第二象限，第三象限，第四象限。从右上角开始数起，逆时针方向算起。</p><h3 id="笛卡尔坐标系" tabindex="-1">笛卡尔坐标系 <a class="header-anchor" href="#笛卡尔坐标系" aria-label="Permalink to &quot;笛卡尔坐标系&quot;">​</a></h3><p>笛卡尔坐标系（法语：système de coordonnées cartésiennes，英语：Cartesian coordinate system，也称直角坐标系）在数学中是一种正交坐标系，由法国数学家勒内·笛卡尔引入而得名。二维的直角坐标系是由两条相互垂直、相交于原点的数线构成的。在平面内，任何一点的坐标是根据数轴上对应的点的坐标设定的。在平面内，任何一点与坐标的对应关系，类似于数轴上点与坐标的对应关系。</p><h3 id="坐标系的表示" tabindex="-1">坐标系的表示 <a class="header-anchor" href="#坐标系的表示" aria-label="Permalink to &quot;坐标系的表示&quot;">​</a></h3><p>横向移动, 也就是左右移动, 这个叫x坐标.</p><p>纵向移动, 也就是上下移动, 这个叫y坐标.</p><p>以原点为开始的位置, 用符号来表示方向, 然后再加移动的长度. 注意在这里(+)可以不用写.</p><ol><li>如果向右移动用(+)</li><li>如果向左移动用(-)</li><li>如果向上移动用(+)</li><li>如果向下移动用(-)</li></ol><p><img src="'+r+`" alt=""></p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">坐标点(-3, -10)</span></span>
<span class="line"><span style="color:#24292E;">      ||| | \`------------ y轴移动长度为10</span></span>
<span class="line"><span style="color:#24292E;">      ||| \`-------------- y轴移动的方向为向下, -表示向下, +表示向上		</span></span>
<span class="line"><span style="color:#24292E;">      ||\`---------------- 分隔符, 区分x轴和y轴</span></span>
<span class="line"><span style="color:#24292E;">      |\`----------------- x轴移动长度为3</span></span>
<span class="line"><span style="color:#24292E;">      \`------------------ x轴移动的方向为向左, -表示向左, +表示向右</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">坐标点(-3, -10)</span></span>
<span class="line"><span style="color:#24292E;">      ||| | \`------------ y轴移动长度为10</span></span>
<span class="line"><span style="color:#24292E;">      ||| \`-------------- y轴移动的方向为向下, -表示向下, +表示向上		</span></span>
<span class="line"><span style="color:#24292E;">      ||\`---------------- 分隔符, 区分x轴和y轴</span></span>
<span class="line"><span style="color:#24292E;">      |\`----------------- x轴移动长度为3</span></span>
<span class="line"><span style="color:#24292E;">      \`------------------ x轴移动的方向为向左, -表示向左, +表示向右</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">done()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><h2 id="爱心" tabindex="-1">爱心 <a class="header-anchor" href="#爱心" aria-label="Permalink to &quot;爱心&quot;">​</a></h2><p><img src="`+c+`" alt=""></p><details class="details custom-block"><summary>代码</summary><div class="language-py vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">45</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">right(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mainloop()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> turtle </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">speed(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">penup()</span></span>
<span class="line"><span style="color:#24292E;">goto(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">pendown()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">color(</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">begin_fill()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">left(</span><span style="color:#005CC5;">45</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">right(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">circle(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">180</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">forward(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">end_fill()</span></span>
<span class="line"><span style="color:#24292E;">hideturtle()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">mainloop()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></details>`,42),y=[i];function d(b,u,E,m,h,C){return n(),a("div",null,y)}const v=s(t,[["render",d]]);export{f as __pageData,v as default};
