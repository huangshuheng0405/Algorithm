# pb_ds

## `__gnu_pbds::priority_queue`

```c++
#include <ext/pb_ds/priority_queue.hpp>
using namespace __gnu_pbds;
__gnu_pbds::priority_queue<T, Compare, Tag, Allocator>
```

#### 模板形参







pb_ds 库全称 Policy-Based Data Structures。

pb_ds 库封装了很多数据结构，比如哈希（Hash）表，平衡二叉树，字典树（Trie 树），堆（优先队列）等。

## `__gnu_pbds::tree`

```cpp
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>

using namespace __gnu_cxx;
using namespace __gnu_pbds;

typedef tree<int, null_type, std::less<int>, rb_tree_tag, tree_order_statistics_node_update> Tree;
```

#### 模板形参

- `Key`: 储存的元素类型，如果想要存储多个相同的 `Key` 元素，则需要使用类似于 `std::pair` 和 `struct` 的方法，并配合使用 `lower_bound` 和 `upper_bound` 成员函数进行查找
- `Mapped`: 映射规则（Mapped-Policy）类型，如果要指示关联容器是 **集合**，类似于存储元素在 `std::set` 中，此处填入 `null_type`，低版本 `g++` 此处为 `null_mapped_type`；如果要指示关联容器是 **带值的集合**，类似于存储元素在 `std::map` 中，此处填入类似于 `std::map<Key, Value>` 的 `Value` 类型
- `Cmp_Fn`: 关键字比较函子，例如 `std::less<Key>`
- `Tag`: 选择使用何种底层数据结构类型，默认是`rb_tree_tag`.`__gnu_pbds`提供三种不同的平衡树，分别是：
  - `rb_tree_tag`：红黑树，一般使用这个，后两者的性能一般不如红黑树
  - `splay_tree_tag`：splay 树
  - `ov_tree_tag`：有序向量树，只是一个由 `vector` 实现的有序结构，类似于排序的 `vector` 来实现平衡树，性能取决于数据想不想卡你
- `Node_Update`：用于更新节点的策略，默认使用 `null_node_update`，若要使用 `order_of_key` 和 `find_by_order` 方法，需要使用 `tree_order_statistics_node_update`
- `Allocator`：空间分配器类型

#### 构造方式

```cpp
__gnu_pbds::tree<std::pair<int, int>, __gnu_pbds::null_type,
                 std::less<std::pair<int, int>>, __gnu_pbds::rb_tree_tag,
                 __gnu_pbds::tree_order_statistics_node_update> trr;
```

#### 成员函数

- `insert(x)`：向树中插入一个元素 `x`，返回 `std::pair<point_iterator, bool>`，其中第一个元素代表插入位置的迭代器，第二个元素代表是否插入成功。
- `erase(x)`：从树中删除一个元素/迭代器 `x`。如果 `x` 是迭代器，则返回指向 `x` 下一个的迭代器（如果 `x` 是 `end()` 则返回 `end()`）；如果 `x` 是 `Key`，则返回是否删除成功（如果不存在则删除失败）。
- `order_of_key(x)`：返回严格小于 `x` 的元素个数（以 `Cmp_Fn` 作为比较逻辑），即从`0`开始的排名。若没有`x`这个数，则返回最后一个数的排名

- `find_by_order(x)`：返回 `Cmp_Fn` 比较的排名所对应元素的迭代器。（此处的`x`不一定需要存在在平衡树中，求解平衡树中严格比`x`小的元素个数，如果求排名需要`+1`）
- `lower_bound(x)`：返回第一个不小于 `x` 的元素所对应的迭代器（以 `Cmp_Fn` 作为比较逻辑）。
- `upper_bound(x)`：返回第一个严格大于 `x` 的元素所对应的迭代器（以 `Cmp_Fn` 作为比较逻辑）。
- `join(x)`：将 `x` 树并入当前树，`x` 树被清空（必须确保两树的 **比较函数** 和 **元素类型** 相同）。
- `split(x,b)`：以 `Cmp_Fn` 比较，小于等于 `x` 的属于当前树，其余的属于 `b` 树。
- `empty()`：返回是否为空。
- `size()`：返回大小。

#### 示例

```cpp
// Common Header Simple over C++11
#include <iostream>
using namespace std;
using ll = long long;
using ull = unsigned long long;
using ld = long double;
using pii = pair<int, int>;
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
__gnu_pbds::tree<pair<int, int>, __gnu_pbds::null_type, less<pair<int, int>>,
                 __gnu_pbds::rb_tree_tag,
                 __gnu_pbds::tree_order_statistics_node_update>
    trr;

int main() {
  int cnt = 0;
  trr.insert(make_pair(1, cnt++));
  trr.insert(make_pair(5, cnt++));
  trr.insert(make_pair(4, cnt++));
  trr.insert(make_pair(3, cnt++));
  trr.insert(make_pair(2, cnt++));
  // 树上元素 {(1,0), (2,4), (3,3), (4,2), (5,1)}

  auto it = trr.lower_bound(make_pair(2, 0));
  trr.erase(it);
  // 树上元素 {(1,0), (3,3), (4,2), (5,1)}

  // 输出排名 0 1 2 3 中的排名 1 的元素的 first
  auto it2 = trr.find_by_order(1);
  cout << (*it2).first << endl;  // 输出：3

  // 输出其排名
  int pos = trr.order_of_key(*it2);
  cout << pos << endl;  // 输出：1

  // 按照 it2 分裂 trr
  decltype(trr) newtr;
  trr.split(*it2, newtr);
  for (auto i = newtr.begin(); i != newtr.end(); ++i) {
    cout << (*i).first << ' ';  // 输出：4 5
  }
  cout << endl;

  // 将 newtr 树并入 trr 树，newtr 树被清空。
  trr.join(newtr);
  for (auto i = trr.begin(); i != trr.end(); ++i) {
    cout << (*i).first << ' ';  // 输出：1 3 4 5
  }
  cout << endl;
  cout << newtr.size() << endl;  // 输出：0

  return 0;
}
```

