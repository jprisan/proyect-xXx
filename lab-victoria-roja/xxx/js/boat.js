function Boat(x, damage) {
    this.x = 0
    this.y = 160
    this.vx = 1
    }

Boat.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./images/ship.png";
    img.onload = function () {
        ctx.drawImage(img, that.x, that.y);
    }
}

Boat.prototype.mov = function () {
    this.x += this.xy
}