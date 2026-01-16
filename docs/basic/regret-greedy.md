[hdu-7514](https://acm.hdu.edu.cn/showproblem.php?pid=7514)

故障机器人共有 $x$ 点生命值，他在高塔中遭遇了 $n$个敌人，在和第 $i$个敌人战斗后故障机器人会损失 $a_i $点生命值，在战斗结束后生命值降低到 $0$ 或以下时故障机器人会死亡。同时，故障机器人手上有 $k$ 个烟雾弹，在战斗开始时，他可以选择消耗 $1$ 个烟雾弹来逃离这场战斗，如此战斗会直接结束，故障机器人在这场战斗中不会损失生命值。

 故障机器人将依次与 $n$ 个敌人进行战斗，他想知道在最优策略下，最多能存活到第几场战斗结束，你能帮帮故障机器人吗？ 

# 题解

```c++
#include <bits/stdc++.h>

using i64 = long long;

void solve() {
    int n, x, k;
    std::cin >> n >> x >> k;

    std::vector<int> a(n);
    for (int i = 0; i < n; i++) {
        std::cin >> a[i];
    }

    std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
    int i = 0;
    for (i = 0; i < n; i++) {
        if (pq.size() < k) { // k次以内先不减生命值
            pq.push(a[i]);
            continue;
        }
        pq.push(a[i]);
        if (pq.top() >= x) {
            break;
        }
        x -= pq.top(); // 减去最小的
        pq.pop();
    }

    std::cout << i << "\n";
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    int t = 1;

    std::cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
```

 您可以完美预测某只股票未来 N 天的价格。每天你要么买入一股，要么卖出一股，要么什么都不做。起初你拥有零股，当你没有任何股票时，你不能卖出股票。在 N 天结束时，您希望再次拥有零股，但希望拥有尽可能多的资金。 

# CF865D Buy Low Sell High

## 题目描述

你可以完美地预测某只股票接下来 $N$ 天的价格，你想利用这一知识盈利，但你每天只想买卖一股，这表明你每天要么什么都不干，要么买入一股，要么卖出一股。起初你没有股票，你也不能在没有股票时卖出股票。你希望在第 $N$ 天结束时不持有股票，并最大化盈利。

## 输入格式

第一行一个整数 $N$（$2 \le N \le 3 \times 10^5$），表示天数。

接下来一行 $N$ 个整数 $p_1,p_2,\dots p_N$（$1 \le p_i \le 10^6$），表示第 $i$ 天的股价。

## 输出格式

输出你第 $N$ 天结束时的最大盈利。

### 样例解释

在股价为 $5,4$ 时各买入一股，在股价为 $9,12$ 时各卖出一股，接着在股价为 $2$ 时买入一股，股价为 $10$ 时卖出一股，总收益为 $20$。

Translated by uid $408071$。

## 输入输出样例 #1

### 输入 #1

```
9
10 5 4 7 9 12 6 2 10
```

### 输出 #1

```
20
```

## 输入输出样例 #2

### 输入 #2

```
20
3 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4
```

### 输出 #2

```
41
```

# 题解

考虑$i<j<k,a_i<a_j<a_k$，怎么样交易更大？

- 如果在第$i$天买入，第$j$天卖出，利润为$p_j-p_i$
- 如果在第$i$天买入，第$k$天卖出，利润为$p_k-p_i$更大

每步**贪心+返回**的策略：如果当天有利可图，就卖出，同时买入当天的股票，后面再涨再卖出

$(p_j-p_i)+)p_k-p_j=p_k-p_i$，等价于第$j$天没有交易，符合题意

从前往后枚举$p_i$每个$p_i$都要压入堆（买入）,以便将来交易

如果满足$p_i>q.top()$，取出堆顶，获得利润，把$p_i$再次压入堆（买入）,以便将来反悔

时间复杂度：$O(nlogn)$

```c++
#include <bits/stdc++.h>

using i64 = long long;

void solve() {
    int n;
    std::cin >> n;

    std::vector<int> a(n);
    for (int i = 0; i < n; i++) {
        std::cin >> a[i];
    }

    i64 ans = 0;
    std::priority_queue<int, std::vector<int>, std::greater<int>> q;//从小到大
    for (int i = 0; i < n; i++) {
        if (!q.empty() && q.top() < a[i]) {
            ans += (a[i] - q.top());
            q.pop();      // 卖出a[i]
            q.push(a[i]); // 买入a[i](为了反悔)
        }
        q.push(a[i]); // 买入a[i](为了交易)
    }

    std::cout << ans << "\n";
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    int t = 1;

    // std::cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
```

# P2949 [USACO09OPEN] Work Scheduling G

## 题目描述

Farmer John has so very many jobs to do! In order to run the farm efficiently, he must make money on the jobs he does, each one of which takes just one time unit.

His work day starts at time 0 and has 1,000,000,000 time units (!).  He currently can choose from any of N (1 <= N <= 100,000) jobs

conveniently numbered 1..N for work to do. It is possible but

extremely unlikely that he has time for all N jobs since he can only work on one job during any time unit and the deadlines tend to fall so that he can not perform all the tasks.

Job i has deadline D\_i (1 <= D\_i <= 1,000,000,000). If he finishes job i by then, he makes a profit of P\_i (1 <= P\_i <= 1,000,000,000).

What is the maximum total profit that FJ can earn from a given list of jobs and deadlines?  The answer might not fit into a 32-bit integer.

## 输入格式

\* Line 1: A single integer: N

\* Lines 2..N+1: Line i+1 contains two space-separated integers: D\_i and P\_i

## 输出格式

\* Line 1: A single number on a line by itself that is the maximum possible profit FJ can earn.

## 输入输出样例 #1

### 输入 #1

```
3 
2 10 
1 5 
1 7
```

### 输出 #1

```
17
```

## 说明/提示

Complete job 3 (1,7) at time 1 and complete job 1 (2,10) at time 2 to maximize the earnings (7 + 10 -> 17).

# 题解

先对$n$项工作，按截止日期排序

然后枚举每项工作，

如果当前工作有时间做，就先做了它（**贪心**），并把它的利润压入一个**小根堆**

如果当前工作与前项工作截止日期相同，就进一步比较，如果当前的工作利润大于堆顶工作，就放弃堆顶的那个工作（**反悔**），用做他的时间去做当前工作，利润更大

```c++
#include <bits/stdc++.h>

using i64 = long long;

void solve() {
    int n;
    std::cin >> n;

    std::vector<std::array<int, 2>> a(n);
    for (int i = 0; i < n; i++) {
        std::cin >> a[i][0] >> a[i][1];
    }

    std::sort(a.begin(), a.end()); // 按截止时间排序

    i64 ans = 0;
    std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
    for (int i = 0; i < n; i++) {
        if (a[i][0] == pq.size()) {   // 截止时间相同
            if (a[i][1] > pq.top()) { // 利润更大
                ans -= pq.top();      // 反悔
                pq.pop();
                pq.push(a[i][1]);
                ans += a[i][1]; // 贪心
            }
        } else {
            pq.push(a[i][1]);
            ans += a[i][1]; // 贪心
        }
    }

    std::cout << ans << "\n";
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    int t = 1;

    // std::cin >> t;
    while (t--) {
        solve();
    }
    return 0;
}
```

# P3045 [USACO12FEB] Cow Coupons G

## 题目背景

Subtask 0 为原数据，Subtask 1,2 为 hack 数据。

## 题目描述

Farmer John needs new cows! There are N cows for sale (1 <= N <= 50,000), and FJ has to spend no more than his budget of M units of money (1 <= M <= 10^14).  Cow i costs P\_i money (1 <= P\_i <= 10^9), but FJ has K coupons (1 <= K <= N), and when he uses a coupon on cow i, the cow costs C\_i instead (1 <= C\_i <= P\_i). FJ can only use one coupon per cow, of course.

What is the maximum number of cows FJ can afford? 

FJ 准备买一些新奶牛。市场上有 $N$ 头奶牛，第 $i$ 头奶牛价格为 $P_i$。FJ 有 $K$ 张优惠券，使用优惠券购买第 $i$ 头奶牛时价格会降为 $C_i$，当然每头奶牛只能使用一次优惠券。FJ 想知道花不超过 $M$ 的钱最多可以买多少奶牛？

- $1 \le K \le N \le 5 \times 10^4$
- $1 \le C_i \le P_i \le 10^9$
- $1 \le M \le 10^{14}$

## 输入格式

\* Line 1: Three space-separated integers: N, K, and M.

\* Lines 2..N+1: Line i+1 contains two integers: P\_i and C\_i.

## 输出格式

\* Line 1: A single integer, the maximum number of cows FJ can afford.

## 输入输出样例 #1

### 输入 #1

```
4 1 7 
3 2 
2 2 
8 1 
4 3
```

### 输出 #1

```
3
```

## 说明/提示

FJ has 4 cows, 1 coupon, and a budget of 7.


FJ uses the coupon on cow 3 and buys cows 1, 2, and 3, for a total cost of 3 + 2 + 1 = 6.

## Solve

我们先选取$c$最小的$k$个物品使用优惠劵，当前已经使用的价格是$tot$。记使用优惠劵的物品集合为$A$

当前考虑第$i$个物品，由于$k$张优惠券已经用完了，所以只能以原价$p_i$购买物品$i$。现在考虑反不反悔的条件是什么。

如果要反悔，那么用优惠券买$i$的价格一定要小于用原价买$i$。当$i$用了优惠券，那么势必要有一个物品（记为$j,j\in A$）做出退让，用原价来买$j$。（其实相当于用$i$来代替$j$），那么一定满足以下不等式：
$$
tot-c_j+p_j+c_i<tot+p_i
$$
意思是：$i$代替$j$用优惠券的价格比用原价买$i$便宜，这个时候就需要反悔。

整理一下可得
$$
p_j-c_j<p_i-c_i
$$
所以只要在已经使用优惠券的物品里面，存在一个$j$，使得$\delta_j < \delta_i$,我们就需要用$i$代替$j$使用优惠券。也就是$k$个物品中，$(\delta_j)_{min}<\delta_i$。注意这个不是恒等式，因为$i\notin A$，但是$j\in A$。

用优先队列维护最小值

```c++
#include <bits/stdc++.h>

using i64 = long long;

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);

    i64 n, k, m;
    std::cin >> n >> k >> m;

    std::vector<i64> p(n), c(n);
    std::priority_queue<std::pair<i64, i64>, std::vector<std::pair<i64, i64>>, std::greater<std::pair<i64 ,i64>>> P, C;
    for (int i = 0; i < n; i++) {
        std::cin >> p[i] >> c[i];

        P.push({p[i], i});
        C.push({c[i], i});
    }

    std::vector<bool> vis(n + 1);
    std::priority_queue<i64, std::vector<i64>, std::greater<i64>> pq;
    for (int i = 0; i < k; i++) { // 用k张优惠券直接买 c 最小的
        pq.push(0);
    }


    int ans = 0;
    while (!P.empty()) {
        auto [a, b] = P.top();
        auto [c1, d] = C.top();
           
        if (vis[b]) {
            P.pop();
            continue;
        }
        if (vis[d]) {
            C.pop();
            continue;
        }
        if (pq.top() > a - c1) { // 如果 省的钱大于直接买 那就不用
            m -= a;
            P.pop();
            vis[b] = true;
        } else {
            m -= c1 + pq.top(); // -pq.top 相当于之前原价买 -c1 用券买当前的物品
            pq.pop();
            C.pop();
            vis[d] = true;
            pq.push(p[d] - c[d]); //  pq 存的是 省了多少价值
        }

        if (m >= 0) {
            ans++;
        } else {
            break;
        }
    }

    std::cout << ans << "\n";


    return 0;
}
```

