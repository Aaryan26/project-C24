const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100,100,20);

	box1= new Bin(600,590,20,130);
	box2= new Bin(675,650,125,20);
	box3= new Bin(750,590,20,130);

	ground= new Ground(400,690,800,10);
	Engine.run(engine);
	

}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  //drawSprites();

 paper.display();
 box1.display();
 box2.display();
 box3.display();
 ground.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60 , y:-65});
	}
}








