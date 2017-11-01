function Gun(x, y, damage) {
    this.x = x
    this.y = y
    this.vx = 3
    this.live = true
    this.damage = 1
}

Gun.prototype.move = function () {
    this.x += this.vx
}
Gun.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./images/torpedoamigo.png";
    img.onload = function () {
        ctx.drawImage(img, that.x, that.y);
    }
}


Gun.prototype.fire = function (){
    
}

function fire() {
    x = player.drow(this.x) + 20;
    y = player.drow(this.y) - 10;
    disparo.drow();
    disparo.move();

  
}