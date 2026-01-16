# 裴蠩定理

```c++
#include<iostream>
using namespace std;
int ans,n,a;
int gcd(int x,int y){
    return y==0?x:gcd(y,x%y);
}
int main(){
    cin>>n;
    for(int i=1;i<=n;i++){
        cin>>a;
        ans=gcd(ans,abs(a));
    }
    cout<<ans;
    return 0;
}

```
