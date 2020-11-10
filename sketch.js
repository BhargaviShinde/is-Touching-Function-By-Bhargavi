var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,500,50,60);
  go1.shapeColor = "green";

  go2 = createSprite(200,500,50,60);
  go2.shapeColor = "green";

  go3 = createSprite(300,500,50,60);
  go3.shapeColor = "green";

  go4 = createSprite(500,500,50,60);
  go4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go1)){
    movingRect.shapeColor = "red";
    go1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    go1.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
   return false; 
}
}