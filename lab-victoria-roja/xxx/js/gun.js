function GunEnemy(x, y, damage) {
    this.x = canvas.height + 300
    this.y = 300
    this.vy = 2
    this.live = true
    this.damage = 1
    this.img = new Image();
}


GunEnemy.prototype.move = function () {
    this.x -= this.vy
}
GunEnemy.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/torpedo.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}
GunEnemy.prototype.updateDraw = function (){
    ctx.drawImage(this.img, this.x, this.y);
}