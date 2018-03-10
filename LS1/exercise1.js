console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof "abc")//String
var b=[1,"a","f",5];
console.log(b instanceof Array);//true
(function(){
	var A_a=new Object();
	A_a.name='cici';
	var A_b=function(){
		name="x";
	}
	A_b=A_a;
	console.log(A_a,A_b);
}//{name: "cici"} {name: "cici"}
(function(){
	var B_a=new Object;
	B_a.x=13;
	var B_b=B_a;
	console.log(B_a==B_b);//true
	console.log(B_a===B_b);//true
})
(function(){
	var B_a=new Object;
	B_a.x=13;
	var B_b=new Object(12);
	console.log(B_a==B_b);//false
	console.log(B_a===B_b);//false
})