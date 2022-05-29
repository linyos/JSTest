function setup(){
    createCanvas(700 , 400);
    background(102);
}


function draw(){
    stroke (255);
    if (mouseIsPressed==true)
    {
        line (mouseX , mouseY , pmouseX , pmouseY);
    }
}