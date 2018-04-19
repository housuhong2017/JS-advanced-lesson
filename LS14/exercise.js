//三种定义对象的方式
var obj1={
	x:1
};

var obj2=Object.create(obj1);
obj2.y=2;

var Obj3=function(){
	this.z=3;
}
obj3=new Obj3();
console.log(obj1,obj2,obj3);

var obj={
    x:1,
    y:2
};
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
var obj ={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,//将可写特性改成true，以下更改便可行
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike
person.name='Lucy';
console.log(person.name);//Lucy

var obj1={
	_name:'Lucy',
	get:function (){
        return this._name;
    }
}

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

