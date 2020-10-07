function Aliens(x, y, r = 5) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xdir = 1
  this.toKill = false

  this.show = function() {
    ellipse(this.x, this.y, this.r*2)
  }
  
  this.move = function(){
    this.x += this.xdir
  }
  
  
  this.kill = function(){
    this.toKill = true
  }
  
  this.shiftDown= function(){
    this.xdir *= -1 ;
    this.y += this.r;
  }
  
}