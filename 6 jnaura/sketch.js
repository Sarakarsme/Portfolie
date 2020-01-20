var enemy;
var player;
var score = 0;
var max_score = 100;

var gameStarted = false;
var goToMap = false;
var backToMenu = false;
var retry = false;
var game_won = false;

let hoe;
function preload() {
    hoe = loadImage('enemy/hoe_aseprite5.png');
    start_menu_background = loadImage('background/club.jpg');
    game_background = loadImage('background/dash.gif');
    map_background = loadImage('background/map.gif');
    player_image = loadImage('player/pimp.png');
    
    ild_billede = loadImage('player/6.png');


    
}

//////////////////////
///// S E T U P///////
//////////////////////
function setup() {
    createCanvas(windowWidth,windowHeight);

    //main menu
    button_start_game = createSprite(width / 2, height / 2, 400, 90);
    button_start_game.shapeColor = color(0);
    button_start_game.onMousePressed = function () {
        this.shapeColor = color(128);
    }
    button_start_game.onMouseReleased = function () {
        goToMap = true;
    }

    button_level_1 = createSprite(350, 60, 100, 100);
    button_level_1.shapeColor = color(255);
    button_level_1.onMousePressed = function () {
        this.shapeColor = color(128);
    }
    button_level_1.onMouseReleased = function () {
        gameStarted = true;
    }

    retry_button = createSprite(width / 2, height / 2, 200, 50);
    retry_button.shapeColor = color(255);
    retry_button.onMousePressed = function () {
        this.shapeColor = color(128);
    }
    retry_button.onMouseReleased = function () {
        Game();
        current_health = max_health;
        enemy_current_health = enemy_max_health;
    }

    back_to_menu = createSprite(1200, 700, 200, 50);
    back_to_menu.shapeColor = color(255);
    back_to_menu.onMousePressed = function () {
        this.shapeColor = color(128);
    }
    back_to_menu.onMouseReleased = function () {
        Menu();
    }
    

    enemy = new Group();
    for (var i = 0; i < 1; i++) {
        var c = createSprite(1200,600);
        c.addImage(hoe, random(100, width - 100), 700);
        c.rotateToDirection = false;
        c.friction = random(0.97, 0.99);
        c.maxSpeed = random(0.9, 1, 5);

        var k = createSprite(1100,600);
        k.addImage(hoe, random(100, width - 100), 700);
        k.rotateToDirection = false;
        k.friction = random(0.97, 0.99);
        k.maxSpeed = random(0.9, 1, 5);

        enemy.add(c);
        enemy.add(k);
    }

    player = createSprite(100,600, 90, 200);
    player.addImage(player_image,90, 200);
    player.shapeColor = color(255, 0, 0);

    player_hitbox = createSprite(player.position.x, player.position.y, 170, 200);
    //player_hitbox.shapeColor = color(0);
    player_hitbox.addImage(ild_billede,170, 200);
    //100, 100, 100);
}

////////////////////////////////
////////////D R A W////////////
////////////////////////////////

function draw() {
    background(start_menu_background);

    drawSprite(button_start_game);

    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    text("start game", width / 2, height / 2);

    if (goToMap) {
        Map_();
    }

    if (backToMenu) {
        Menu();
    }

    if (gameStarted) {
        Game();
    }

    if (current_health < 0) {
        Game_over();
    }

    if(enemy_current_health < 0){
        Game_won();
    }
}