//var mine = new Mine(100, 30)
var player = new Uboat(300, 300, 15, 15)
var ship = new Boat(0)
var enemy = new Enemy()
var torpedo = new GunEnemy()
var minesArray = [];
var enemyArray = [];

window.onload = function () {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.heigth = 600;
    player.draw();
    ship.draw();
    
    torpedo.draw()



    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       // enemy.updateDraw();
       // enemy.move();
        if(minesArray.length == 0){
            minesCreator();
        }
        if(enemyArray.length == 0){
            enemyCreator();
        }
        ship.mov(canvas);
        torpedo.move();
        //ship.x += ship.vx
        player.collisionDown();
        ship.updateDraw();
        player.updateDraw()
        torpedo.updateDraw();
        mineUpdate()
        enemyUpdate()
        
    }

    setInterval(update, 1000 / 60)
    var width = $("#canvas").width;
    var height = $("#canvas").height;
}
document.addEventListener('keydown', (event) => {

    var keyName = event.keyCode;
    switch (keyName) {
        case 65:
            if (player.x > 10) {player.moveLeft();}
            break;

        case 83:
            if (player.y){player.moveDown();}
            break;

        case 68:
            if (player.x < canvas.width - 105) {player.moveRigth();}
            break;

        case 87:
            if (player.y > 195) {player.moveUp();}
            break;
        case 80:
            break;
    }
});

function minesCreator() {
    var prob = Math.random() * (100 - 0);
    if(prob > 99){
        minesArray.push(new Mine(ship.x))
        minesArray[0].draw();
    }
}

function mineUpdate(){
    if(minesArray.length >= 1){
        for(i=0; i<minesArray.length; i++){
            minesArray[i].updateDraw();
            minesArray[i].collisionDetection();
            minesArray[i].attack();
            if(minesArray[i].live == false){
                minesArray.splice(i,1);
            }
        }
    }
}
function enemyCreator() {
    var prob = Math.random() * (100 - 0);
    if(prob > 99){
        enemyArray.push(new Enemy)
        enemyArray[0].draw();
    }
}

function enemyUpdate(){
    if(enemyArray.length >= 1){
        for(i=0; i<enemyArray.length; i++){
            enemyArray[i].updateDraw();
            enemyArray[i].move();
            enemyArray[i].collisionDetection();
            if(enemyArray[i].live == false){
                enemyArray.splice(i,1);
            }
        }
    }
}
