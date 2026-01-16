# P3369 【模板】普通平衡树

## 题目描述

您需要动态地维护一个可重集合 $M$，并且提供以下操作：

1. 向 $M$ 中插入一个数 $x$。
2. 从 $M$ 中删除一个数 $x$（若有多个相同的数，应只删除一个）。
3. 查询 $M$ 中有多少个数比 $x$ 小，并且将得到的答案加一。
4. 查询如果将 $M$ 从小到大排列后，排名位于第 $x$ 位的数。
5. 查询 $M$ 中 $x$ 的前驱（前驱定义为小于 $x$，且最大的数）。
6. 查询 $M$ 中 $x$ 的后继（后继定义为大于 $x$，且最小的数）。

对于操作 3,5,6，**不保证**当前可重集中存在数 $x$。

对于操作 $5,6$，保证答案一定存在。

## 输入格式

第一行为 $n$，表示操作的个数,下面 $n$ 行每行有两个数 $\text{opt}$ 和 $x$，$\text{opt}$ 表示操作的序号（$ 1 \leq \text{opt} \leq 6 $）

## 输出格式

对于操作 $3,4,5,6$ 每行输出一个数，表示对应答案。

## 输入输出样例 #1

### 输入 #1

```
10
1 106465
4 1
1 317721
1 460929
1 644985
1 84185
1 89851
6 81968
1 492737
5 493598
```

### 输出 #1

```
106465
84185
492737
```

## 说明/提示

【数据范围】  
对于 $100\%$ 的数据，$1\le n \le 10^5$，$|x| \le 10^7$

来源：Tyvj1728 原名：普通平衡树

在此鸣谢

# solve

`pb_ds`版

排名是从$0$开始的，前驱和后继有点乱，可以举例子好理解一点

```c++
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>

using i64 = long long;
using namespace __gnu_pbds;

typedef tree<std::pair<int, int>, null_type, std::less<std::pair<int, int>>, rb_tree_tag, tree_order_statistics_node_update> Tree;


int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int n;
    std::cin >> n;

    Tree tr;
    std::map<int, int> dic;

    while (n--) {
        int opt, x;
        std::cin >> opt >> x;

        if (opt == 1) {
            tr.insert({x, ++dic[x]});
        } else if (opt == 2) {
            tr.erase({x, dic[x]--});
        } else if (opt == 3) { // 查询元素 x 的排名 （比当前数小的个数 + 1）
            std::cout << tr.order_of_key({x, 1}) + 1 << "\n"; 
        } else if (opt == 4) { // 查询排名为 x 的元素
            std::cout << tr.find_by_order(x - 1)->first << "\n";
        } else if (opt == 5) { // 查找 x 的前驱
            int idx = tr.order_of_key({x, 1}) - 1; // 无论x存不存在都要 -1 排名从0开始所以要 -1

            std::cout << tr.find_by_order(idx)->first << "\n";
        } else { // 查找 x 的后继
            int idx = tr.order_of_key({x, dic[x]}); // 如果 x 不存在 那么idx就是x的后继
            if (tr.find({x, 1}) != tr.end()) { // 如果 x 存在 那么idx是x的位置要 +1
                idx++;
            }
            // 求排名要 +1
            std::cout << tr.find_by_order(idx)->first << "\n";
        }
    }

    return 0;
}
```

