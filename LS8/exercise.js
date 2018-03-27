var foo ={
	name:"lili",
	age:"3"
};
console.log(foo instanceof Function);//false
console.log(foo instanceof Object);//true

console.log(JSON instanceof Function);//false  内置非函数对象Math

var foo = function (x,y){
	console.log(x>y?x:y);
}
foo(3,6);//6
console.log(foo.length);//2  此处的length表示函数的形参个数

function Aclass()   
{   
this.Property = 1;   
this.Method = function()   
{   
    console.log(1);   
}   
}   
var obj = new Aclass();   
obj.Property = 2;   
obj.Method = function()   
{   
    console.log(2);   //2
}   
 console.log(obj.Property);   
obj.Method(); //2

var obj = new Object();   
obj.prototype.Property = 1; 
obj.prototype.Method = function()   
{   
    alert(1);   
}   //报错，实例中不能使用prototype

var count = function(a1){
    this.add = function (a2){
        return a1  + a2;
    };
    return add;
};
console.log(count(3)(4));//7

var count = function(a1){
    this.add = function (a2){
        return a1 + a2;
    };
    return add;
};
console.log(count("Java")("Script"));
//JavaScript