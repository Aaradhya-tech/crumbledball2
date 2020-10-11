
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, d1,d2,d3;
var ground,duster,edusterImg;

function preload(){
  dusterImg = loadImage("dust.png");
}

function setup() {
	createCanvas(1100, 400);

	engine = Engine.create();
  world = engine.world;
  
  duster = createSprite(840,220,200,20);
  duster.addImage(dusterImg);
  duster.scale = 0.7;

  paper = new papers(40,20,70,70);
  ground = new Ground(1100/2,300,1100,10);
  d1 = new dustbin(850,290,200,20);
  d2 = new dustbin(740,250,20,100);
  d3 = new dustbin(940,250,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");



  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();

  drawSprites();
 
}

function keyPressed(){
  
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:310,y:-290})
}

}



