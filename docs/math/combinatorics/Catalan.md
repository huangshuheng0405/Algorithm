# 卡特兰数

### Catalan

一种操作数不能超过另一种操作数，或者两种操作不能有交集，这些操作的合法方案数，通常是卡特兰数
$$
H_n=\frac{H_{n-1}(4n-2)}{n+1}
$$

$$
H_n={2n\choose n}-{2n \choose n+1}
$$

$$
T_{1}（x）=\begin{cases} \sum_{i=1}^n H_{i-1}H_{n-i} ,n\geq 2 \\ 1, n = 0,1\end{cases}
$$

$$
H_n=\frac{1}{n+1}{2n\choose n}
$$

对于大数来说，要多$n+1$求逆元，而不是直接除

数列的前几项为：（下标从$0$开始）
$$
1,12,5,13,42,132,429,1430,...
$$

```c++
#include<iostream>
using namespace std;
#define ll long long
ll h[1005],n;
int main(){
    cin>>n;
    h[0]=h[1]=1;
    for(int i=2;i<=n;i++)
        for(int k=1;k<=i;k++){
            h[i]+=h[k-1]*h[i-k];
            h[i]%=100;
        }
    cout<<h[n];
    return 0;
}
```

```c++
#include<iostream>
#include<vector>
#include<algorithm>
#include<queue>
#include<cstring>
#include<string>
#include<cmath>
#include<set>
#include<map>
#include<unordered_set>

using namespace std;
#define ll long long
#define ull unsigned long long
#define endl '\n'
const int N = 1e5 + 5;
const int mod = 1e9 + 7;
const ll inf = 1e18;
//int d[4][2] = {-1, 0, 0, 1, 1, 0, 0, -1};//  上右下左

void solve() {
    vector<int> h(100);
    h[1]=1;
    for (int i = 2; i <= 10; i++) {
        h[i] = h[i - 1] * (4 * i - 2) / (i + 1);
    }
    for (int i = 1; i <= 10; i++) {
        cout << h[i] << ' ';
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int _ = 1;

    //cin >> _;
    while (_--) {
        solve();
    }
    return 0;
}

```

# 应用

## **路径计数问题**

有一个大小$n\times n$的方格图，左下角为$(0,0)$，右上角为$(n,n)$。从左下角开始，每次都只能向右或者向上走一单位，不走到对角线$y=x$上方（但可以触碰）的情况下，到达右上角的路径总数$C_n$。

大数（$10^{7}$）的卡特兰数

```c++
//
// Created by 黄书恒1 on 25-9-12.
//
#include<bits/stdc++.h>

using i64 = long long;

constexpr int P = 1000000007;
constexpr int L = 2E7 + 5;

i64 fac[L + 5];
//i64 sumbinom[L + 1][7];
i64 power(i64 a, i64 b) {
    i64 res = 1;
    for (; b; b /= 2, a = 1LL * a * a % P) {
        if (b % 2) {
            res = 1LL * res * a % P;
        }
    }
    return res % P;
}

i64 binom(i64 n, i64 m) {
    if (n < m || m < 0) {
        return 0;
    }
    return 1LL * fac[n] * (power(fac[m], P - 2)) % P * (power(fac[n - m], P - 2)) % P;
}


void solve() {
    i64 x;
    std::cin >> x;

//    x--;
//    std::cerr << binom(2 * x, x) << "\n";
    i64 ans =  binom(2 * x, x) * power(x + 1, P - 2) % P;

    std::cout << ans % P << "\n";
}

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int t;
    std::cin >> t;

    fac[0] = 1;
    for (int i = 1; i <= L; i++) {
        fac[i] = 1LL * fac[i - 1] * i % P;
    }

    while (t--) {
        solve();
    }


}
```

## **出栈序列计数问题**

一个栈（无穷大）的进栈序列$1,2,3,...,n$，合法出栈序列的数目为$C_n$

# P1044 [NOIP 2003 普及组] 栈

## 题目背景

栈是计算机中经典的数据结构，简单的说，栈就是限制在一端进行插入删除操作的线性表。

栈有两种最重要的操作，即 pop（从栈顶弹出一个元素）和 push（将一个元素进栈）。

栈的重要性不言自明，任何一门数据结构的课程都会介绍栈。宁宁同学在复习栈的基本概念时，想到了一个书上没有讲过的问题，而他自己无法给出答案，所以需要你的帮忙。

## 题目描述

![](https://cdn.luogu.com.cn/upload/image_hosting/5qxy9fz2.png)

宁宁考虑的是这样一个问题：一个操作数序列，$1,2,\ldots ,n$（图示为 1 到 3 的情况），栈 A 的深度大于 $n$。

现在可以进行两种操作，

1. 将一个数，从操作数序列的头端移到栈的头端（对应数据结构栈的 push 操作）
2. 将一个数，从栈的头端移到输出序列的尾端（对应数据结构栈的 pop 操作）

使用这两种操作，由一个操作数序列就可以得到一系列的输出序列，下图所示为由 `1 2 3` 生成序列 `2 3 1` 的过程。

![](https://cdn.luogu.com.cn/upload/image_hosting/8uwv2pa2.png)

（原始状态如上图所示）

你的程序将对给定的 $n$，计算并输出由操作数序列 $1,2,\ldots,n$ 经过操作可能得到的输出序列的总数。

## 输入格式

输入文件只含一个整数 $n$（$1 \leq n \leq 18$）。

## 输出格式

输出文件只有一行，即可能输出序列的总数目。

## 输入输出样例 #1

### 输入 #1

```
3
```

### 输出 #1

```
5
```

## 说明/提示

**【题目来源】**

NOIP 2003 普及组第三题

# Solve

```c++
#include <iostream>
#include <stdio.h>
#include<math.h>
#include<stdlib.h>
#include<algorithm>
#include<stack>
#include<queue>
#include<deque>
#include<iomanip>
#include <string>
using namespace std;
int main()
{
	int n, dp[20] = { 1,1,2 };//赋初值
	cin >> n;
	//从前拆分成两段来乘
	//递推式f(n)=f(0)*f(n-1)+f(1)*f(n-2)+....+f(n-1)*f(0)
	for (int i = 3; i <= n; i++)
	{
		for (int k = 1; k <= i; k++)
		{
			dp[i] += dp[k - 1] * dp[i - k];//
		}
	}
	cout << dp[n];
	return 0;
}
```

