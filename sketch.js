var runner,runner1,edges;
var path,path1;
function preload(){
  //pre-load images
  runner1=loadAnimation("Runner-1.png","Runner-2.png");
  path1=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //creating the path
  path=createSprite(200,200);
  path.addImage("moving",path1);
  path.scale=1.3;
  path.velocityY=4;

  //creating the runner boy
  runner=createSprite(200,200,10,10);
  runner.addAnimation("moving",runner1);
  //edges=createSprite();

  //giving scale and positions to runner
  runner.scale=0.08;
  runner.x=200;
  runner.y=260;
}

function draw() {
  background("black");
  //code to create infinite scrolling path
  if(path.y > 400){
    path.y=height/2;
  }
  //moving runnner by keys
  if(keyDown("right")){
    runner.velocityX=5;
  }

  if(keyDown("left")){
    runner.velocityX=-5;
  }

  if(keyDown("space")){
    runner.velocityX=0;
  }

  drawSprites();
}
