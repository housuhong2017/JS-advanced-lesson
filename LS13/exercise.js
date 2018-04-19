var obj1={
	name:"apple",
	color:"red",
	l:function(){
		console.log(this.name+'的颜色是'+this.color);
}
};
obj1.l();

// apple的颜色是red

var o={
    _x:1.0,
	get x(){
		return this._x;
	}
};
console.log(o.x);
o.x=2;
console.log(o.x);
//1
//1

var obj = {  
	name:'tom'  
}; 
Object.defineProperty(obj,'name',{  
	writable:false 
}); 
obj.name = 'jery';
console.log(obj.name);
//输出tom，因为已经设置了writable为false  
Object.defineProperty(obj,'age',{  
	configurable:false,  
	writable:true, 
	value:22
}); 
console.log(obj.age);
//输出22，因为设置了value为22
obj.age = 25;
console.log(obj.age);
//输出25，设置了writable为true
delete obj.age;
console.log(obj.age);
//输出25，设置了configurable为false，此属性删除不了

var f1={
	_name:'Tom',
	_sex:'男',
	_age:21,
	set age(val){
		if(val>18){
			console.log(this._name+'已成年');
		}
		else
			console.log(this._name+'未成年');
	},
	get age(){
		return this._age;
	}
};
f1.age=14;