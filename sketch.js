var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png")
 powerImg = loadImage("power.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


//generate random numbers
var rand =  Math.round(random(1,100))
console.log(rand)



//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
   
//code to reset the background
if(path.y > 400){
  path.y = height/2;
}



/*if(path.y > 400 ){
  path.y = height/2;}*/

  /*if(path.y > 400){path.y = height/2;}*/

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = true;
}

function draw() { 
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  var number = Math.round(random(1,6))
  console.log(number)

 spawnCoin();
 
  drawSprites();
}
function spawnCoin(){

}

var coin = createSprite(20,20,20,20)
coin.addImage(coinImage)
coin.scaale=0.6
coin.y=Math.round(random(10,100))
coin.velocityX=-4
