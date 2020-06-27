var ground
var ballIMG , ballSprite
var log1 ,log2 , log3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
		ballIMG=loadImage("ball.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	ballSprite=createSprite(15, 648, 25,25);
	ballSprite.addImage = ballIMG;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	log1 =createSprite(320,645,15,50);
	log2 =createSprite(400,665,150,10);
	log3 =createSprite(470,645,15,50);

log1.shapeColor = ("red")
log2.shapeColor = ("red")
log3.shapeColor = ("red")


	engine = Engine.create();
	world = engine.world;

	ballSprite = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, ballSprite);
	

ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
if(keyDown){(UP_ARROW)
  ballSprite.velocityX = -6 , ballSprite.velocityY = 6;
}
ballIMG.x = ballSprite.position.x
ballIMG.y = ballSprite.position.y

  drawSprites();
 
}


