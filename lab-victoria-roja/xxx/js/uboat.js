var Uboat = function (x, y, vx, vy) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.friction = 0.98
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
    this.x += this.vx
}

Uboat.prototype.moveLeft = function () {
    this.x -= this.vx
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
    }
}
