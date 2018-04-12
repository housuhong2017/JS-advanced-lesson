function f1(x){
	return function(y){
		x*=y
		return x;
	}
}
var z=f1(3);
console.log(z(2));
//6  
console.log(z(3));
//18 因为x在第一次调用时没有被释放掉，因此第二次调用时x的值为6
var z=f1(3);
console.log(z(2));
//6  前方定义的被释放，重新定义，输出6
var z2=f1(3)
console.log(z2(3));
//9 重新定义一个对象形成包裹体，重新调用函数


var temp=2;
function f1(x){
	var temp=12;
	return function(y){
		console.log(x+y+temp);
		//找对应的词法作用域，而不访问全局作用于，temp=2被屏蔽
	}
}
var foo =f1(3);
foo(2);//17

function f1(x){
	var m=1;
	return {
		a:function(){
			return ++m;
		},
		b:function(){
			return m=2;return m;
		}
	}
}
var c=f1(),d=f1();
console.log(c.a());
//2
console.log(c.b());
//2
console.log(d.a());
//2
console.log(d.b());
//2
//作用域共享


