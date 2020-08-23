const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var thickness,wall;
var bullet,speed,weight;
var deformation ;


function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  wall=createSprite(1200,200,thickness,height/2)

wall.shapeColor=(80,80,80);
}



function draw() {
  background("black"); 
  if (wall.x-bullet.x<wall.width/2+bullet.width/2) {
    car.velocityx=0;
  }
  
    deformation=0.5*bulletweight*bulletspeed*bulletspeed/(thicknessofwall*thicknessofwall*thicknessofwall)
    if (deformation<10) {
      bullet.shapeColor=(green)
    }
    if (deformation>100 && deformation < 180) {
      bullet.shapeColor=(red)
    }
   
 
   }
  drawSprites();