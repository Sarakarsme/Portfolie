int y = 1;
int spacing = 15;

void setup(){
size (220,220);
}

void draw (){
  background(255,255,255);
  
  stroke (255);
  
  y = 0;
  while (y < height) {
    ellipse(110, 110, y, y);
    stroke (0);
    y = y + spacing ;
    fill (0,0,0,30);
  }

}
