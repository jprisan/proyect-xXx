var mine = new Mine(100, 30)
var player = new Uboat(300, 300, 15, 15)
var ship = new Boat()

window.onload = function () {
    ctx = document.getElementById("canvas").getContext("2d");
    canvas.width = 800; 
    canvas.height = 600;
    mine.draw();
    player.draw();
    ship.draw();

   
    function update() {
        ship.draw();
        ship.x += ship.vx
        mine.y += mine.vy
        mine.draw();
        //console.log(mine.live)
        player.draw()
        player.collisionDown();
        mine.collisionDetection();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

    setInterval(update, 25)
    var width = $("#canvas").width;
    var height = $("#canvas").height;
}
document.addEventListener('keydown', (event) => {

    var keyName = event.keyCode;
    switch (keyName) {
        case 65:
        if(player.x > 10){
            player.moveLeft();
        }
        break;

        case 83:
        console.log(player.y)
        if(player.y)
            player.moveDown();
            break;

        case 68:
        if(player.x < canvas.width - 105){
            player.moveRigth();
        }
        break;

        case 87:
        if(player.y > 195){
            player.moveUp();
        }
        break;
    }
});

 function minesCreator() {
   new Mine(150, 30);
}