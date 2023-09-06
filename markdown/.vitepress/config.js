import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

export default withMermaid({
  // your existing vitepress config...
  title: 'TuringThink',
  description: 'TuringThink 是一家领先的少儿编程教育公司，致力于激发创造力,逻辑思维能力和多维度的学习能力。通过有趣而实践的课程，我们帮助学生掌握编程技能并培养他们解决问题的能力。',
	lastUpdated: true,
	markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-light',
    },
		lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
	},
	themeConfig: {
		sidebar: [
      {
        text: '教务管理',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '课程表', link: '/class/classlists' },
        ]
      },
      {
        text: 'NOIP C++',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/clang/index' },
          {
            text: '一级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '00. 课程整体的介绍', link: '/clang/level-1/index' },
            { text: '01. 入门基础', link: '/clang/level-1/01.base' },
            { text: '02. 顺序结构', link: '/clang/level-1/02.sequence' },
            { text: '03. 顺序结构', link: '/clang/level-1/03.if' },
            { text: '04. 循环语句I', link: '/clang/level-1/04.loop' },
            { text: '05. 循环语句II', link: '/clang/level-1/05.loop' },
            { text: '06. 阶段测试与总结', link: '/clang/level-1/06.test' },
            { text: '07. 数组', link: '/clang/level-1/07.array' },
            { text: '08. 字符串', link: '/clang/level-1/08.array' },
            { text: '09. 结构体', link: '/clang/level-1/09.array' },
            { text: '10. 指针', link: '/clang/level-1/10.point' },
            { text: '11. 排序', link: '/clang/level-1/11.sort' },
            { text: '12. 查找', link: '/clang/level-1/12.find' },
            { text: '13. 函数I', link: '/clang/level-1/13.func' },
            { text: '14. 函数II', link: '/clang/level-1/14.func' },
            { text: '15. 阶段测试与总结', link: '/clang/level-1/15.test' },
            { text: '16. 位运算', link: '/clang/level-1/16.bit' },
            { text: '17. 数学算法I', link: '/clang/level-1/17.math' },
            { text: '18. 数学算法II', link: '/clang/level-1/18.math' },
            { text: '19. Trick', link: '/clang/level-1/19.trick' },
            { text: '20. 阶段测试与总结', link: '/clang/level-1/20.test' },
            { text: 'NOIP C++大纲', link: '/clang/level-1/00.noip' },
            { text: 'Demo', link: '/clang/level-1/demo' },
            ]
          },
          {
            text: '二级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/clang/level-2/index' },
            ]
          },
          {
            text: '三级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/clang/level-3/index' },
            ]
          },
          {
            text: '四级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/clang/level-4/index' },
            ]
          },
          {
            text: '五级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/clang/level-5/index' },
            ]
          },
          {
            text: '六级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/clang/level-6/index' },
            ]
          },
        ]
      },
      {
        text: 'Python',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/python/index' },
          {
            text: '一级课程',
            collapsible: true,
            collapsed: true,
            items: [
              { text: '一级大纲', link: '/python/level-1/index' },
              { text: '循环语句', link: '/python/level-1/loop' },
            ]
          },
          {
            text: '二级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/python/level-2/index' },
            ]
          },
          {
            text: '三级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/python/level-3/index' },
            ]
          },
          {
            text: '四级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/python/level-4/index' },
            ]
          },
          {
            text: '五级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/python/level-5/index' },
            ]
          },
          {
            text: '六级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/python/level-6/index' },
            ]
          },
        ]
      },
      {
        text: 'Scratch',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/scratch/index' },
          {
            text: '一级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-1/index' },
            { text: '基本知识', link: '/scratch/level-1/index' },
            ]
          },
          {
            text: '二级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-2/index' },
            ]
          },
          {
            text: '三级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-3/index' },
            ]
          },
          {
            text: '四级课程',
            collapsible: true,
            collapsed: true,
            items: [
            { text: '基本知识', link: '/scratch/level-4/index' },
            ]
          },
        ]
      },

    ],
		
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
		},
		lastUpdatedText: 'Updated Date',
		docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},
  mermaid: {

  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
