function Ship() {
  this.x = width/2
  
  this.show = function(){
    rectMode(CENTER)
    rect(this.x, 360, 20, 20 )
  }
  
  this.move = function(dir){
    this.x += dir
    if (this.x<=10){
      this.x = 10
    }
    if (this.x >= width-10){
      this.x = width-10
    }
    
  }
}