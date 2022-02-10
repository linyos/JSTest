// function displayDate(){
//     x = document.getElementById("demo");
//     x.inner


// }



function myFun(){
    var x = document.getElementById("demotxt").value;
    if(x=="" || isNaN(x))
    {
        alert("No Number");
    }
}



function fun1(){
    // var carname = "Volvo";
    // document.getElementById("p1").innerHTML= carname;
    var i ;
    var cars = new Array();
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";    

    for (i = 0 ; i <cars.length ; i ++) {
        document.write(cars[i] + "<br>")
    }
}

