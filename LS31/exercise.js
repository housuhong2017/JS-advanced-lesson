var s1 = Symbol();
var s2 = Symbol();
s1 === s2
//false
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
a[mySymbol]
a['mySymbol']
//"Hello!"
let a = Symbol('lili');
console.log(a);
// Symbol(lili)

var a = new Set();
[1,3,4,3,2,2,8,6].map(x => a.add(x));
for (let i of a) {
  console.log(i);
}
// 1
// 3
//4
// 2
// 8
// 6
class MyClass {
  constructor() {
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: ' + value);
  }
}
let inst = new MyClass();
inst.prop = 123;

inst.prop

//setter: 123
//"getter"