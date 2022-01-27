
const fontSize =32;
const txt = 'Hello Word';
const graylevel  =220;

function setup() {
  // put setup code here
  createCanvas(txt.length * fontSize/2 , fontSize);
  background(graylevel);
  textSize(fontSize);
}

function draw() {
    text(txt , 0 ,fontSize);
  // put drawing code here
}