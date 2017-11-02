
var player = new Uboat(300, 300, 15, 15)
var ship = new Boat(0)
//var enemy = new Enemy()
//var torpedo = new GunEnemy()
var minesArray = [];
var enemyArray = [];
var torpedoArray =[]; 

window.onload = function () {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.heigth = 600;
    player.draw();
    ship.draw();
    
    //torpedo.draw()



    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if(minesArray.length == 0){
            minesCreator();
        }
        if(enemyArray.length < 3){
            enemyCreator();
        }
        ship.mov(canvas);
        //torpedo.move();
        //ship.x += ship.vx
        player.collisionDown();
        ship.updateDraw();
        player.updateDraw()
        //torpedo.updateDraw();
        mineUpdate();
        enemyUpdate();
        torpedoUpdate();
        
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
// Creador de Minas
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

//Creador de Enemigos
function enemyCreator() {
    var prob = Math.random() * (100 - 0);
    if(prob > 98){
        enemyArray.push(new Enemy())
        for(i=0; i<enemyArray.length; i++){
            enemyArray[i].draw()
        }
    }
}

function enemyUpdate(){
    if(enemyArray.length >= 1){
        for(i=0; i<enemyArray.length; i++){
            if(torpedoArray.length < 5){
                torpedoCreator(enemyArray[i].x, (enemyArray[i].y)+30);
            }
            enemyArray[i].updateDraw();
            enemyArray[i].move();
            enemyArray[i].collisionDetection();
             if(enemyArray[i].live == false){
                enemyArray.splice(i,1);
             }
        }
    }
}

// Creador de Torpedos Enemigos
function torpedoCreator(x, y) {
    var prob = Math.random() * (100 - 0);
    if(prob > 99){
        torpedoArray.push(new GunEnemy(x, y))
        for(i=0; i<torpedoArray.length; i++){
            torpedoArray[i].draw()
        }
    }
}

function torpedoUpdate(){
    if(torpedoArray.length >= 1){
        for(i=0; i<torpedoArray.length; i++){
            torpedoArray[i].updateDraw();
            torpedoArray[i].collisionDetection();
            torpedoArray[i].move();
            if(torpedoArray[i].live == false){
                torpedoArray.splice(i,1);
            }
        }
    }
}