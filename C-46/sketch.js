var bg;
var player, playerImg;
var gun1, gun1Img;
var gun2, gun2Img;

function preload(){
  bg = loadImage("Edited Images/bg1.png");

  playerImg = loadAnimation("Edited Images/player1.png", "Edited Images/player2.png", "Edited Images/player3.png", 
  "Edited Images/player4.png");

  gun1Img = loadImage("Edited Images/gun1.png");

  gun2Img = loadImage("Edited Images/gun2.png");

}

function setup(){
  createCanvas(1500, 800);

  bg1 = createSprite(850, 400, 1000, 1000);
  bg1.addImage(bg);
  bg1.scale = 1;

  player = createSprite(800, 250, 20, 20);
  player.addAnimation("running", playerImg);

 // gun1 = createSprite()

}

function draw(){
  background("white");

  if(keyDown(UP_ARROW)){
    player.y = player.y-10;
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }

  drawSprites();
}


  
  
