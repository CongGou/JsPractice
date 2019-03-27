### break\continue返回

```javascript
for(let i=0;i<9;i++){
    if(i===5){
        continue;//跳出当前循环，后面还没执行的循环代码不执行，进入3的循环
    }
    console.log()
}
for(let i=0;i<9;i++){
    if(i===5){
        break;//跳出循环，后面还没执行的循环代码不执行，同时for结束
    }
    console.log()
}
//给for起名字，不是变量名。如下
aaa：for(){
   
    }
}
//用while来写for
var i=0;
while(i<9){
    i++;
}
```

