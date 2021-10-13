
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(250,300,25);
    bobObject2 = new Bob(300,300,25);
    bobObject3 = new Bob(350,300,25);
    bobObject4 = new Bob(400,300,25);
    bobObject5 = new Bob(450,300,25);

    Roof1 = new Roof(350,100,300,30);

    rope1 = new Rope(bobObject1.body,Roof1.body,-100,0);
    rope2 = new Rope(bobObject2.body,Roof1.body,-50,0);
    rope3 = new Rope(bobObject3.body,Roof1.body,0,0);
    rope4 = new Rope(bobObject4.body,Roof1.body,50,0);
    rope5 = new Rope(bobObject5.body,Roof1.body,100,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine)

  Roof1.display();
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:0});
  }
}







