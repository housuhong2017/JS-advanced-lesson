//ES5
var min=function(a,b){
	return a<b?a:b;
}
min(3,8)
//ES6
var min=(a,b)=>a<b?a:b;
min(3,8);
//3
var arr=[1,4,5,2,7,8].sort((a,b)=> {
    if(a-b<0){
        return 1
        
    }
    else
        return -1
});
arr;
//[8, 7, 5, 4, 2, 1]
var add=function(a,b=7,c=5){
    return a+b+c;
}
console.log(add(4));
//16
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
[...arr1, ...arr2, ...arr3];
//["a", "b", "c", "d", "e"]