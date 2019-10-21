float x = 100;
float y = 100;
float rainbow = random();

void setup(){
  size(640,360);
}

void draw(){
  background(51);
  star(100,100);
  star(200,300);
  star(5,2);
  star(200,300);
  star(5,2);
}

void star(float x,float y){
  fill(rainbow);
  stroke(255);
  strokeWeight(2);
  
  beginShape();
  vertex(x,       y-50);
  vertex(x+14,    y-20);
  vertex(x+47,    y-15);
  vertex(x+23,    y+7);
  vertex(x+29,    y+40);
  vertex(x,       y+25);
  vertex(x-29,    y+40);
  vertex(x-23,    y+7);
  vertex(x-47,    y-15);
  vertex(x-14,    y-20);
  endShape(CLOSE);
}
