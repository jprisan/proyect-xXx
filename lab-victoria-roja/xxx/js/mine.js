function NewMine(width, height, x, y, life, value, damage) {
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.speedX = 0;
    this.speedY = 1;
    this.shot = 1;
    // this.life = 2;
    this.value = 5;
    this.damage = 2;
    this.update = function () {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 25, 400, 50, 50);
        }.bind(this)
        img.src = "../images/mina.png";
    }
}

NewMine.prototype.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
}
NewMine.prototype.left = function () {
    return this.x
}

NewMine.prototype.right = function () {
    return this.x + this.width
}

NewMine.prototype.top = function () {
    return this.y
}

NewMine.prototype.bottom = function () {
    return this.y + this.height
}

NewMine.prototype.explode = function ( /*obstaculo*/ ) { // Function for explode Mine
    return !((this.bottom() < obstacle.top()) ||
        (this.top() > obstacle.bottom()) ||
        (this.right() < obstacle.left()) ||
        (this.left() > obstacle.right()))
}
// var mine = new NewMine() {
//     var canvas - mine = document.getElementById('mine');
//     var ctx = canvas - mine.getContext('2d');

//     // ¿VELOCIDAD? V = ΔE/ΔT = (x1 - x0)/(t1 - t0) 

//     var ball = { //CREAMOS UN OBJETO 
//         x: 0, //POSICIÓN INICIAL DE LA PELOTA EJE X
//         y: 0, //POSICIÓN INICIAL DE LA PELOTA EJE Y
//         vx: 3, //DESDE AQUÍ PUEDO DECIR QUE VELOCIDAD RELATIVA APLICO EN CADA EJE
//         vy: 3, //SI LAS CIFRAS COINCIDEN TRABAJARÉ CON ANGULOS DE 45º
//         //A MAYOR VX MAYOR ANGULO RESPECTO EJE X.
//         radius: 22,
//         color: 'white',
//         draw: function () { //FUNCIÓN PINTAR OBJETO
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//             ctx.closePath();
//             ctx.fillStyle = this.color;
//             ctx.fill();
//         }
//     };

//     /// PRIMER PUNTO - VELOCIDAD \\\
//     function update() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ball.draw();
//         ball.x += ball.vx; //MODIFICA LA POSICIÓN DEL OBJETO
//         ball.y += ball.vy; //EN AMBOS EJER A RAZÓN DE LA VELOCIDAD
//     }

//     setInterval(update, 30) // CON EL USO DE SETINTERVAL MANEJAMOS EL REFRESCO
//     // DE LA ETIQUETA CANVAS.

//     /// ADIOS PELOTITA  ¿SOLUCIÓN? HAGAMOSLA REBOTAR!!!\\\
// }