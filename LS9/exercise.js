foo();
function foo(){
	console.log('javasctipt');
}
//在其他语言中，未定义时输出会报错，而js中，对代码进行提升，
//输出javascript
//在编译器中看到的代码应该为
function foo(){
	console.log('javascript');
}
foo();
//当function前有运算符时认定为表达式，不进行提升

//全局作用域
var a = 1;//a在整个JS中可以访问或者修改
//局部作用域
function foo(){
    var str = 'asd';//这个变量只能在这个函数内才能使用
}
//块级作用域
{
    var name = 'lili';
    //块级作用域中的name变量，只能在这个花括号中访问到，出了花括号是访问不到的
    //JS中并没有块级作用域
}

	var a = "全局a";  
    var b = "全局b";  
    function foo1(){  
        var a = "局部a";  
        console.log(a);  
        function foo2(){  
            console.log(a);  
            console.log(b);  
            }  
        foo2();  
        }  
     foo1();  