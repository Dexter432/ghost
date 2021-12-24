var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300);
  ghost.addImage("ghost" ,ghostImg);
  ghost.scale=0.30;
  
}

function draw() {
  background(200);
  if(gameState==="play"){
  if(tower.y > 400){
      tower.y = 300
    }
   if(keyDown("space")){
     ghost.velocityY=-10
    
   }
   ghost.velocityY=ghost.velocityY+0.8
   if(keyDown("left")){
     ghost.x=ghost.x-3
     
   }
   if(keyDown("right")){
    ghost.x=ghost.x+3
    
  }
   gerarportas()
   if(ghost.isTouching(invisibleBlockGroup)||ghost.y>600){
    gameState="game over" 
   ghost.destroy()
 
    }
    if(ghost.isTouching(climbersGroup)){
    ghost.velocityY=0  
    }
   drawSprites()
   }
   if(gameState==="game over"){
   textAlign(CENTER,CENTER)  
   Fill("red")
   text("game over",300,300)  
   }
}
function gerarportas(){
  if(frameCount%240 === 0){
  
 door=createSprite(200,-20)
 door.velocityY=20 
 door.addImage("door",doorImg);
door.x=Math.round(random(120,400))
climber=createSprite(200,20)
climber.addImage("climber",climberImg);
climber.velocityY=20
climber.x=door.x
climber.lifetime=700
door.lifetime=700
invisibleBlock=createSprite(200,25)
invisibleBlock.height=2
invisibleBlock.widht=climber.widht
invisibleBlock.debug=true
invisibleBlock.velocityY=20
invisibleBlock.x=door.x
invisibleBlock.lifetime=700
invisibleBlockGroup.add(invisibleBlock)
doorsGroup.add(door)
climbersGroup.add(climber)
}

}