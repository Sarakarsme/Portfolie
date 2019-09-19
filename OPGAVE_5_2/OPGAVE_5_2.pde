void setup () {
  size(640,360);
}

void draw() {
  background (0);
  if (mouseX>100){
    fill(255,0,0);
    rect(300,100,50,50);
} else if (mouseX>200){
  fill (0,255,0);
  rect (300,300,50,50);
}

  stroke(255);
  line(100,0,100,height);
  
  line(200,0,200,height);
}
