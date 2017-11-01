function Boat(x, damage) {
    this.x = 0
    this.y = 160
    this.vx = 0.8
    this.direction = "rigth"
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
    if (this.direction === "rigth") {
        this.x += this.vx
    } else if (this.direction === "left") {
        this.x -= this.vx
    }
}
Boat.prototype.changeMov = function () {
    if (this.x < canvas.width - 90) {
        this.direction === "rigth"
    } else if (this.x === 0) {
        this.direction === "letf"
    }
}
// Boat.prototype.changeMovLeft = function (){
//     if ( this.x < canvas.width - 90){
//         this.direction === "rigth"
//     } else{
//         this.direction === "letf"
//     }
// }
// Boat.prototype.changeMov = function () {
//     var change = canvas.width - 90;
//     if (this.x < canvas.width - 105) {
//         this.x += this.vy
//     } else if (this.x > change) {
//         this.x -= this.vy
//     }
// }