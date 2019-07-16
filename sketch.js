function setup() {
  createCanvas(600, 600);
}
let posX = Math.floor(Math.random() * 570);
let posY = Math.floor(Math.random() * 570);
let speedX = 1;
let speedY = 1;
function draw() {
  background(213, 182, 222);
  circle(posX, posY, 60);
  noStroke();
  posX += speedX;
  posY += speedY;
  if (posX > 570) {
    speedX *= -1;
  } else if (posX < 30) {
    speedX *= -1;
  } else if(posY > 570){
    speedY *= -1;
  } else if (posY < 30){
      speedY *= -1;
  }
}

function mouseClicked(){
    if (dist(posX, posY, mouseX, mouseY) <= 30){
        fill(random(0, 255), random(0, 255), random(0, 255))
    }
}
