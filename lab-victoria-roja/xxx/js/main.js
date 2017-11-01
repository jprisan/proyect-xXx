var mine = new Mine(100, 30)
var player = new Uboat(300, 300, 15, 15)
var ship = new Boat()
var enemy = new Enemy()

window.onload = function () {
    ctx = document.getElementById("canvas").getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    mine.draw();
    player.draw();
    ship.draw();
    enemy.draw();



    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ship.mov();
        ship.changeMov();
        enemy.move();
        //ship.x += ship.vx
        mine.y += mine.vy
        player.collisionDown();
        mine.collisionDetection();
        ship.draw();
        mine.draw();
        player.draw()
        enemy.draw();




        //console.log(mine.live)





    }

    setInterval(update, 1000/60)
    var width = $("#canvas").width;
    var height = $("#canvas").height;
}
document.addEventListener('keydown', (event) => {

    var keyName = event.keyCode;
    switch (keyName) {
        case 65:
            if (player.x > 10) {
                player.moveLeft();
            }
            break;

        case 83:
            console.log(player.y)
            if (player.y)
                player.moveDown();
            break;

        case 68:
            if (player.x < canvas.width - 105) {
                player.moveRigth();
            }
            break;

        case 87:
            if (player.y > 195) {
                player.moveUp();
            }
            break;
    }
});

function minesCreator() {
    new Mine(150, 30);
}