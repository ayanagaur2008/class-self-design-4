var playerImg, asteroidImg, backImg, comp, lazer,  aiLaser; 
var player, back, asteroidsGroup, compPlay, playerLife, distance;


function preload(){
  playerImg = loadImage("player.png");
  asteroidImg = loadImage("asteroid.png");
  backImg = loadImage("background.jpg");
  laser = loadImage("lazer.png");
  comp = loadImage("ai play.png");
  aiLaser = loadImage("ai lazer.png");
}
function setup() {
  createCanvas(500,500);

  player = createSprite(250,250, 40,40);
  player.addImage(playerImg); 

  compPlay = createSprite(230, 350, 40,40);
  compPlay.addImage(comp);

  //asteroid = createSprite(500,250,20,20);
  //asteroid.addImage(asteroidImg);

  
}

function draw() {
  
  background(backImg);

  

  distance = Math.round(getFrameRate()/80);
  textSize(20);
  stroke(22,100,7);
  text("Distance: "+ distance, 200,400);
  
  playerLife = 3;

  //if(asteroidsGroup.collide(player))
 //{
  //playerLife =  0.6;
 //}

  text("Lives:"+ playerLife, 200,200);

  

 if (keyDown(UP_ARROW))
 {
   player.velocityX = 0;
   player.velocityY = -2;
 }
 
  if (keyDown(DOWN_ARROW)) {
    player.velocityY = 2;
    player.velocityX = 0;
  }
 
 if (keyDown(LEFT_ARROW))
 {
  player.velocityX = -2;
  player.velocityY = 0;
 }
 
 if (keyDown(RIGHT_ARROW))
 { 
  player.velocityX = 2;
  player.velocityY = 0;
 }
  
 if(player.x > 500){
   player.x = 5;
 }

 if(compPlay.x > 500){
  compPlay.x = 10;
} 

 if(player.y> 500){
   player.y = 5;
 }

if(compPlay.y> 500){
  compPlay.y = 5;
}

 if( player.velocityX > 0){
   spawnAsteroids();
 }

 if( player.velocityY > 0){
  spawnAsteroids();
}

 

 if(player.velocityX > 0){
   compPlay.velocityX = 2.1;
 }


  if(keyDown("space")){
    createLazer();
    lazer.lifetime =50;
  }
  //write ai for compPlay (switch case)
  if(compPlay.velocityX > 0){

  }
  else{
    compPlay.velocityY = 2;
  }
  

  if(compPlay.isTouching(lazer)){
   compPlay.x = 230;
  }

 if( playerLife = 0){
   text("Game Over", 250,250);
   player.velocityX = 0;
   player.velocityY = 0;
   compPlay.velocityX = 0;
   compPlay.velocityY = 0;
 }

 
 

  drawSprites();
}

function createLazer(){
  lazer = createSprite(player.x, player.y,10,10);
  lazer.addImage(laser);
  lazer.x = mouseX;
  lazer.y = mouseY;
  
}
function spawnAsteroids(){
  if(frameCount % 80 === 0){
    var y;
    y = random(2, 498);
    asteroid = createSprite(450,y,20,20);
  asteroid.addImage(asteroidImg);
  asteroid.velocityX = -4;
    
    
    
    asteroid.scale = 1.3;
    asteroid.lifetime = 300;
  
   
  }
}