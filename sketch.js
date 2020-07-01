var Mrect, Frect;
var gobject1, gobject2;



function setup() {
  createCanvas(800,400);
  Mrect= createSprite(400, 200, 50, 50);
  Mrect.velocityX=3;
  Frect= createSprite(300,200,50,50);
  Frect.velocityX=-3;
  gobject1=createSprite(200,10,100,100);
  gobject1.velocityY=3;
  gobject2=createSprite(200,300,100,100);
  gobject2.velocityY=-3;
}

function draw() {
  background(255,255,255);  
  Mrect.x=World.mouseX;
  Mrect.y= World.mouseY;
/*if (istouching(gobject1,Mrect)){

    Mrect.shapeColor="blue";
    gobject1.shapeColor="blue";
  }
  else{
    Mrect.shapeColor="grey";
    gobject1.shapeColor="grey";

  }*/ 
  Bounceoff(gobject1,gobject2)

  
  
  
  drawSprites();
}