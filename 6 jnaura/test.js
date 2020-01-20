/*var coins;
var player;
var score = 0;

function setup() {
    createCanvas(400, 400);
    coins = new Group();
    for (var i = 0; i < 10; i++) {
        var c = createSprite(
            random(100, width - 100),
            random(100, height - 100),
            10, 10)
        c.shapeColor = color(255, 255, 0);

        var k = createSprite(
            random(100, width - 100),
            random(100, height - 100),
            10, 10)
        k.shapeColor = color(255, 255, 255);
        
        coins.add(k);
    }
    player = createSprite(50, 50, 40, 40);
    player.shapeColor = color(255);
}

function draw() {
    background(50);
    player.velocity.x =
        (mouseX - player.position.x) * 0.1;
    player.velocity.y =
        (mouseY - player.position.y) * 0.1;
    player.overlap(coins, getCoin);
    drawSprites();
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    if (coins.length > 0) {
        text(score, width / 2, height / 2);
    }
    else {
        text("you win!", width / 2, height / 2);
    }
}

function getCoin(player, coin) {
    coin.remove();
    score += 1;
}*/