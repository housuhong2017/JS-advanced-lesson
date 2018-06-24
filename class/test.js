
//var div1=document.getElementById("div1");
//window.onload=function(){
    //console.log('window.oncload');
    //var div1=document.getElementById("div1");
    //div1.onclick=function(){
    //console.log("div1 onclick")
    //}

//};
//div1.ondrag=function(){
   // console.log("dov1 ondrag")
//}
/*div.onclick=function(e){
    var div1=document.getElementById("div1");
}
function div2click(e){
    console.log(e.target)
}*/
/*window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    function clickHandker(e){
        console.log(e.target);
    }
    div1.addEventListener("click",clickHandker);
    div1.removeEventListener("click",clickHandker)
    /*div1.onclick=clickHandker;
    dov1.onclick=function (){
        console.log("xx");
    }
    div2.onclick=clickHandker;
    div2.onclick=null;
}
*/
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
