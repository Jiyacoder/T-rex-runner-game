
var trex ,trex_running;
var ground,groundA;
function preload(){
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundA=loadAnimation("ground2.png");
}

function setup(){
  createCanvas(600,200)
 
  
  //create a trex sprite
  trex = createSprite(50,150,20,50);
  trex.addAnimation("trex_running", trex_running);
  trex.scale=0.5
  ground = createSprite(300,180,600,25);
  ground.addAnimation("ground2.png",groundA);
}

function draw(){
  background("white")
  drawSprites();
if(keyDown("space")){
  trex.velocityY=-12;

}
trex.velocityY=trex.velocityY+0.8;
trex.collide(ground);
}
