function Enemy(enemy, _x, _y) {
    enemy = new Image();
    enemy.src = 'images/enemy.png'; //128x128
    enemy.posX = canvas.width - enemy.width;
    enemy.posY = canvas.height / 2 - enemy.width / 2;
    enemy.life = 5; //5 hits
    enemy.backToLife = function () {
        this.life = 5;
        this.posY = Math.floor(Math.random() * (canvas.height - this.height));
        this.posX = Math.floor(Math.random() * (canvas.width - this.width - player.width))
                    + player.width;
    }
    return enemy;
}