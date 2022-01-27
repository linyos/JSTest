function myFun(){
    x= document.getElementById('demo');
    x.innerHTML= "Hello";

}



function myFun2(){
    var x1 =document.getElementById('demo1').value;
    // 不是數字
    if(x1==='' ||isNaN(x1) || x1.replace(/(^\s*)|(\s*$)/g,"")===""){
        alert("錯誤");
    }



var person;
var  car = "Vo";
document.write(person + "<br>");
document.write(car + "<br>");
var car=null
document.write(car + "<br>");
}