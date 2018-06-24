var a=1;
function f1(){
    var b=2;
    function f2(){
        console.log(a,b);
    }
    f2();
}
f1();
// 1 2

var a=10,b='hi';
function thisTest(){
    this.a=20;
    delete this.b;
    this.c='新添加的全局变量';
}
thisTest();
console.log(a,c);


//20 "新添加的全局变量"

function Person(age){
    this.age=age;
    console.log('xxx');
}
Person();
// xxx

var Person=function(name,age){
    this.name=name;
    this.age=age;
    this.showMe=function(){
        console.log(this.name,this.age);
    }
}
var p1=new Person('Mike',23);
var p2=new Person("Lucy",22);
p1.showMe();
p2.showMe();
//Mike 23
//Lucy 22

objA={name:'AA',x:1};
objB={name:'BB',x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
objA.fun.call(objB);
// AA 1
// BB 5

var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        function moveToX(x){
            this.x=x;
        };
        function moveToY(y){
            this.y=y;
        };
        moveToX(x);
        moveToY(y);
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
//{x: 0, y: 0, moveTo: ƒ}
// 2 2