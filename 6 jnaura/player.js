//player kan bevæge sig
function movement() {
    player.setSpeed(0, 0);

    if (keyIsDown(68)) {
        player.setSpeed(2, 0)
    }
    else if (keyIsDown(65)) {
        player.setSpeed(2, 180)
    }
    else if (keyIsDown(83)) {
        player.setSpeed(2, 90)
    }
    else if (keyIsDown(87)) {
        player.setSpeed(2, 270)
    }
}

function movement_hitbox() {
    player_hitbox.setSpeed(0, 0);

    if (keyIsDown(68)) {
        player_hitbox.setSpeed(2, 0)
    }
    else if (keyIsDown(65)) {
        player_hitbox.setSpeed(2, 180)
    }
    else if (keyIsDown(83)) {
        player_hitbox.setSpeed(2, 90)
    }
    else if (keyIsDown(87)) {
        player_hitbox.setSpeed(2, 270)
    }
}
//player kan angribe
function player_atack() {
    if (keyIsDown(32)) {
        drawSprite(player_hitbox);
        if (player_hitbox.overlap(enemy, getEnemy)) {
            enemy_current_health += -2;
        }
    }
}

//ramme for skærmen
function limits() {
    console.log('x=' + player.position.x)
    if (player.position.x > width - 20) {
        player.position.x = width - 20;
    }
    else if (player.position.y > height - 20) {
        player.position.y = height - 20
    }
    else if (player.position.y < 20) {
        player.position.y = 0 + 20
    }
    else if (player.position.x < 20) {
        player.position.x = 0 + 20
    }
}

function limits_player_hitbox() {
    console.log('x=' + player_hitbox.position.x)
    if (player_hitbox.position.x > width - 20) {
        player_hitbox.position.x = width - 20;
    }
    else if (player_hitbox.position.y > height - 20) {
        player_hitbox.position.y = height - 20
    }
    else if (player_hitbox.position.y < 20) {
        player_hitbox.position.y = 0 + 20
    }
    else if (player_hitbox.position.x < 20) {
        player_hitbox.position.x = 0 + 20
    }
}

//health systemet
function getEnemy(player, enemy) {
    //enemy.remove();
    if (current_health >= 0) {
        current_health += -1;
    } if (current_health <= 0) {
        score * 0;
    }
    /*if (enemy_current_health <= 0) {
        enemy.remove();
    }*/

}