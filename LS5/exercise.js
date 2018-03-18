var a=1;
if(1==a){  //（a==2）反写可以避免少些一个等号时出错的情况
 console.log("输出");
}
输出结果  输出
console.log("1"+"2");//12
console.log(1+2);//3

var a=1;
console.log(a++);//1
console.log(++a);//3
console.log(a);//3
var b=1;
console.log(++b);//2
console.log(b++);//2
console.log(b);//3