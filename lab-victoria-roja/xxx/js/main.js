//Cuandxo se carge la pantalla genero nuevos objetos, despues llamo a sus funciones
// de dibujado. Si quiero crear 100 enemigos solo tendre que llamar a la función 100 veces
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var mine = new Mine(100, 30)
var player = new Uboat(300,300,1,1)

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function ( /* function */ callback, /* DOMElement */ element) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

window.onload = function() {
    mine.draw();
    player.draw();
    
    
    
    function update (){
        console.log("ENTRO EN UPDATE")
        
        console.log(mine.vy)
        mine.y += mine.vy
        mine.draw();
        player.draw()
        mine.collisionDetection();
        ctx.clearRect(0,0, canvas.width, canvas.height);
       
    }   
    
    setInterval(update, 30)


    uboat.moveRigth();
    uboat.moveLeft();
    uboat.moveUp();
    uboat.moveDown();
   
}















// var gravity =  0.05
// var canvas = document.getElementById('canvas')
// var ctx = canvas.getContext('2d');
// var ball = {
//   x: 200,
//   y: 30,
//   vx: 0,
//   vy: 2,
//   userPull: 0, // LA FUERZA (ACELERACIÓN) DE CONTRAPARTIDA POR EL USUARIO
//   radius: 22,
//   color: "white",
//   draw: function() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };

// function update() {
//   hitBottom(); // LO PRIMERO DE TODO COMPROBAR SI LA PELOTA SE HA CHOCADO
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   ball.vy = ball.vy + (gravity - ball.userPull); // MODIFICA EL EFECTO GRAVEDAD EN FUNCIÓN
//   ball.y += ball.vy;                             // DEL EVENTO DE PULSACIÓN DE TECLA
//   console.log(ball.vy, ball.y)
//   ball.x += ball.vx
//   ball.draw()
// }

// function hitBottom () {
//   var rockbottom = canvas.height - ball.radius; //LIMITE DE CHOQUE DE LA BOLA
//     if (ball.y > rockbottom) {
//       ball.y = rockbottom; // DESTROZO EL VALOR DE Y
//       clearInterval(intervalId); // IMPIDO LA ACTUALIZACIÓN DE JUEGO
//       //alert("Looooser!!!"); // MENSAJE MOTIVADOR
//     }
//   }

// var intervalId = setInterval(update, 20);

// document.onkeydown = function(e) {
//   if(e.keyCode == 32){
//     ball.userPull = 0.3;
//   }           
// }

// document.onkeyup = function(e) {
//   if (e.keyCode == 32) {
//     ball.userPull = 0;
//   }
// }; 