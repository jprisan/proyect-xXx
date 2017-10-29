function mine(width, height, x, y, life, value, damage) {
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
     this.update = function(){
       ctx = boardArea.context;
//        ctx.fillStyle = color;
//        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 }

 Mine.prototype.newPos = function(){
   this.x += this.speedX;
   this.y += this.speedY;
 }
Mine.prototype.left = function(){ return this.x }

Mine.prototype.right = function(){  return this.x + this.width  }

Mine.prototype.top = function(){  return this.y }

Mine.prototype.bottom = function(){ return this.y + this.height }

Mine.prototype.explode = function(/*obstaculo*/){// Function for explode Mine
  return !((this.bottom() < obstacle.top())    ||
           (this.top()    > obstacle.bottom()) ||
           (this.right()  < obstacle.left())   ||
           (this.left()   > obstacle.right()))
}