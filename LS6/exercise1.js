//&&两侧都为真是结果为真，||两侧都为假时结果为假
console.log(true&&false);//false
console.log(true&&true);//true
console.log(23&&true);//true
console.log(true&&23);//23

//短路原则可用来代替if...else语句
var a="3";
if(a>=1)
{
	console.log("hello");
}
else{
	console.log("nothing");
}

var a="3";
console.log(a>=1&&"hello"||"nothing");

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,0,0))//10 将0判定为布尔型false
var sum = function(a,b,c){
    if(b!=false){b = b||4;}
    if(c!=false){c = c||5;}
    return a+b+c;
};
console.log(sum(1,0,0))//1 规范了代码，防止将数值0判定为布尔型