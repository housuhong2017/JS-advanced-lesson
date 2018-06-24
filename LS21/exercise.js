try{
    var a=new Array(-5);
}
catch(e){
	console.log(e);}
finally{
    console.log("finally");
}
// RangeError: Invalid array length
//    at eval (eval at <anonymous> (:1:9), <anonymous>:2:11)
//    at <anonymous>:1:9
// finally

try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex);
}
//inner oops

// finally
// outer oops