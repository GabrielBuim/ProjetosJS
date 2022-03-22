var box
var box1
function setup() {
  createCanvas(400,400);
 box = createSprite(200,200,400,400);
 box1 = createSprite(200,200,20,20); 
}






function draw() 
{
  
  background(30);
 if (keyDown("right")){
    box.shapeColor = "red"
 }
 if (keyDown("left")){
   box.shapeColor = "blue"
 }
 if (keyDown("UP")){
   box.shapeColor = "yellow"
 }
 if (keyDown("DOWN")){
   box.shapeColor = "purple"
 }
 drawSprites()
}




