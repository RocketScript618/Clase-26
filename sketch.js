const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ball;
var tGround;
var con;

var button;

var angle = 17;

var one,two,three,four;
var b1,b2,b3,b4;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution: 2,
    frictionAir: 0.05
  }

  button = createImg('up.png');
  button.position(350,50);
  button.size(50,50);
  button.mouseClicked(fuerza);

  ball = Bodies.circle(200,300,25,options);
  World.add(world,ball);

  con = Matter.Constraint.create({
    pointA: {
      x: 200,
      y: 200
    },
    bodyB: ball,
    pointB: {
      x:0,
      y:0
    },
    length: 100,
    stiffness: 1
  });
  World.add(world,con);

  //one = new Rotative(300,200,60,10);
  //two = new Rotative(100,100,120,10);
  //three = new Rotative(350,350,120,10);
  //four = new Rotative(200,350,200,10)

  b1 = new Ground(200,390,400,25);
  b2 = new Ground(200,10,400,25);
  b3 = new Ground(10,200,25,400);
  b4 = new Ground(390,200,25,400);

  rectMode(CENTER);
}


function draw() {
  background("black");
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 25);

  //one.display();
  //two.display();
  //three.display();
  //four.display();
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();

  stroke("white");
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
}

function fuerza(){
  Matter.Body.applyForce(ball,{
    x:ball.position.x, 
    y:ball.position.y
  },{
    x:.1,
    y:-.1
  });
}