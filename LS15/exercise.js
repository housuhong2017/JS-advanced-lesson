//字面量直接生成
var obj1={x:5
};
//Object工厂方法
var obj2=Object.create(obj1);
obj2.y=2;
console.log(obj1,obj2);
//{x: 5} {y: 2}
//构造函数实例化对象
var Person=function(name){
	this.name=name;
}
var p1=new Person('abc');
var p2=new Person('def');//实例化出两个对象
console.log(p1.name,p2.name);//abc def

function Person(name,age){
    this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
    console.log(this.name,this.age);
}
var p=new Person('mike',23);
p.sayHi();
//mike 23

var div=document.createElement('div');
//undefined
div;
//<div>​</div>​
div.__proto__;