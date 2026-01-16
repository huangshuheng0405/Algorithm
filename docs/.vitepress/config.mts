import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

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
  'annotation-xml'
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Algorithm',
  description: 'algorithm',
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },
  head: [
    [
      'script',
      {},
      `
      window.MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
          displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
          processEscapes: true,
          processEnvironments: true
        },
        options: {
          skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
        }
      };
      `
    ],
    [
      'script',
      {
        async: '',
        id: 'MathJax-script',
        src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
      },
      ''
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '基础算法', link: '/basic/binary' },
      { text: '数据结构', link: '/dataStructure/Sparse-table(ST)' },
      {
        text: '动态规划',
        link: '/dynamicProgramming/linear/最长上升子序列(LIS)'
      },
      { text: '图论', link: '/graph/graph traversal' },
      { text: '数学', link: '/math/quick power' },
      { text: '搜索', link: '/search/DFS' },
      { text: '字符串', link: '/string/KMP' },
      { text: '杂项', link: '/misc/bitset' }
    ],

    sidebar: {
      '/basic/': [
        {
          text: '基础算法',
          items: [
            { text: '二分查找', link: '/basic/binary' },
            { text: '差分', link: '/basic/difference' },
            { text: '前缀和', link: '/basic/prefix-sum' },
            { text: '反悔贪心', link: '/basic/regret-greedy' },
            {
              text: '排序算法',
              collapsed: false,
              items: [
                { text: '冒泡排序', link: '/basic/sort/冒泡排序' },
                { text: '简单选择排序', link: '/basic/sort/简单选择排序' },
                { text: '直接插入排序', link: '/basic/sort/直接插入排序' },
                { text: '希尔排序', link: '/basic/sort/希尔排序' },
                { text: '归并排序', link: '/basic/sort/归并排序' },
                { text: '快速排序', link: '/basic/sort/快速排序' }
              ]
            }
          ]
        }
      ],
      '/dataStructure/': [
        {
          text: '数据结构',
          items: [
            { text: 'ST表', link: '/dataStructure/Sparse-table(ST)' },
            { text: 'Huffman树', link: '/dataStructure/Huffman-tree' },
            { text: '单调栈', link: '/dataStructure/monotonous-stack' },
            { text: '单调队列', link: '/dataStructure/monotonous-queue' },
            {
              text: '左偏树（可并堆）',
              link: '/dataStructure/leftist-tree（可并堆）'
            },
            {
              text: '链表',
              collapsed: true,
              items: [
                {
                  text: '单向链表',
                  link: '/dataStructure/linked-list/单向链表'
                },
                {
                  text: '双向链表',
                  link: '/dataStructure/linked-list/双向链表(map)'
                }
              ]
            },
            {
              text: '并查集',
              collapsed: true,
              items: [
                {
                  text: '并查集（板子）',
                  link: '/dataStructure/DisjointSetUnion(DSU）/并查集（板子）'
                },
                {
                  text: '并查集（反集）',
                  link: '/dataStructure/DisjointSetUnion(DSU）/并查集（反集）'
                },
                {
                  text: '扩展域并查集',
                  link: '/dataStructure/DisjointSetUnion(DSU）/扩展域并查集'
                },
                {
                  text: '[NOI2002] 银河英雄传说',
                  link: '/dataStructure/DisjointSetUnion(DSU）/[NOI2002] 银河英雄传说'
                }
              ]
            },
            {
              text: '线段树',
              collapsed: true,
              items: [
                {
                  text: '线段树（区间加法）',
                  link: '/dataStructure/SegmentTree/线段树（区间加法）'
                },
                {
                  text: '线段树（区间加+单点询问）',
                  link: '/dataStructure/SegmentTree/线段树（区间加+单点询问）'
                },
                {
                  text: '线段树（区间加法+区间乘法）',
                  link: '/dataStructure/SegmentTree/线段树（区间加法+区间乘法）'
                },
                {
                  text: '线段树（区间加法+区间修改+区间最大值）',
                  link: '/dataStructure/SegmentTree/线段树（区间加法+区间修改+区间最大值）'
                },
                {
                  text: '线段树（区间最大值+单点修改）',
                  link: '/dataStructure/SegmentTree/线段树（区间最大值+单点修改）'
                },
                {
                  text: '线段树（区间开根号+区间和）',
                  link: '/dataStructure/SegmentTree/线段树（区间开根号+区间和）'
                },
                {
                  text: '线段树（差分）',
                  link: '/dataStructure/SegmentTree/线段树（差分）'
                },
                {
                  text: '线段树（最大公约数）',
                  link: '/dataStructure/SegmentTree/线段树（最大公约数）'
                }
              ]
            },
            {
              text: '树状数组',
              collapsed: true,
              items: [
                {
                  text: '树状数组（点修区查）',
                  link: '/dataStructure/Binary Indexed Tree(BIT)/树状数组(点修区查)'
                },
                {
                  text: '树状数组（区修点查）',
                  link: '/dataStructure/Binary Indexed Tree(BIT)/树状数组（区修点查）'
                },
                {
                  text: '树状数组（区修区查）',
                  link: '/dataStructure/Binary Indexed Tree(BIT)/树状数组(区修区查)'
                }
              ]
            },
            {
              text: '二叉搜索树&平衡树',
              collapsed: true,
              items: [
                {
                  text: 'Splay',
                  link: '/dataStructure/二叉搜索树&平衡树/Splay'
                }
              ]
            },
            {
              text: '可持久化',
              collapsed: true,
              items: [
                {
                  text: '可持久化线段树',
                  link: '/dataStructure/Persistent/persistent-seg'
                }
              ]
            }
          ]
        }
      ],
      '/dynamicProgramming/': [
        {
          text: '动态规划',
          items: [
            {
              text: '线性DP',
              collapsed: false,
              items: [
                {
                  text: '最长上升子序列(LIS)',
                  link: '/dynamicProgramming/linear/最长上升子序列(LIS)'
                },
                {
                  text: '最长公共子序列(LCS)',
                  link: '/dynamicProgramming/linear/最长公共子序列(LCS)'
                },
                {
                  text: '最大子段和',
                  link: '/dynamicProgramming/linear/最大子段和'
                },
                {
                  text: '编辑距离',
                  link: '/dynamicProgramming/linear/编辑距离'
                },
                {
                  text: '股票买卖',
                  link: '/dynamicProgramming/linear/股票买卖'
                },
                {
                  text: '大盗阿福',
                  link: '/dynamicProgramming/linear/大盗阿福'
                },
                {
                  text: '饥饿的奶牛',
                  link: '/dynamicProgramming/linear/饥饿的奶牛'
                },
                {
                  text: '[NOIP1999 提高组] 导弹拦截',
                  link: '/dynamicProgramming/linear/[NOIP1999 提高组] 导弹拦截'
                }
              ]
            },
            {
              text: '背包DP',
              collapsed: true,
              items: [
                {
                  text: '01背包',
                  link: '/dynamicProgramming/knapsack/01-knapsack'
                },
                {
                  text: '完全背包',
                  link: '/dynamicProgramming/knapsack/Complete Knapsack'
                },
                {
                  text: '多重背包',
                  link: '/dynamicProgramming/knapsack/Multiple knapsack'
                },
                {
                  text: '分组背包',
                  link: '/dynamicProgramming/knapsack/Pack knapsack'
                },
                {
                  text: '依赖背包',
                  link: '/dynamicProgramming/knapsack/Dependent knapsack'
                },
                {
                  text: '混合背包',
                  link: '/dynamicProgramming/knapsack/Hybrid knapsack'
                },
                {
                  text: '二维费用背包',
                  link: '/dynamicProgramming/knapsack/Two-dimensional expense knapsack'
                },
                {
                  text: '背包方案数',
                  link: '/dynamicProgramming/knapsack/Number of solutions for knapsack problem'
                },
                {
                  text: '具体方案',
                  link: '/dynamicProgramming/knapsack/Specific scheme'
                }
              ]
            },
            {
              text: '区间DP',
              collapsed: true,
              items: [
                {
                  text: '[NOI1995] 石子合并',
                  link: '/dynamicProgramming/interval/[NOI1995] 石子合并'
                },
                {
                  text: '[NOIP2006 提高组] 能量项链',
                  link: '/dynamicProgramming/interval/[NOIP2006 提高组] 能量项链'
                }
              ]
            },
            {
              text: '树形DP',
              collapsed: true,
              items: [
                { text: '树形DP', link: '/dynamicProgramming/tree/Tree DP' },
                { text: '换根DP', link: '/dynamicProgramming/tree/换根dp' },
                { text: '树上背包', link: '/dynamicProgramming/tree/树上背包' }
              ]
            },
            {
              text: '状态压缩DP',
              collapsed: true,
              items: [
                {
                  text: '[SCOI2005] 互不侵犯',
                  link: '/dynamicProgramming/state/[SCOI2005] 互不侵犯'
                },
                {
                  text: '[USACO06NOV] Corn Fields G',
                  link: '/dynamicProgramming/state/[USACO06NOV] Corn Fields G'
                }
              ]
            },
            {
              text: '数位DP',
              collapsed: true,
              items: [
                {
                  text: '数位DP介绍',
                  link: '/dynamicProgramming/number/introduce'
                },
                {
                  text: '数字游戏',
                  link: '/dynamicProgramming/number/数字游戏'
                },
                {
                  text: '[SCOI2009] windy 数',
                  link: '/dynamicProgramming/number/[SCOI2009] windy 数'
                },
                {
                  text: '[ZJOI2010] 数字计数',
                  link: '/dynamicProgramming/number/[ZJOI2010] 数字计数'
                }
              ]
            },
            {
              text: '计数DP',
              collapsed: true,
              items: [
                {
                  text: '填数游戏',
                  link: '/dynamicProgramming/count/填数游戏'
                },
                {
                  text: '燓神的智慧',
                  link: '/dynamicProgramming/count/燓神的智慧'
                }
              ]
            },
            {
              text: '单调队列优化DP',
              collapsed: true,
              items: [
                {
                  text: '烽火传递',
                  link: '/dynamicProgramming/单调队列优化DP/烽火传递'
                },
                {
                  text: '旅行问题',
                  link: '/dynamicProgramming/单调队列优化DP/旅行问题'
                },
                {
                  text: '修剪草坪',
                  link: '/dynamicProgramming/单调队列优化DP/修剪草坪'
                },
                {
                  text: '绿色通道',
                  link: '/dynamicProgramming/单调队列优化DP/绿色通道'
                },
                {
                  text: '琪露诺',
                  link: '/dynamicProgramming/单调队列优化DP/琪露诺'
                }
              ]
            }
          ]
        }
      ],
      '/graph/': [
        {
          text: '图论',
          items: [
            { text: '图的遍历', link: '/graph/graph traversal' },
            { text: '图的存储', link: '/graph/save' },
            { text: '拓扑排序', link: '/graph/topo' },
            { text: '欧拉路径', link: '/graph/Euler' },
            { text: '01BFS', link: '/graph/01BFS' },
            { text: '最长路径', link: '/graph/longest-path' },
            { text: '最小环', link: '/graph/min-cycle' },
            { text: 'DFS序+BIT', link: '/graph/DFS序+BIT' },
            { text: 'DFS序+线段树', link: '/graph/DFS序+Segtree' },
            {
              text: '最短路',
              collapsed: true,
              items: [
                { text: 'Dijkstra', link: '/graph/shortest-path/Dijkstra' },
                { text: 'Floyd', link: '/graph/shortest-path/Floyd' },
                { text: 'SPFA', link: '/graph/shortest-path/SPFA' },
                {
                  text: 'SPFA（求路径和）',
                  link: '/graph/shortest-path/SPFA(求路径和)'
                },
                {
                  text: '分层图',
                  link: '/graph/shortest-path/Layered Diagram'
                },
                {
                  text: '最短路计数',
                  link: '/graph/shortest-path/Shortest path count'
                },
                { text: 'K短路', link: '/graph/shortest-path/kth-path' }
              ]
            },
            {
              text: '最小生成树',
              collapsed: true,
              items: [
                {
                  text: 'Kruskal',
                  link: '/graph/Minimal Spanning Tree(MST)/Kruskal'
                },
                { text: 'Prim', link: '/graph/Minimal Spanning Tree(MST)/Prim' }
              ]
            },
            {
              text: '树的问题',
              collapsed: true,
              items: [
                {
                  text: '最近公共祖先(LCA)',
                  link: "/graph/tree's problem/Lowest Common Ancestor(LCA)"
                },
                {
                  text: '树的直径',
                  link: "/graph/tree's problem/Tree-diameter"
                },
                {
                  text: '树的重心',
                  link: "/graph/tree's problem/Tree-centroid"
                },
                { text: '树链剖分', link: "/graph/tree's problem/HLD" },
                {
                  text: 'DFS序+树状数组',
                  link: "/graph/tree's problem/DFS序+树状数组"
                },
                {
                  text: '求先序排列',
                  link: "/graph/tree's problem/求先序排列"
                },
                {
                  text: '[SDOI2013] 直径',
                  link: "/graph/tree's problem/[SDOI2013] 直径"
                }
              ]
            },
            {
              text: '连通性相关',
              collapsed: true,
              items: [
                {
                  text: '强连通分量(SCC)',
                  link: '/graph/连通性相关/强连通分量(SCC)'
                },
                { text: '缩点', link: '/graph/连通性相关/【模板】缩点' },
                { text: '割点', link: '/graph/连通性相关/割点' },
                { text: '割边', link: '/graph/连通性相关/割边' }
              ]
            },
            {
              text: '网络流',
              collapsed: true,
              items: [{ text: '最大流', link: '/graph/flow/max-flow' }]
            },
            {
              text: '二分图匹配',
              collapsed: true,
              items: [
                {
                  text: '二分图匹配',
                  link: '/graph/graph-matching/bigraph-match'
                },
                { text: '增广路', link: '/graph/graph-matching/augment' }
              ]
            }
          ]
        }
      ],
      '/math/': [
        {
          text: '数学',
          items: [
            { text: '快速幂', link: '/math/quick power' },
            { text: '快速乘', link: '/math/fast multiply' },
            { text: 'GCD与LCM', link: '/math/GCD_LCM' },
            { text: 'Fibonacci', link: '/math/Fibonacci' },
            { text: 'Hanoi塔', link: '/math/Hanoi' },
            { text: '矩阵快速幂', link: '/math/Matrix(fast power)' },
            { text: '约数', link: '/math/divisor' },
            { text: '逆序对', link: '/math/inversePair' },
            { text: 'Cantor展开', link: '/math/Cantor' },
            { text: '数学结论', link: '/math/Conclusion' },
            { text: '唯一分解定理', link: '/math/unique_factorization_theory' },
            { text: '反素数', link: '/math/反素数' },
            {
              text: 'Bertrand-Chebyshev定理',
              link: '/math/Bertrand-Chebyshev Theorem'
            },
            {
              text: 'Miller-Rabin素性测试',
              link: '/math/Miller_Rabin素性测试'
            },
            {
              text: '数论',
              collapsed: true,
              items: [
                { text: '数论基础', link: '/math/number-theory/basic' },
                { text: '筛法', link: '/math/number-theory/Sieve' },
                {
                  text: '欧拉函数',
                  link: "/math/number-theory/Euler's totient"
                },
                {
                  text: '欧拉定理与费马小定理',
                  link: "/math/number-theory/Euler's  theorem & Fermat"
                },
                {
                  text: '扩展欧拉定理',
                  link: "/math/number-theory/extended Euler's theorem"
                },
                { text: '裴蜀定理', link: '/math/number-theory/bezouts' },
                {
                  text: '中国剩余定理(CRT)',
                  link: '/math/number-theory/Chinese Remainder Ttheorem(CRT)'
                },
                {
                  text: 'O型判定法',
                  link: '/math/number-theory/O-Counting Test'
                }
              ]
            },
            {
              text: '乘法逆元',
              collapsed: true,
              items: [
                {
                  text: '费马小定理',
                  link: '/math/modular multiplication inverse/乘法逆元(费马小定理)'
                },
                {
                  text: '扩展欧几里得',
                  link: '/math/modular multiplication inverse/乘法逆元(拓展欧几里得)'
                },
                {
                  text: '线性求解',
                  link: '/math/modular multiplication inverse/乘法逆元(线性求解)'
                }
              ]
            },
            {
              text: '组合数学',
              collapsed: true,
              items: [
                { text: '组合数', link: '/math/combinatorics/combination' },
                { text: 'Lucas定理', link: '/math/combinatorics/lucas' },
                { text: 'Catalan数', link: '/math/combinatorics/Catalan' },
                { text: 'Stirling数', link: '/math/combinatorics/stirling' },
                { text: '错位排列', link: '/math/combinatorics/derangement' },
                {
                  text: '容斥原理',
                  link: '/math/combinatorics/inclusion_exclusion_principle'
                }
              ]
            },
            {
              text: '博弈论',
              collapsed: true,
              items: [
                { text: 'Nim游戏', link: '/math/game theory/Nim_game' },
                {
                  text: '台阶型Nim游戏',
                  link: '/math/game theory/台阶型Nim游戏'
                },
                {
                  text: '有向图游戏和SG函数',
                  link: '/math/game theory/有向图游戏和SG函数'
                }
              ]
            }
          ]
        }
      ],
      '/search/': [
        {
          text: '搜索',
          items: [
            { text: 'DFS', link: '/search/DFS' },
            { text: 'BFS', link: '/search/BFS' },
            {
              text: 'BFS迷宫（输出最短路径）',
              link: '/search/BFS迷宫(输出最短的路径)'
            },
            { text: '双向BFS', link: '/search/双向bfs' },
            { text: '双端队列搜索', link: '/search/deque search' },
            { text: '八皇后问题', link: '/search/八皇后问题' },
            { text: '小猫爬山', link: '/search/小猫爬山' },
            { text: '送礼物', link: '/search/送礼物' }
          ]
        }
      ],
      '/string/': [
        {
          text: '字符串',
          items: [
            { text: 'String基础', link: '/string/String' },
            { text: 'KMP', link: '/string/KMP' },
            { text: '扩展KMP', link: '/string/extened KMP' },
            { text: 'Trie树', link: '/string/Trie' },
            { text: '字符串哈希', link: '/string/String Hash' },
            {
              text: '字符串哈希值前后缀和',
              link: '/string/字符串哈希值前(后)缀和'
            },
            { text: 'Manacher', link: '/string/Manacher' },
            { text: 'AC自动机', link: '/string/AC-automaton' },
            { text: '最小表示法', link: '/string/minimal-string' }
          ]
        }
      ],
      '/misc/': [
        {
          text: '杂项',
          items: [
            { text: 'bitset', link: '/misc/bitset' },
            { text: 'lambda表达式', link: '/misc/lambda' },
            { text: '离散化', link: '/misc/discrete' },
            { text: '双指针', link: '/misc/two-pointers' },
            { text: 'unique去重', link: '/misc/unique' },
            { text: 'next_permutation', link: '/misc/next_permutation' },
            {
              text: 'lower_bound & upper_bound',
              link: '/misc/lower_bound upper_bound'
            },
            { text: 'memcpy', link: '/misc/memcpy' },
            { text: 'mt19937随机数', link: '/misc/mt19937' },
            { text: 'pb_ds', link: '/misc/pb_ds' },
            { text: 'cbrt立方根', link: '/misc/cbrt' },
            { text: 'round ceil floor', link: '/misc/round ceil floor' },
            { text: 'struct结构体', link: '/misc/struct' },
            { text: '闰年判断', link: '/misc/leap year' },
            { text: 'hermite插值', link: '/misc/hermite' },
            { text: '区间内求奇数个数', link: '/misc/区间内求奇数个数' },
            { text: '计算行列式的值', link: '/misc/计算行列式的值' },
            {
              text: 'STL',
              collapsed: true,
              items: [
                {
                  text: 'vector',
                  link: '/misc/Standard Template Library/vector'
                },
                {
                  text: 'stack',
                  link: '/misc/Standard Template Library/stack'
                },
                {
                  text: 'queue',
                  link: '/misc/Standard Template Library/queue'
                },
                {
                  text: 'deque',
                  link: '/misc/Standard Template Library/deque'
                },
                {
                  text: 'priority_queue',
                  link: '/misc/Standard Template Library/priority_queue'
                },
                { text: 'set', link: '/misc/Standard Template Library/set' },
                { text: 'map', link: '/misc/Standard Template Library/map' },
                { text: 'pair', link: '/misc/Standard Template Library/pair' },
                { text: 'tuple', link: '/misc/Standard Template Library/tuple' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huangshuheng0405/Algorithm' }
    ]
  }
})
