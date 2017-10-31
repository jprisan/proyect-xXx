var Uboat = function (x,y,vx,vy) {
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
    img.src = "./images/player.svg.png";
    img.onload = function(){
        ctx.drawImage(img, that.x, that.y);
      }
}

Uboat.prototype.moveRigth = function(e) {
    
}

Uboat.prototype.moveLeft = function(e) {
    
}

Uboat.prototype.moveUp = function(e) {
    
}

Uboat.prototype.moveDown = function(e) {
    
}