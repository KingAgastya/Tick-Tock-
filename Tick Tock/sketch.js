var hr, min, sec;
var hourHand, minHand, secHand; 

function setup() {
  createCanvas(400,400); 
  angleMode(DEGREES)
}

function draw() {
  background(255, 255, 255);

  translate(200, 200)
  rotate(-90)

  hr = hour();
  min = minute();
  sec = second();

  
  hourHand = map(hr % 12, 0, 12, 0, 360)
  minHand = map(min, 0, 60, 0, 360)
  secHand = map(sec, 0, 60, 0, 360);


  push();
  rotate(secHand);
  strokeWeight(7)
  stroke("yellow")
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(minHand)
  stroke("cyan")
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hourHand)
  strokeWeight(7)
  stroke("lime")
  line(0, 0, 50, 0)
  pop();

  stroke("red");
  strokeWeight(10)
  noFill();
  stroke("yellow");
  arc(0, 0, 300, 300, 0, secHand)
  stroke("cyan");
  arc(0, 0, 280, 280, 0, minHand)
  stroke("lime");
  arc(0, 0, 260, 260, 0, hourHand)
  drawSprites();
}
