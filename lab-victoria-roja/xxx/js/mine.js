function Mine (x,live){
  this.x = x
  this.y = 10
  this.vy = 10
  this.live = live
}

Mine.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "./images/mina.png";
    img.onload = function(){
        ctx.drawImage(img, that.x, that.y);
      }
}

Mine.prototype.attack = function () {
    this.y += this.vy
}