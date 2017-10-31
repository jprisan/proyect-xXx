var Uboat = function (x, y, vx, vy) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy

};

Uboat.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./images/player.png";
    img.onload = function () {
        ctx.drawImage(img, that.x, that.y);
    }
}

Uboat.prototype.moveRigth = function () {
    this.x -= this.vx 
}

Uboat.prototype.moveLeft = function () {
    this.x += this.vx 
}

Uboat.prototype.moveUp = function () {
    this.y -= this.vy 
}

Uboat.prototype.moveDown = function () {
    this.y += this.vy 
}

Uboat.prototype.collisionDown = function () {
    var collision = canvas.height - 50;
    if (this.y > collision) {
        this.y = collision;
        //  var collisionla
    }
}
// Uboat.prototype.collisionLeft = function (){
//     var ballRadius = 10;
// var that = this
//     ctx.arc(that.x, that.y, ballRadius, 0, Math.PI*2);
//     if(that.y + dy > canvas.height || y + dy < 0) {
//         dy = -dy;
//     }
//     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
//         dy = -dy;
//     }
// }

