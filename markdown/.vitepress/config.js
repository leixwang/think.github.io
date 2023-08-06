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
  description: 'TuringThink是一家领先的少儿编程教育公司，致力于激发创造力,逻辑思维能力和多维度的学习能力。通过有趣而实践的课程，我们帮助学生掌握编程技能并培养他们解决问题的能力。',
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
            { text: '基本知识', link: '/clang/level-1/index' },
            { text: '循环语句', link: '/clang/level-1/loop' },
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
