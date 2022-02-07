    var  c = document.getElementById("myCanvas");
    var ctx =c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineJoin="square";
    ctx.moveTo(20,20);
    ctx.lineTo(100,50);
    ctx.lineTo(20,100);
    ctx.stroke();
