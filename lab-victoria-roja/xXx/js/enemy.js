function Enemy (x,y, damage){
    this.x = canvas.height + 300
    this.y = 300
    this.vy = 1
    this.live = true
    this.damage = 3
}


Enemy.prototype.move = function () {
    this.x -= this.vy
}
Enemy.prototype.draw = function () {
var that = this
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "./images/enemyuboat.png";
img.onload = function () {
    ctx.drawImage(img, that.x, that.y);
}
}