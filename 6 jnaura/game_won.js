function Game_won() {
    background(0);
    
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    if (enemy.length > 0) {
        text("you win!", width/2, height/2);
    }

}