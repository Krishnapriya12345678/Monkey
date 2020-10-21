
var score=0
var monkey , monkeyAnimi
var banana ,bananaImage, 
stone,stoneImage
var score
var ground
function preload(){
  
  
  monkeyAnimi =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage=loadImage("obstacle.png")
 
}



function setup() {
createCanvas(600,600)  

monkey=createSprite(200,350,10,10)
monkey.addAnimation("monkey",monkeyAnimi)
monkey.scale=0.2

 ground = createSprite(400,400,900,10);
 ground.velocityX=-4
ground.x=ground.width/2

}


function draw() {
background("lightgreen")
drawSprites();
if(ground.x<450){
  ground.x=400
}


  
if(frameCount%80==0) {
  banana=createSprite(Math.round(random(600,400)),Math.round(random(88,200)))
  banana.addImage("yellow",bananaImage)
  banana.scale=0.2
  banana.velocityX=-3
  banana.lifetime=300
}

if(frameCount%300==0){
  stone=createSprite(Math.round(random(100,400)),380)
  stone.addImage("stone",stoneImage)
  stone.scale=0.1
  stone.velocityX=-3
}

monkey.collide(ground)

text("Survival time  "+score,300,88)
textSize(20)
  
  
score=Math.ceil(frameCount/frameRate())
  
 if(keyDown("space")&&monkey.y>200) {
   monkey.velocityY=-12
 }
  
  
  monkey.velocityY=monkey.velocityY+0.8
  
      


  
  
  
  
  
}