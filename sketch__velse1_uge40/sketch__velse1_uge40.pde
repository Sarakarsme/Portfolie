int x = 1;
int y = 1;
int spacing = 15;

void setup(){
size (400,300);
}

void draw (){
  background(255,255,255);
  
  stroke (255);
  
  y = 0;
  while (y < height) {
   line (0,y,width,y);
   stroke (0);
   y = y + spacing ;
  }

}
