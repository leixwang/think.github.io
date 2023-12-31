import{_ as s,o as n,c as a,R as l}from"./chunks/framework.wHQdAk9n.js";const u=JSON.parse('{"title":"温湿度传感器","description":"","frontmatter":{},"headers":[],"relativePath":"arduino/5.dht11.md","filePath":"arduino/5.dht11.md","lastUpdated":1700391094000}'),p={name:"arduino/5.dht11.md"},o=l(`<h1 id="温湿度传感器" tabindex="-1">温湿度传感器 <a class="header-anchor" href="#温湿度传感器" aria-label="Permalink to &quot;温湿度传感器&quot;">​</a></h1><h2 id="硬件链接" tabindex="-1">硬件链接 <a class="header-anchor" href="#硬件链接" aria-label="Permalink to &quot;硬件链接&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292e;">接线说明：DHT11温湿度传感器模块--&gt;ESP32 IO</span></span>
<span class="line"><span style="color:#24292e;">         (VCC)--&gt;(5V)</span></span>
<span class="line"><span style="color:#24292e;">         (DATA)--&gt;(27)</span></span>
<span class="line"><span style="color:#24292e;">         (GND)--&gt;(GND)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">接线说明：DHT11温湿度传感器模块--&gt;ESP32 IO</span></span>
<span class="line"><span style="color:#24292e;">         (VCC)--&gt;(5V)</span></span>
<span class="line"><span style="color:#24292e;">         (DATA)--&gt;(27)</span></span>
<span class="line"><span style="color:#24292e;">         (GND)--&gt;(GND)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="软件实现" tabindex="-1">软件实现 <a class="header-anchor" href="#软件实现" aria-label="Permalink to &quot;软件实现&quot;">​</a></h2><details class="details custom-block"><summary>DHT11 代码</summary><div class="language-cpp vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;Arduino.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//LED管脚定义</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">led1_pin</span><span style="color:#24292E;">  15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//DHT11管脚定义</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dht11_pin</span><span style="color:#24292E;">   27</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_DQ_LOW</span><span style="color:#24292E;">    digitalWrite(dht11_pin, LOW)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_DQ_HIGH</span><span style="color:#24292E;">   digitalWrite(dht11_pin, HIGH)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_READ</span><span style="color:#24292E;">      digitalRead(dht11_pin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_MODE_IN</span><span style="color:#24292E;">   pinMode(dht11_pin, INPUT_PULLUP)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_MODE_OUT</span><span style="color:#24292E;">  pinMode(dht11_pin, OUTPUT)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//类型重定义</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> u8;</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> u16;</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> u32;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">u8 temp;        </span></span>
<span class="line"><span style="color:#24292E;">u8 humi;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//复位DHT11</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">()     </span></span>
<span class="line"><span style="color:#24292E;">{                 </span></span>
<span class="line"><span style="color:#24292E;">  DHT11_MODE_OUT;</span><span style="color:#6A737D;">   //SET OUTPUT</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_DQ_LOW;</span><span style="color:#6A737D;">   //拉低DQ</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">     //拉低至少18ms</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_DQ_HIGH;</span><span style="color:#6A737D;">   //DQ=1 </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">       //主机拉高20~40us</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//等待DHT11的回应</span></span>
<span class="line"><span style="color:#6A737D;">//返回1:未检测到DHT11的存在</span></span>
<span class="line"><span style="color:#6A737D;">//返回0:存在</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">()      </span></span>
<span class="line"><span style="color:#24292E;">{   </span></span>
<span class="line"><span style="color:#24292E;">  u8 retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_MODE_IN;</span><span style="color:#6A737D;">//SET INPUT  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//DHT11会拉低40~50us</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  };   </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(retry</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//DHT11拉低后会再次拉高40~50us</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(retry</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;     </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一个位</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：1/0</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Bit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)        </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  u8 retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//等待变为低电平 12-14us 开始</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//等待变高电平   26-28us表示0,116-118us表示1</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">40</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">//等待40us</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(DHT11_READ)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;       </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一个字节</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：读到的数据</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Byte</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)    </span></span>
<span class="line"><span style="color:#24292E;">{        </span></span>
<span class="line"><span style="color:#24292E;">  u8 i,dat;</span></span>
<span class="line"><span style="color:#24292E;">  dat</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">      dat</span><span style="color:#D73A49;">&lt;&lt;=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;">      dat</span><span style="color:#D73A49;">|=</span><span style="color:#6F42C1;">DHT11_Read_Bit</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }               </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dat;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一次数据</span></span>
<span class="line"><span style="color:#6A737D;">//temp:温度值(范围:0~50°)</span></span>
<span class="line"><span style="color:#6A737D;">//humi:湿度值(范围:20%~90%)</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：0,正常;1,读取失败</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Data</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">temp</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">humi</span><span style="color:#24292E;">){        </span></span>
<span class="line"><span style="color:#24292E;">  u8 buf[</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  u8 i;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//读取40位数据</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      buf[i]</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">DHT11_Read_Byte</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">humi</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">temp</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;     </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//DHT11初始化 </span></span>
<span class="line"><span style="color:#6A737D;">//返回0：初始化成功，1：失败</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">led_init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pinMode</span><span style="color:#24292E;">(led1_pin, OUTPUT);</span><span style="color:#6A737D;">//设置引脚为输出模式</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">115200</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">DHT11_Init</span><span style="color:#24292E;">())</span><span style="color:#6A737D;">  //检测是否纯在</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;DHT11 Check Error!</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">500</span><span style="color:#24292E;">);    </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;DHT11 Check OK!</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loop</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Read_Data</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">temp, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">humi);</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;温度=</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">°C  湿度=</span><span style="color:#005CC5;">%d%%</span><span style="color:#032F62;">RH</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,temp,humi);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;Arduino.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//LED管脚定义</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">led1_pin</span><span style="color:#24292E;">  15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//DHT11管脚定义</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dht11_pin</span><span style="color:#24292E;">   27</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_DQ_LOW</span><span style="color:#24292E;">    digitalWrite(dht11_pin, LOW)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_DQ_HIGH</span><span style="color:#24292E;">   digitalWrite(dht11_pin, HIGH)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_READ</span><span style="color:#24292E;">      digitalRead(dht11_pin)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_MODE_IN</span><span style="color:#24292E;">   pinMode(dht11_pin, INPUT_PULLUP)</span></span>
<span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_MODE_OUT</span><span style="color:#24292E;">  pinMode(dht11_pin, OUTPUT)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//类型重定义</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> u8;</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> u16;</span></span>
<span class="line"><span style="color:#D73A49;">typedef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">unsigned</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">long</span><span style="color:#24292E;"> u32;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">u8 temp;        </span></span>
<span class="line"><span style="color:#24292E;">u8 humi;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//复位DHT11</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">()     </span></span>
<span class="line"><span style="color:#24292E;">{                 </span></span>
<span class="line"><span style="color:#24292E;">  DHT11_MODE_OUT;</span><span style="color:#6A737D;">   //SET OUTPUT</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_DQ_LOW;</span><span style="color:#6A737D;">   //拉低DQ</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">     //拉低至少18ms</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_DQ_HIGH;</span><span style="color:#6A737D;">   //DQ=1 </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">       //主机拉高20~40us</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//等待DHT11的回应</span></span>
<span class="line"><span style="color:#6A737D;">//返回1:未检测到DHT11的存在</span></span>
<span class="line"><span style="color:#6A737D;">//返回0:存在</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">()      </span></span>
<span class="line"><span style="color:#24292E;">{   </span></span>
<span class="line"><span style="color:#24292E;">  u8 retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  DHT11_MODE_IN;</span><span style="color:#6A737D;">//SET INPUT  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//DHT11会拉低40~50us</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  };   </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(retry</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//DHT11拉低后会再次拉高40~50us</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(retry</span><span style="color:#D73A49;">&gt;=</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;     </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一个位</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：1/0</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Bit</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)        </span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  u8 retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//等待变为低电平 12-14us 开始</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  retry</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">DHT11_READ</span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;">retry</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//等待变高电平   26-28us表示0,116-118us表示1</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    retry</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delayMicroseconds</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">40</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">//等待40us</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(DHT11_READ)</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;       </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一个字节</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：读到的数据</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Byte</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)    </span></span>
<span class="line"><span style="color:#24292E;">{        </span></span>
<span class="line"><span style="color:#24292E;">  u8 i,dat;</span></span>
<span class="line"><span style="color:#24292E;">  dat</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) </span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">      dat</span><span style="color:#D73A49;">&lt;&lt;=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">; </span></span>
<span class="line"><span style="color:#24292E;">      dat</span><span style="color:#D73A49;">|=</span><span style="color:#6F42C1;">DHT11_Read_Bit</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }               </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> dat;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//从DHT11读取一次数据</span></span>
<span class="line"><span style="color:#6A737D;">//temp:温度值(范围:0~50°)</span></span>
<span class="line"><span style="color:#6A737D;">//humi:湿度值(范围:20%~90%)</span></span>
<span class="line"><span style="color:#6A737D;">//返回值：0,正常;1,读取失败</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Read_Data</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">temp</span><span style="color:#24292E;">,</span><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">humi</span><span style="color:#24292E;">){        </span></span>
<span class="line"><span style="color:#24292E;">  u8 buf[</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  u8 i;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">==</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(i</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">&lt;</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">;i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//读取40位数据</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      buf[i]</span><span style="color:#D73A49;">=</span><span style="color:#6F42C1;">DHT11_Read_Byte</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">((buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">])</span><span style="color:#D73A49;">==</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">])</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">humi</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">temp</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">buf[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  }</span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;     </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//DHT11初始化 </span></span>
<span class="line"><span style="color:#6A737D;">//返回0：初始化成功，1：失败</span></span>
<span class="line"><span style="color:#6F42C1;">u8</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Rst</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DHT11_Check</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">led_init</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pinMode</span><span style="color:#24292E;">(led1_pin, OUTPUT);</span><span style="color:#6A737D;">//设置引脚为输出模式</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">115200</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">while</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">DHT11_Init</span><span style="color:#24292E;">())</span><span style="color:#6A737D;">  //检测是否纯在</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;DHT11 Check Error!</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">500</span><span style="color:#24292E;">);    </span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;DHT11 Check OK!</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loop</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">DHT11_Read_Data</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">temp, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">humi);</span></span>
<span class="line"><span style="color:#24292E;">  Serial.</span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;温度=</span><span style="color:#005CC5;">%d</span><span style="color:#032F62;">°C  湿度=</span><span style="color:#005CC5;">%d%%</span><span style="color:#032F62;">RH</span><span style="color:#005CC5;">\\r\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">,temp,humi);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">delay</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br></div></div></details><div class="info custom-block"><p class="custom-block-title">INFO</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-light vp-code-dark"><code><span class="line"><span style="color:#24292E;">--- Terminal on /dev/cu.usbserial-2140 | 115200 8-N-1</span></span>
<span class="line"><span style="color:#24292E;">--- Available filters and text transformations: colorize, debug, default, direct, esp32_exception_decoder, hexlify, log2file, nocontrol, printable, send_on_enter, time</span></span>
<span class="line"><span style="color:#24292E;">--- More details at https://bit.ly/pio-monitor-filters</span></span>
<span class="line"><span style="color:#24292E;">--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">--- Terminal on /dev/cu.usbserial-2140 | 115200 8-N-1</span></span>
<span class="line"><span style="color:#24292E;">--- Available filters and text transformations: colorize, debug, default, direct, esp32_exception_decoder, hexlify, log2file, nocontrol, printable, send_on_enter, time</span></span>
<span class="line"><span style="color:#24292E;">--- More details at https://bit.ly/pio-monitor-filters</span></span>
<span class="line"><span style="color:#24292E;">--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=20°C  湿度=44%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span>
<span class="line"><span style="color:#24292E;">温度=21°C  湿度=43%RH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div>`,6),e=[o];function c(r,t,y,i,E,b){return n(),a("div",null,e)}const C=s(p,[["render",c]]);export{u as __pageData,C as default};
