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
  title: 'TuringThink教学文档',
  description: '',
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
          { text: 'NOIP C++ 介绍', link: '/clang/index' },
          { text: '基本知识', link: '/clang/base' },
          { text: '循环语句', link: '/clang/loop' },
          { text: '教学文档样例', link: '/clang/demo' },
        ]
      },
      {
        text: 'Pyhton',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Python 介绍', link: '/python/index' },
          { text: 'Python loop', link: '/python/loop' },
        ]
      }
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
