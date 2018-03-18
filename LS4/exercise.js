//关键字不能作为变量名 default、delete、do、else、enum等，
//其中有三个标识符不是保留字，但当做保留字对待infinity、NaN、undefined
//严格模式
'use strict'
function isStrictMode(){
	return this===undefined?true:false;
}
console.log(isStrictMode());

//输出true

//严格模式下，函数参数不能重名
'use strict'
function f(a,a,b){
	return a+b;

}
console.log(f(2,3,4))
//报错

'use strict'
function f(a,b){
	return a+b;
}
console.log(f(2,3))
//输出5

//严格模式下禁止删除不可改变的属性，和未定义的变量
'use strict'
delete star;//报错

delete star//输出结果 true

//switch语句穿透性
var month=3;
switch(month){
	case 1:console.log("31天")
	case 2:console.log("28天")
	case 3:console.log("31天")
	case 4:console.log("30天")
	case 5:console.log("31天")
	case 6:console.log("30天")
	case 7:console.log("31天")
	case 8:console.log("31天")
	case 9:console.log("30天")
	case 10:console.log("31天")
	case 11:console.log("30天")
	case 12:console.log("31天")
	default:
		console.log("输入不合法")
}
//输出结果31天
//VM32:6 30天
//VM32:7 31天
//VM32:8 30天
//VM32:9 31天
//VM32:10 31天
//VM32:11 30天
//VM32:12 31天
//VM32:13 30天
//VM32:14 31天
//VM32:16 输入不合法
var month=3;
switch(month){
	case 1:console.log("31天");break;
	case 2:console.log("28天");break;
	case 3:console.log("31天");break;
	case 4:console.log("30天");break;
	case 5:console.log("31天");break;
	case 6:console.log("30天");break;
	case 7:console.log("31天");break;
	case 8:console.log("31天");break;
	case 9:console.log("30天");break;
	case 10:console.log("31天");break;
	case 11:console.log("30天");break;
	case 12:console.log("31天");break;
	default:
		console.log("输入不合法")
}
//输出结果 31天