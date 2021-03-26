
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,500,40)
 //bob1 = new Bob(10,10,100);
 bob1 = new Bob(400,100,40);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  bob1.display();
  roof1.display();
  //drawSprites();
 
}



