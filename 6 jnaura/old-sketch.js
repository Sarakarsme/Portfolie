/*var enemy;
var player;
var score = 0;
oijhuihouiboibouib

function setup() {

  //canvas settings
  createCanvas(800, 800);
  canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";

  //enemy

  enemy = createSprite(
    random(height), height / 2, 80, 80);
  enemy.shapeColor = color(255, 255, 255);

  //andet forsøg på at få enemy til at følge efter player
  enemy.rotateToDirection = true;
  enemy.maxSpeed = 200;
  enemy.friction = 0.99;

  //player 
  player = createSprite(
    width / 2, height / 3, 40, 40);
  player.shapeColor = color(255, 0, 0);
}

function draw() {
  background(50);

  //andet forsøg på at få enemy til at følge efter player (kig i setup)
  enemy.attractionPoint(100, player.position.x, player.position.y);

  //første forsøg på at få enemy til at følge efter player
  //enemy.velocity.x = (player.position.x - enemy.position.x) * 0.2;
  //enemy.velocity.y = (player.position.y - enemy.position.y) * 0.2;

  //overlap mellem to objekter
  if (enemy.overlap(player)) {
    background(random());
  }
  else {
    background(50);
  }
  enemy.collide(player);

  //vigtig!!! tegner selve figurne 
  drawSprites();
}

//player bevægelse
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    player.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    player.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    player.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    player.setSpeed(0, 0);
  }
  return false;
}*/