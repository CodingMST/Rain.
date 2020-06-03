const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  
   Engine.update(engine);
  var boxes=[];
  boxes.push(new Box());
  for(var i=0;i<boxes.length;i++){
      boxes[i].display();
    
     }
    
  drawSprites();

}