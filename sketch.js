var aliens = []
var ship
var bullet = []
var score = 0
var gameEnd = false


function setup() {
  createCanvas(400, 400);
  ship = new Ship()
  waveGenerator(5)
}



function draw() {
  background(0);

  // for formation of bullets
  for (let j = 0; j < bullet.length; j++) {
    bullet[j].show()
    bullet[j].move()

    // for killing of aliens and removing hit bullets 
    for (let i = 0; i < aliens.length; i++) {
      if (bullet[j].hits(aliens[i])) {
        aliens[i].kill()
        bullet[j].remove()
      }
    }
  }


  // for showing aliens

  let edge = false
  for (let i = aliens.length - 1; i >= 0; i--) {
    aliens[i].show()
    if (gameEnd == false) {
      aliens[i].move()
    }
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true
    }
    if (aliens[i].y > 340) {
      gameEnd = true;
      endGame(score);
    }


    if (aliens[i].toKill == true) {
      aliens.splice(i, 1)
      score += 1
    }
  }

  for (let i = aliens.length - 1; i >= 0; i--) {
    if (edge == true && gameEnd == false) {
      aliens[i].shiftDown()
    }
  }

  // ship navigation
  ship.show()
  if (keyIsDown(RIGHT_ARROW)) {
    ship.move(4)
  }
  if (keyIsDown(LEFT_ARROW)) {
    ship.move(-4)
  }

  for (let j = bullet.length - 1; j >= 0; j--) {
    if (bullet[j].toDelete == true) {
      bullet.splice(j, 1)
    }
  }


  /// score counter
  scoreup(score, 255, 40, 390)
}


/// other function which help.


function keyPressed() {
  if (keyCode == UP_ARROW && gameEnd == false) {
    bullet.push(new Bullet(ship.x, 360, 6))
  }
}


function waveGenerator(waves) {
  for (let i = 0; i < waves; i++) {
    setTimeout(function() {
      enemyGenerator()
    }, 15000 * i);
  }
}


function enemyGenerator() {
  for (let i = 0; i < 7; i++) {
    aliens.push(new Aliens(50 * i + 20, 30, 17))
    aliens.push(new Aliens(50 * i + 35, -10, 17))
    aliens.push(new Aliens(50 * i + 20, -50, 17))
    aliens.push(new Aliens(50 * i + 35, -90, 17))
  }
}

function scoreup(score, col, x, y) {
  fill(col)
  textSize(20)
  textAlign(CENTER, CENTER)
  text('score: ' + score, x, y)
}

function endGame(score) {
  rectMode(CENTER)
  fill(255)
  rect(200, 200, 500, 500)
  textSize(40)
  textAlign(CENTER, CENTER)
  fill(0)
  text('Game Over', 200, 200)
  text('score: ' + score, 200, 250)
  textSize(20)
  text('(refresh to play again)', 200, 300)
}