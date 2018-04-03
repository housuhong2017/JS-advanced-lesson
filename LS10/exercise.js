console.log("在宿舍");
console.log("起床准备去上课");
function goToCanteen()
{
	var yy=["食堂阿姨","食物"]
	console.log("吃早餐");
	console.log("吃完饭去学院")
	goToCollege();
	console.log("吃午饭")
}
function goToCollege(){
	var zz=["老师"];
	console.log("上第1-5节课");
}
goToCanteen();
console.log("回宿舍休息");

var a = "全局a";  
    var b = "全局b";  
    function foo1(){  
        var a = "局部a";  
        console.log(a);//局部
        function foo2(){  
            console.log(a);//局部
            console.log(b); //全局
            }  
        foo2();  
        }  
     foo1();  

     