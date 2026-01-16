# 01BFS

## 适用范围

边权值为可能有，也可能没有（由于 BFS 适用于权值为 1 的图，所以一般权值是 0 或 1），或者能够转化为这种边权值的最短路问题。

例如在走迷宫问题中，你可以花 1 个金币走 5 步，也可以不花金币走 1 步，这就可以用 0-1 BFS 解决。

### 实现

一般情况下，我们把没有权值的边扩展到的点放到队首，有权值的边扩展到的点放到队尾。这样即可保证像普通 BFS 一样整个队列队首到队尾权值单调不下降。

# 例题

`Ke_scholar` 在学术探险中发现了一个古老的数字迷宫。这个迷宫由古代学者设计，每个格子都有两种属性：**通行类型**和**学术能量值**。

`Ke_scholar` 需要从起点到达终点，但他的学术精力有限，必须谨慎选择路线，他想知道自己是否能达到终点，如果可以，最少消耗的精力是多少，你能帮帮他吗？

## 描述

迷宫是一个$n\times m$的网格，每个格子有两个属性：

1. **通行类型**：
   - `S`：起点（Start）
   - `E`：终点（End）
   - `#`：能量屏障，无法通过
   - `.`：普通学术区域，可以通行
2. **学术能量值**：
   - 每个格子有一个学术能量值。
   - 能量值相同的格子具有"学术共鸣"。
   - 在具有"学术共鸣"的格子间移动不会消耗精力。

`Ke_scholar` 从起点`S`出发，要到达终点`E`。每次只能移动到**上下左右相邻**的格子，移动规则如下：

- 如果移动到的相邻格子学术能量值**等于**当前格子能量值，则**不消耗**学术精力。
- 如果学术能量值**不同**，则**消耗$1$点**学术精力。
- 不能进入能量屏障 `#`。
- `Ke_scholar` 初始有$k$点学术精力，精力不能为负值。
- 起点`S`和终点`E`也具有学术能量值。

## 输入

第一行三个整数：$n,m,k$。其中$n,m$表示迷宫的行数和列数$1\leq n\times m\leq 1\times 10^4$，$k$表示初始学术精力$(0\leq k\leq 100)$。

接下来$n$行，每行$m$个字符，表示迷宫每个格子的通行类型。

再接下来$n$行，每行$m$个整数，表示迷宫每个格子的学术能量值$a_{i,j}(1\leq a_{i,j}\leq 1\times 10^4)$

保证恰好有一个`S`和一个`E`。

## 输出

- 如果能够到达终点，输出一个 `YES`，然后再输出一个整数，表示**最少消耗的学术精力**。
- 如果无法到达，输出 `NO`。

### 样例1

#### 输入数据1

```
3 3 5
S..
.#.
..E
0 1 0
2 3 7
5 6 7

```

#### 输出数据1

```
YES
3

```

#### 解释

通过选择路径$S(0,0)→(0,1)→(0,2)→(1,2)→(2,2)$共进行$3$次颜色不同的移动，消耗$3$点精力。

# 答案

```c++
#include <bits/stdc++.h>

using i64 = long long;

int d[4][2] = {-1, 0, 0, 1, 1, 0, 0, -1}; //  上右下左

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);

    int n, m, k;
    std::cin >> n >> m >> k;

    int sx = 0, sy = 0;
    std::vector<std::vector<char>> a(n + 1, std::vector<char> (m + 1));
    std::map<std::array<int, 2>, int> mp;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            std::cin >> a[i][j];
            if (a[i][j] == 'S') {
                sx = i, sy = j;
            }
        }
    }
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            std::cin >> mp[{i, j}];
        }
    }

    auto bfs = [&]() -> void {
        std::deque<std::array<int, 2>> deq;
        std::vector<std::vector<int>> dis(n + 1, std::vector<int>(m + 1, 1E9));
        deq.push_back({sx, sy});
        dis[sx][sy] = 0;
        while (!deq.empty()) {
            auto [x, y] = deq.front();
            deq.pop_front();
            if (a[x][y] == 'E') {
                if (dis[x][y] > k) {
                    std::cout << "NO\n";
                } else {
                    std::cout << "YES\n";
                    std::cout << dis[x][y] << "\n";
                }
                return;
            }
            for (int i = 0; i < 4; i++) {
                int dx = x + d[i][0];
                int dy = y + d[i][1];
                if (dx >= 1 && dx <= n && dy >= 1 && dy <= m && a[dx][dy] != '#') {
                    int nstep = (mp[{x, y}] == mp[{dx, dy}]) ? 0 : 1;
                    if (dis[x][y] + nstep < dis[dx][dy]) {
                        dis[dx][dy] = dis[x][y] + nstep;
                        if (nstep) {
                            deq.push_back({dx, dy}); // 0 放队尾
                        } else {
                            deq.push_front({dx, dy});// 1 放队首
                        }
                    }
                }
            }
        }
        std::cout << "NO\n";
    };
    bfs();
    

    return 0;
}
```

