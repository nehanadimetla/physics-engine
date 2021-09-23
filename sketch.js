
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ground, ball2, rect2
let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var ballOptions={
    restitution:0.95, 
    frictionAir:0.01
  }
  var Options={
    isStatic:true
  }
  ball=Bodies.circle(100,10,20,ballOptions)
  World.add(world,ball)
  ground=Bodies.rectangle(200,390,400,20,Options)
  World.add(world,ground)
  ball2=Bodies.circle(250,10,20,ballOptions)
  World.add(world,ball2)
  rect2=Bodies.rectangle(300,200,200,20,Options)
  World.add(world,rect2)
  rectMode(CENTER)
  ellipseMode(RADIUS)

}

function draw() 
{
  background(51);
  Engine.update(engine)
  fill("red")
  ellipse(ball.position.x,ball.position.y,20)
  fill("blue")
  rect(ground.position.x,ground.position.y,400,20)
  fill("orange")
  ellipse(ball2.position.x,ball2.position.y,20)
  fill("purple")
  rect(rect2.position.x,rect2.position.y,200,20)

  
 
}

