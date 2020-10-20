const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var pr={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,pr);
  World.add(world,ground);
  var bnc={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,bnc);
  World.add(world,ball);
  console.log(ground.position.x);
}

function draw() {
  background(0);  
  Engine.update(engine);
  //fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  //drawSprites();
}