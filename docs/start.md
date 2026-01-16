# 开始学习

欢迎来到算法学习之旅！本站汇集了常见的算法与数据结构知识，从基础到进阶，助你系统掌握算法思维。

## 📚 学习路线

### 第一阶段：基础算法

在开始学习复杂的数据结构和算法之前，建议先掌握这些基础内容：

- **[二分查找](/basic/binary)** - 最常用的搜索算法
- **[前缀和](/basic/prefix-sum)** - 快速区间求和的利器
- **[差分](/basic/difference)** - 区间修改的高效技巧
- **[排序算法](/basic/sort/冒泡排序)** - 理解各种排序的思想和复杂度

::: tip 建议
基础算法是后续学习的基石，务必扎实掌握每个算法的原理和实现。
:::

### 第二阶段：数据结构

掌握基础后，学习常用的数据结构来解决更复杂的问题：

- **线性结构**
  - [单调栈](/dataStructure/monotonous-stack) / [单调队列](/dataStructure/monotonous-queue)
  - [链表](/dataStructure/linked-list/单向链表)
- **树形结构**
  - [并查集](/dataStructure/DisjointSetUnion(DSU）/并查集（板子）) - 维护集合的合并与查询
  - [线段树](/dataStructure/SegmentTree/线段树（区间加法）) - 强大的区间操作工具
  - [树状数组](</dataStructure/Binary%20Indexed%20Tree(BIT)/树状数组(点修区查)>) - 简洁高效的树形数组
- **高级结构**
  - [ST 表](</dataStructure/Sparse-table(ST)>) - 静态 RMQ 问题
  - [Splay 树](/dataStructure/二叉搜索树&平衡树/Splay) - 平衡树的优雅实现

### 第三阶段：动态规划

动态规划是算法竞赛的核心内容，需要大量练习：

- **入门 DP**
  - [最长上升子序列(LIS)](</dynamicProgramming/linear/最长上升子序列(LIS)>)
  - [最长公共子序列(LCS)](</dynamicProgramming/linear/最长公共子序列(LCS)>)
  - [最大子段和](/dynamicProgramming/linear/最大子段和)
- **背包问题**
  - [01 背包](/dynamicProgramming/knapsack/01-knapsack) → [完全背包](/dynamicProgramming/knapsack/Complete%20Knapsack) → [多重背包](/dynamicProgramming/knapsack/Multiple%20knapsack)
- **进阶 DP**
  - [区间 DP](/dynamicProgramming/interval/[NOI1995]%20石子合并)
  - [树形 DP](/dynamicProgramming/tree/Tree%20DP)
  - [状态压缩 DP](/dynamicProgramming/state/[SCOI2005]%20互不侵犯)
  - [数位 DP](/dynamicProgramming/number/introduce)

### 第四阶段：图论

图论算法应用广泛，从基础遍历到复杂网络流：

- **基础图论**
  - [图的存储](/graph/save) / [图的遍历](/graph/graph%20traversal)
  - [拓扑排序](/graph/topo)
- **最短路问题**
  - [Dijkstra](/graph/shortest-path/Dijkstra) / [SPFA](/graph/shortest-path/SPFA) / [Floyd](/graph/shortest-path/Floyd)
- **树的问题**
  - [最近公共祖先(LCA)](</graph/tree's%20problem/Lowest%20Common%20Ancestor(LCA)>)
  - [树链剖分](/graph/tree's%20problem/HLD)
  - [树的直径](/graph/tree's%20problem/Tree-diameter)
- **高级图论**
  - [最小生成树](</graph/Minimal%20Spanning%20Tree(MST)/Kruskal>)
  - [强连通分量](</graph/连通性相关/强连通分量(SCC)>)
  - [最大流](/graph/flow/max-flow)
  - [二分图匹配](/graph/graph-matching/bigraph-match)

### 第五阶段：数学与字符串

- **数学基础**
  - [快速幂](/math/quick%20power) / [矩阵快速幂](</math/Matrix(fast%20power)>)
  - [GCD 与 LCM](/math/GCD_LCM)
  - [组合数学](/math/combinatorics/combination)
  - [数论](/math/number-theory/basic)
- **字符串算法**
  - [KMP](/string/KMP) - 字符串匹配的经典算法
  - [字符串哈希](/string/String%20Hash)
  - [Trie 树](/string/Trie)
  - [AC 自动机](/string/AC-automaton)
  - [Manacher](/string/Manacher) - 回文串问题

## 🎯 学习建议

### 1. 循序渐进

不要跳过基础内容直接学习高级算法。扎实的基础是解决复杂问题的关键。

### 2. 多写代码

算法学习最重要的是**动手实践**。每学习一个算法，务必：

- 手写实现代码
- 做相关的练习题
- 理解时间和空间复杂度

### 3. 总结归纳

学习过程中要善于总结：

- 同类问题的解法模式
- 算法的适用场景
- 常见的优化技巧

### 4. 刷题训练

推荐的刷题平台：

- [洛谷](https://www.luogu.com.cn/) - 中文题库，适合入门
- [Codeforces](https://codeforces.com/) - 国际竞赛平台
- [LeetCode](https://leetcode.cn/) - 面试常考题目
- [AtCoder](https://atcoder.jp/) - 日本竞赛平台

### 5. 复习巩固

- 定期回顾学过的算法
- 用学过的知识解决新问题
- 参加模拟比赛检验学习效果

## 💡 快速开始

如果你是初学者，建议从以下内容开始：

1. **[二分查找](/basic/binary)** - 体会算法的精妙之处
2. **[前缀和](/basic/prefix-sum)** - 学会用空间换时间
3. **[排序算法](/basic/sort/快速排序)** - 理解分治思想
4. **[并查集](/dataStructure/DisjointSetUnion(DSU）/并查集（板子）)** - 感受数据结构的力量
5. **[最长上升子序列](</dynamicProgramming/linear/最长上升子序列(LIS)>)** - 入门动态规划

::: warning 注意
算法学习需要耐心和坚持，遇到困难很正常。保持学习热情，持续练习，你一定能够掌握这些知识！
:::

## 🔗 其他资源

- **算法可视化**：[VisuAlgo](https://visualgo.net/zh)
- **算法书籍**：《算法竞赛进阶指南》、《算法导论》
- **在线工具**：[C++ Reference](https://zh.cppreference.com/)

## 🛠️ 推荐编辑器

选择合适的编辑器可以大大提升编程效率：

### 竞赛/刷题推荐

- **[Visual Studio Code](https://code.visualstudio.com/)** ⭐ 推荐

  - 轻量级、启动快速
  - 丰富的插件生态（C/C++、Code Runner、竞赛助手）
  - 跨平台支持
  - 适合日常练习和比赛

- **[CLion](https://www.jetbrains.com/clion/)**

  - JetBrains 出品的专业 C/C++ IDE
  - 强大的代码补全和重构功能
  - 智能代码提示，大幅提升编码效率
  - 学生可免费使用

- **[Sublime Text](https://www.sublimetext.com/)**
  - 启动速度极快
  - 界面简洁美观
  - 插件丰富
  - 适合比赛使用

### 功能全面型

- **[Visual Studio](https://visualstudio.microsoft.com/)**

  - 微软官方 IDE（仅 Windows）
  - 强大的调试功能
  - 适合大型项目开发
  - 社区版免费

- **[Code::Blocks](https://www.codeblocks.org/)**
  - 轻量级 C/C++ IDE
  - 开源免费
  - 适合初学者
  - NOI 系列比赛指定环境之一

### 在线编辑器

- **[洛谷 IDE](https://www.luogu.com.cn/ide)**

  - 在线编译运行
  - 支持多种语言
  - 无需配置环境

- **[Replit](https://replit.com/)**
  - 云端开发环境
  - 支持协作编程
  - 适合快速验证代码

::: tip 推荐配置
对于算法竞赛和日常练习，**VS Code + C/C++ 插件** 是最佳选择：

- 安装 C/C++ Extension Pack
- 安装 Code Runner（快速运行代码）
- 配置代码模板（快速生成常用代码框架）
- 使用 Competitive Programming Helper 插件辅助刷题
  :::

---

准备好了吗？选择你喜欢的编辑器，现在就开始你的算法学习之旅吧！ 🚀
