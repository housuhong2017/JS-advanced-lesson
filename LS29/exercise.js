var reg=/^hello/gi;
var reg1=/\bhello/gi;

"hello world".replace(reg,"*");
//"* world"
console.log(isFinite(25));
console.log(isFinite('25'));
console.log(Number.isFinite(25));
console.log(Number.isFinite('25'));//推荐使用Number型
//true
//true
//true
//false

var name='Jack';
var person={
    name,
    showinfo(){
        console.log(this.name);
    }
}
person.showinfo();
//Jack

var obj = {a:1,b:2};
var obj2=Object.create(obj);
obj2.c=3;
obj2.d=4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
//1 2 3 4
Object.keys(obj2);
(2) ["c", "d"]//只能获取到自身的两个属性