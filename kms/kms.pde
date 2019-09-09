
void setup() {
  size(400,535);
}

void draw() {
 background(36,32,56);
 noStroke();
 fill (230,137,53);
 ellipse(width/2, mouseY, 200, 200);
 
 //bjerg 1
 fill(47,110,107);
 rect(1,350,400,350);
 triangle(23, 350, 178, 193, 352, 350);
 
 //bjerg 2
 fill(69,152,122);
 tint(69, 152, 122);
 rect(1,365,400,365);
 triangle(122, 365, 250, 239, 386, 365);
 
 //bjerg 3
 fill(86,182,124,220);
 rect(1,390,400,390);
 triangle (73, 390, 175, 294, 279, 390);
 
 //bjerg 4
 fill(94,194,118,220);
 rect(1,410,400,410);
 triangle(188, 410, 266, 341, 342, 410);
 
 //bjerg 5
 fill(113,209,132,220);
 rect(1,430,400,430);
 
 
 //bjerg 6
 fill(127,226,149,220);
 rect(1,460,400,460);
 triangle(120, 460, 200, 377, 275, 460);
 
//bjerg 7
 fill(139,236,162,220);
 rect(1,490,400,490);
 triangle(201, 490, 226, 464, 253, 490);
}
