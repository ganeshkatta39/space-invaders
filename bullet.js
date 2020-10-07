function Bullet(x, y, r = 10) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.toDelete = false;

  this.show = function() {
    ellipse(this.x, this.y, this.r*2)
  }
  
  this.move = function(){
    this.y = this.y - 4
  }
  
  this.hits = function(flower){
    var dis = dist(this.x,this.y,flower.x,flower.y)
    return(dis<flower.r+this.r)
  }
  
  this.remove= function(){
    this.toDelete = true
  }
}