function Mine(x, damage) {
    this.x = x
    this.y = 190
    this.vy = 2
    this.live = true
    this.damage = 5
}

Mine.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./images/mine.png";
    img.onload = function () {
        ctx.drawImage(img, that.x, that.y);
    }
}

Mine.prototype.attack = function () {
    this.y += this.vy
}

Mine.prototype.collisionDetection = function () {
    var collision = canvas.height - 20;
    if (this.y > collision) {
        this.y = collision;
        this.live = false
    }
}