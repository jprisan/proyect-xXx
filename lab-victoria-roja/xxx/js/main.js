var board = new GameMap();
var mine = new NewMine();
//var boat = new NewBoat();
//var uboat = new NewUboat();

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    mine = function () {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 25, 400, 50, 50);
        }.bind(this)
        img.src = "../images/mina.png";
    };
    
};