
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var groung,handle;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(400,690,800,5,{isStatic:true})
	World.add(world,ground)
	
	handle = Bodies.rectangle(400,350,250,20,{isStatic:true})
	World.add(world,handle)

    bob1 = new Ball(300,350,20,20)
	bob2 = new Ball(350,350,20,20)
	bob3 = new Ball(400,350,20,20)
	bob4 = new Ball(450,350,20,20)
	bob5 = new Ball(500,350,20,20)

	chain1 = new SlingShot(bob1.body,{x:300, y:342},-bob1*2,0)
	chain2 = new SlingShot(bob2.body,{x:350, y:342},-bob2*2,0)
	chain3 = new SlingShot(bob3.body,{x:400, y:342},-bob3*2,0)
	chain4 = new SlingShot(bob4.body,{x:450, y:342},-bob4*2,0)
	chain5 = new SlingShot(bob5.body,{x:500, y:342},-bob5*2,0)

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

rectMode(CENTER);
   fill("green")
	rect(ground.position.x,ground.position.y,800,5)
	rectMode(CENTER);
	rect(handle.position.x,handle.position.y,250,20)
}
function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-3,y:-3})
}
}