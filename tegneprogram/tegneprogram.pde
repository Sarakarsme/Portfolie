int r, g, b;
float size;

void setup() {
  frameRate(120);
  size(600, 500);
  background (255,255,255);

  //start farve for stregen
  r = 70;
  g = 70;
  b = 70;
  
  size = 20;
}

//funktion for alle mine farver
boolean mouseInCircle(int circle_x, int circle_y, int radius) {
  return sqrt(pow(mouseX-circle_x, 2) + pow(mouseY-circle_y, 2)) <= radius;
}

void mouseClicked() {
  //rød
  if (mouseInCircle(25, 80, 20)) {
    r = 255;
    g = 0;
    b = 0;
    //orange
  } else if (mouseInCircle(25, 130, 20)) {
    r = 255;
    g = 128;
    b = 0;
    //gul
  } else if (mouseInCircle(25, 180, 20)) {
    r = 255;
    g = 255;
    b = 0;
    //grøn
  } else if (mouseInCircle(25, 230, 20)) {
    r = 0;
    g = 255;
    b = 0;
    //blå
  } else if (mouseInCircle(25, 280, 20)) {
    r = 0;
    g = 0;
    b = 255;
    //lilla
  } else if (mouseInCircle(25, 330, 20)) {
    r = 255;
    g = 0;
    b = 255;
    //sort
  }else if (mouseInCircle(80, 25, 20)) {
    r = 0;
    g = 0;
    b = 0;
    //hvid
  }else if (mouseInCircle(160, 25, 20)) {
    r = 255;
    g = 255;
    b = 255;
  }
}

void draw() {
  //outline hvor farverne er i
  stroke(0);
  fill (255,255,255);
  strokeWeight(1);
  rect (0,50,50,500);
  rect (0,50,600,0);
  
  //røde farve
  fill(255,0,0);
  ellipse (25,80,40,40);
  
  //orange farve
  fill(255,128,0);
  ellipse (25,130,40,40);
  
  //gule farve
  fill(255,255,0);
  ellipse (25,180,40,40);
  
  //grønne farve
  fill (0,255,0);
  ellipse (25,230,40,40);
  
  //blå farve
  fill(0,0,255);
  ellipse (25,280,40,40);
  
  //lilla farve
  fill(255,0,255);
  ellipse (25,330,40,40);
  
  //sorte farve
  fill(0);
  ellipse(80,25,40,40);
  
  //hvide farve/hviskelæder
  noFill();
  ellipse(160,25,40,40);

//blyanten
  if (mousePressed){
    stroke(r, g, b);
    line(pmouseX, pmouseY, mouseX, mouseY);
    strokeWeight(size);
  }
  

  //tastertur funktionerne
if (keyPressed) {
    if (key == 'c') {
      //tryk på c for at genstarte tegningen
      background(255,255,255);
    } else if (key == '-') {
      //l gøre blyanten mindre
      size-- ;
    } else if (key == '+') {
      //m gøre blyanten større
      size++ ;
    }
}

}
