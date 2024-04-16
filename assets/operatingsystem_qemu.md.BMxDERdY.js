import{j as s,c as i,b as a,a4 as n}from"./chunks/framework.DD8WF7Ud.js";const c=JSON.parse('{"title":"编写操作系统的环境","description":"","frontmatter":{},"headers":[],"relativePath":"operatingsystem/qemu.md","filePath":"operatingsystem/qemu.md","lastUpdated":1713267137000}'),l={name:"operatingsystem/qemu.md"},e=n(`<h1 id="编写操作系统的环境" tabindex="-1">编写操作系统的环境 <a class="header-anchor" href="#编写操作系统的环境" aria-label="Permalink to &quot;编写操作系统的环境&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#安装软件">安装软件</a></li><li><a href="#编译内核">编译内核</a></li><li><a href="#qemu-使用">qemu 使用</a></li><li><a href="#参考">参考</a></li></ul></nav><h2 id="安装软件" tabindex="-1">安装软件 <a class="header-anchor" href="#安装软件" aria-label="Permalink to &quot;安装软件&quot;">​</a></h2><p>Netwide Assembler （简称 NASM）是一款基于英特尔 x86 架构的汇编与反汇编工具。它可以用来编写 16位、32位（IA-32）和 64位（x86-64）的程序。 NASM 被认为是 Linux 平台上最受欢迎的汇编工具之一。</p><p>QEMU是一款开源的虚拟机软件，它可以模拟多种不同的硬件平台，包括x86、ARM、MIPS、SPARC等，支持多种操作系统的运行，如Linux、Windows、Mac OS X、FreeBSD等。QEMU可用于虚拟化、仿真、调试和测试等多种应用场景。QEMU能够将一台物理主机模拟成多台虚拟机，为用户提供了一个隔离的环境来运行不同的应用程序和操作系统。QEMU是一个轻量级的虚拟机软件，易于安装和配置，并且具有良好的可移植性和跨平台性。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> nasm</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> qemu</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行 nasm 查看版本信息</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> nasm</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">NASM</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 2.16.01</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> compiled</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> Dec</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 23</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 2022</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>运行 qemu 查看版本信息</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> qemu-system-i386</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">QEMU</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> emulator</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 8.1.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> (c) 2003-2023 Fabrice Bellard and the QEMU Project developers</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="编译内核" tabindex="-1">编译内核 <a class="header-anchor" href="#编译内核" aria-label="Permalink to &quot;编译内核&quot;">​</a></h2><div class="language-asm vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">	org </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">07c00h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> ax</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">cs</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> ds</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">ax</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> es</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">ax</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	call</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> DispStr </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	jmp</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> $ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">DispStr:</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> ax</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, BootMessage</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> bp</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">ax</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> cx</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">16</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> ax</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">01301h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> bx</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">000ch</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> dl</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> int</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 10h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">	ret</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">BootMessage:</span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;"> &quot;Hello, OS world!&quot; </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">times</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 510</span><span style="--shiki-light:#24292E;--shiki-dark:#24292E;">-($-$$) </span><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">db</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ; </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#D73A49;">dw</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> 0xaa55</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> nasm</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> boot.asm</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> boot.bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>制作启动盘</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> dd</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> if=boot.bin</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> of=leios.img</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> bs=</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">512</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> count=</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>制作启动盘时，if=boot.bin, 是刚才用 nasm 编译汇编文件生成的 bin 文件. of=leios.img 中的 leios.img 生成的映像文件名, 这个文件用于引导启动操作系统。</p><div class="warning custom-block"><p class="custom-block-title">简介</p><ul><li><p>制作软盘镜像文件diska.img 命令： dd if=/dev/zero of=diska.img bs=512 count=2880</p></li><li><p>复制boot.bin到boot.img中 命令： dd if=boot.bin of=boot.img bs=512 count=1</p></li><li><p>复制diska.img中从第512字节往后的内容添加到boot.img中（这是dd最出彩的部分） 命令： dd if=diska.img of=boot.img skip=1 seek=1 bs=512 count=2879</p></li></ul></div><h2 id="qemu-使用" tabindex="-1">qemu 使用 <a class="header-anchor" href="#qemu-使用" aria-label="Permalink to &quot;qemu 使用&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-light vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6F42C1;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> qemu-system-i386</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -drive</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> file=leios.img,format=raw,bus=0,unit=</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#005CC5;"> -parallel</span><span style="--shiki-light:#032F62;--shiki-dark:#032F62;"> stdio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中，-m 选项指定虚拟机内存大小，-hda 选项指定虚拟机硬盘镜像文件, -boot 选项指定启动顺序，-serial 选项指定虚拟机使用的串口。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://github.com/chyyuu/ucore_os_docs" target="_blank" rel="noreferrer">清华大学操作系统-实验</a></p><p><a href="./.html">Linux内核完全注释</a></p><p><a href="./.html">Linux内核设计与实现</a></p><p><a href="https://rcore-os.cn/rCore-Tutorial-Book-v3/index.html" target="_blank" rel="noreferrer">rCore-Tutorial-Book第三版(用 Rust 语言写一个基于 RISC-V 架构的 类 Unix 内核 )</a></p><p><a href="http://draconux.free.fr/os_dev/linux0.01_download.html" target="_blank" rel="noreferrer">Linux0.01源码下载</a></p>`,26),h=[e];function p(t,k,r,d,o,g){return a(),i("div",null,h)}const b=s(l,[["render",p]]);export{c as __pageData,b as default};
