function Game_over() {
    background(0);
    
    drawSprite(retry_button);
    //current_health = max_health;
    //enemy_current_health = enemy_max_health;

    fill(255);
    noStroke();
    textSize(45);
    textAlign(CENTER, CENTER);
    text('retry', width/2, height/2);
}