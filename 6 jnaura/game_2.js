var player;
var enemy;
var score = 0;
var max_health = 1000;
var current_health = max_health + score;

var enemy_score = 0;
var enemy_max_health = 500;
var enemy_current_health = enemy_max_health + enemy_score;

function Game() {
    background(game_background);
    //healthbar
    noStroke();

    fill(0, 255, 0);
    if (current_health <= 750) {
        fill(255, 255, 0);
    } if (current_health <= 500) {
        fill(255, 128, 0);
    } if (current_health <= 250) {
        fill(255, 0, 0);
    }
    rect(100, 100, current_health, 30);
    if (current_health <= 0) {
        current_health = 0;
    }

    /*fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    if (enemy.length > 0) {
        text(enemy_current_health, 100, 100);
    }*/

    //display
    drawSprites(enemy);
    drawSprite(player);
    //drawSprite(back_to_menu);

    //funktioner for player
    movement();
    movement_hitbox();
    limits();
    limits_player_hitbox();
    player_atack();

    //funktioner for enemy
    enemyEkstra();
    enemyAttract();
}