
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 

  ground1 = new G(750,620,1500,20);
  ground2 = new G(850,490,300,20);
  ground3 = new G(1290,390,180,20);

   

  ball = new polygon(200,390);

  slingShot = new Chain(ball.body,{x:200,y:390});
   //yellow colour blocks
  box1 = new Box1(970,350,60,60);
  box2 = new Box1(730,350,60,60);
  box3 = new Box1(790,350,60,60);
  box4 = new Box1(850,350,60,60);
  box5 = new Box1(910,350,60,60);

  //blue colour blocks
  box6 = new Box(790,300,60,60);
  box7 = new Box(850,300,60,60);
  box8 = new Box(910,300,60,60);
	
  //purple colour blocks
  
  box9 = new Box2(850,240,60,60);

  box10 = new B(1230,360,60,60)
  box11 = new B(1290,360,60,60)
  box12 = new B(1350,360,60,60)

  box13 = new Bo(1290,330,60,60)
  
  
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  textSize(70)
  fill("yellow")
  textFont(" Bold")
  text("𝘛𝘖𝘞𝘌𝘙 𝘚𝘐𝘌𝘎𝘌 - 2",200,200)
  box8.display();
  box10.display();
  box13.display();
  box12.display();
  box11.display();
  box9.display();
  box6.display();
  box7.display();
  slingShot.display();
  box5.display();
  ball.display();
  box4.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  ground2.display();
  ground3.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingShot.flow();
}
function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball.body);

  }
}
