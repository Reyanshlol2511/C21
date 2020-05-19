var bullet, wall, speed, thickness, weight, damage, denominator;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = rgb(80,80,80)
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  if(bullet.collide(wall)) {
    bullet.velocityX = 0;
    denominator = thickness*thickness*thickness;
    damage = 0.5*weight*speed*speed/denominator;
    console.log(damage)
    if(damage<=10) {
      wall.shapeColor = "red";
    }
    if(damage>=10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}