//overlap og colide
function enemyEkstra() {
    player.overlap(enemy, getEnemy);
    enemy.collide(enemy);
    //player_hitbox.displace(enemy);
    //enemy.collide(player_hitbox);
}

function enemySide(){
    if (player.position.x < enemy.position.x) {
        enemy.mirrorX (1);
    } 
    else if (player.position.x > enemy.position.x){
        enemy.mirrorX (-1);
    }
}

//enemy følger efter player
function enemyAttract() {
    for (var i = 0; i < enemy.length; i++) {
        enemy[i].attractionPoint(100, player.position.x, player.position.y);
    }
}