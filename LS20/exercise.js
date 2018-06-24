var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
var regExp = /\d+/g;
console.log(s1.match(regExp));

var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
function d(x){
	var regExp = /\d+/g;
	console.log(x.match(regExp));
}
d(s1);
//["254", "289", "675"]

var s2 = "get-element-by-id";
var name = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}
name(s2);
//"getElementById"

var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则"; 
 function adr(str){
    var regExp=[a-zA-z]+www[^\s]*;
	console.log(str.match(regExp));}
adr(s3);

var reg=/\d/gi;//匹配数字
reg.test("23asdf");
//true