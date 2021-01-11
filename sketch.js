
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  monkey = createSprite(50,260,20,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  
  
}
function draw() {
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12; 
    }
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  trex.collide(ground);
  
}

function Food(){
  if (frameCount % 80 === 0){
   var food = createSprite(120, 200,10,10);
    var rand = Math.round(random);
   
  }
}





