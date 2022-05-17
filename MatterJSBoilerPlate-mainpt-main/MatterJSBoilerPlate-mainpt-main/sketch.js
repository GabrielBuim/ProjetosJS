const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Crie os Corpos Aqui.
  var plane_options {
    isStatic=true
  }
  block1 = Bodies.circle(220,10,10,block1_options);
  block2 = Bodies.rectangle(110,50,10,10,block2_options);
  block3 = Bodies.rectangle(350,50,10,10,block3_options);

  var block1_options = {
	  restituition:0.5,
	  friction:0.02,
	  frictionAir:0
  }
  var block2_options = {
	restituition:0.7,
	friction:0.01,
	frictionAir:0.1
}
var block3_options = {
	restituition:0.01,
	friction:1,
	frictionAir:0.3
}


  Engine.update(engine);
}

function draw() {
  rectMode(CENTER);
  
  background(0);

  drawSprites();
}
