const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var score = 0
var back
function preload() {
//preload the images here
back = loadImage("sky.png")
}

function setup() {
  createCanvas(3000, 800);
engine = Engine.create()
world = engine.world;

ground = new Ground(650, 600, 1500, 20);

box1 = new Box(700, 100, 70, 70);
  box2 = new Box(700, 100, 70, 70);
  box3 = new Box(700, 100, 70, 70);
  box4 = new Box(700, 100, 70, 70);
  box5 = new Box(700, 100, 70, 70);
  box6 = new Box(700, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);
  box10 = new Box(600, 100, 70, 70);
  box11 = new Box(600, 100, 70, 70);
  box12 = new Box(600, 100, 70, 70);
  box13 = new Box(500, 100, 70, 70);
  box14 = new Box(500, 100, 70, 70);
  box15 = new Box(500, 100, 70, 70);
  box16 = new Box(500, 100, 70, 70);
  box17 = new Box(500, 100, 70, 70);
  box18 = new Box(500, 100, 70, 70);
  box19 = new Box(500, 100, 70, 70);
  box20 = new Box(500, 100, 70, 70);

  // create sprites here

  sm = new Superhero(98, 400, 200);
  rope = new Rope(sm.body, { x: 200, y: 50 });

  monster = new Monster(1090,500,200)
  
}

function draw() {
  background(back);

Engine.update(engine)
textSize(30)
text("Score : "+score,20,30)
ground.display();

box1.display();
box2.display();
box3.display();
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()

//rope.display();
sm.display();

monster.display();
monster.score();
}


function mouseDragged() {
  Matter.Body.setPosition(sm.body, { x: mouseX, y: mouseY });
}
