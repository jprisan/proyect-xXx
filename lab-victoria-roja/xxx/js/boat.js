function Player(player) {
    player = new Image();
    player.src = 'images/ship.png';
    player.posX = 30; // Default X position
    player.posY = (canvas.height / 2) - (player.height / 2); // Default Y position
    player.speed = 5;
 
    player.fire = function () {
        if (nextShootTime < currentTime || currentTime == 0) {
            shot = new Shot(this, player.posX + 45, player.posY + 23, 5);
            shot.add();
            currentTime += shotDelay;
            nextShootTime = currentTime + shotDelay;
        } else {
            currentTime = new Date().getTime();
        }
    }
    return player;
}
function Shot(shot, _x, _y, _speed) {
    shot = new Image();
    shot.src = 'images/shot.png'; //12x12
    shot.posX = _x;
    shot.posY = _y;
    shot.speed = _speed;
    shot.id = 0;
    shot.time = new Date().getTime();
    shot.add = function () {
        shots.push(shot);
    }
    shot.del = function (id) {
        arrayRemove(shots, id);
    }
    return shot;
}
function checkCollisions(shot) {
    if (shot.posX >= enemy.posX && shot.posX <= (enemy.posX + enemy.width)) {
        if (shot.posY >= enemy.posY && shot.posY <= (enemy.posY + enemy.height)) {
            (enemy.life > 1) ? enemy.life-- : enemy.backToLife();
            shot.del(parseInt(shot.id, 10));
            return false;
        }
    }
    return true;
}