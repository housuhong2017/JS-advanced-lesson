var str1=new String("Hello"),
str2=new String("Hello");//包装类型对象
console.log(str1==str2);//false
var str1="Hello",str2="Hello";
console.log(str1==str2);//true
//类型转换
console.log(Boolean(String));//true
console.log(Boolean(NaN));//false
console.log(Number("3.dge88"));//NaN
console.log(Number(NaN));// NaN
console.log(Object("sda"));//String {"sda"}
console.log(parseFloat("3.415926x"));//3.415926
console.log(parseInt("3.1415926x"));//3
console.log(String(NaN));//NaN
console.log(String({name:"ci", age:15}));//[object Object]