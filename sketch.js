
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
	plane1 = new Plane(400,690);
    hammer1 = new Hammer();
}


function draw() {
  
  background("lightblue");
  Engine.update(engine);
  
  plane1.display();
  hammer1.display();

  drawSprites();
 
}



