function Enemy(x, y, damage) {
    this.x = 1100
    this.y = this.randomY()
    this.vy = 1
    this.live = true
    this.damage = 3
    this.img = new Image();
}


Enemy.prototype.move = function () {
    this.x -= this.vy
}
Enemy.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/enemyuboat.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}

Enemy.prototype.updateDraw = function (){
    ctx.drawImage(this.img, this.x, this.y);
}

Enemy.prototype.randomY = function () {
    return Math.random() * ((800 - 240) + 200)
}
Enemy.prototype.collisionDetection = function () {
    
    if (this.x < canvas.heigth) {
        this.x = -20;
        this.live = false
    }
}