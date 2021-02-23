var hr, min, sec;
var hourHand, minHand, secHand; 

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES)
  translate(400,200)
}

function draw() {
  background(255,255,255);
  hr = hour();
  min = minute();
  sec = second();

  push();
  rotate(secHand);
  strokeWeight(5)
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(minHand)
  strokeWeight(8)
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(hourHand)
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();

  stroke(255, 20, 150);
  strokeWeight(5)
  noFill();
  stroke("yellow");
  arc(0, 0, 300, 300, 0, hourHand)
  stroke("cyan");
  arc(0, 0, 270, 270, 0, minHand)
  stroke("lime");
  arc(0, 0, 250, 250, 0, secHand)
  drawSprites();
}