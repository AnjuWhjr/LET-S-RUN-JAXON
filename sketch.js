
function preload(){
  //pre-load images
  trackImage = loadImage('path.png')
  boyAnimation = loadAnimation('Runner-1.png','Runner-2.png')
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  track = createSprite(200,200,400,400);
  track.addImage(trackImage);
  track.velocityY = -4;
  track.y = track.height/2;


  boy = createSprite(200,300,10,10);
  boy.addAnimation("boy", boyAnimation);
  boy.scale=0.1;

  leftBoundary = createSprite(60,200,20,400);
  leftBoundary.visible=false;

  rightBoundary = createSprite(340,200,20,400);
  rightBoundary.visible=false;

  edges= createEdgeSprites();
}

function draw() {
  background(0);

  boy.x = mouseX;

  if(track.y<0){
    track.y = track.height/2;
  }

  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  boy.collide(edges[3]);

  drawSprites();
}
