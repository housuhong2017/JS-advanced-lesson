var arr2 =new Array(5);
console.log(arr2);
//五个空元素
var arr2 =new Array('5');
console.log(arr2);
//一个元素  5

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//ƒ (){
//		arr22[i] = i;
//	}
arr22//点击document后输出
//(6) [empty × 5, 5]
//典型的异步执行
var arr1=[2,5,8];
arr1.forEach(function(a){
    console.log(a,this);
});
console.log(arr1);
//3 2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//3 5 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//3 8 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// (3) [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a){
    console.log(a,this);
},arr2);
console.log(arr1);
// 2 (3) [1, 6, 7]0: 11: 62: 7length: 3__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
//5 (3) [1, 6, 7]
//8 (3) [1, 6, 7]
// (3) [2, 5, 8]

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
   arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);
//(3) [2, 6, 8]

var arr1=[2,5,8];
//var arr2=[1,6,7];
arr1.forEach(function(a){
    console.log(a);
return a%2===0;
});
console.log(arr1);
//2
//5
// 8
//(3) [2, 5, 8]