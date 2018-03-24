//函数定义三种方式
function sum(a,b){
	return a+b;
}

var sum = function (a,b){
	return a+b;
}

var sum = new Function("a","b","return a+b")
sum(2,3);//5

//间接调用call  apply
var obj1={
	name:"apple",
	color:"red"
};
var obj2={
	name:"banana",
	color:"red"
};
obj1.foo=function(){
	console.log(this.name,"的颜色是",this.color);

};
obj1.foo();//apple 的颜色是 red
obj1.foo.apply(obj2); // banana 的颜色是 red
