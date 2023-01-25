
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ventilador1, ventilador2;
var btn2;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.05
  }
  var ball2_options = {
    restitution: 0,
    frictionAir: 0.20
  }
  var ground_options = {
    isStatic: true
  };

  btn2 = createImg('up.png');
  btn2.position(350, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);

  ground1 = Bodies.rectangle(100, 400, 400, 20, ground_options);
  World.add(world, ground1);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(100, 10, 20, ball2_options);
  World.add(world, ball2);

  ground = Bodies.rectangle(100, 400, 650, 20, ground_options);
  World.add(world, ground);




  rectMode(CENTER);
  ellipseMode(RADIUS);

  ventilador1 = new ventilador(100, 100, 100, 20);
  ventilador2 = new ventilador(300, 100, 100, 50);
}


function draw() {
  background(51);
  Engine.update(engine);





  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 650, 20)
  ellipse(ball2.position.x, ball2.position.y, 20);



  ventilador1.rotacao();
  ventilador2.rotacao();
}

function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
