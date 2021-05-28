const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1, ground2, ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10, box11, box12, box13, box14, box15, box16;

var box1a,box2a,box3a,box4a,box5a,box6a,box7a,box8a,box9a,box10a,
box11a, box12a, box13a, box14a, box15a, box16a;

var img, rope, hexa, ball;

function preload(){
  img = loadImage("polygon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   
  engine = Engine.create();
  world =  engine.world;

  hexa = Bodies.circle(50, 200, 20);
  World.add(world, hexa)
  rope = new Launcher(hexa, {x:150, y:200});

  

  ground =  new Ground(width/2, height-20, width, 20);
  ground1 =  new Ground(width/2+50, height-150, 450, 20);
  ground2 =  new Ground(width/2+ 500, height-300, 450, 20);


  box1 = new Block(width/2-120,500, 50, 60);
  box2 = new Block(width/2-66,500, 50, 60);
  box3 = new Block(width/2-12,500, 50, 60);
  box4 = new Block(width/2+42,500, 50, 60);
  box5 = new Block(width/2+96,500, 50, 60);
  box6 = new Block(width/2+150,500,50, 60)
  box7 = new Block(width/2+204,500,50, 60);


  box8 = new Block(width/2-66,440, 50, 60);
  box9 = new Block(width/2-12,440, 50, 60);
  box10 = new Block(width/2+42,440, 50, 60);
  box11 = new Block(width/2+96,440, 50, 60);
  box12 = new Block(width/2+150,440,50, 60);

  box13 = new Block(width/2-12,380, 50, 60);
  box14 = new Block(width/2+42,380, 50, 60);
  box15 = new Block(width/2+96,380, 50, 60);

  box16 = new Block(width/2+42,320, 50, 60);





  
  box1a = new Block(width/2+350,340, 50, 60);
  box2a = new Block(width/2+404,340, 50, 60);
  box3a = new Block(width/2+458,340, 50, 60);
  box4a = new Block(width/2+512,340, 50, 60);
  box5a = new Block(width/2+566,340,50, 60);
  box6a = new Block(width/2+620,340,50, 60);
  box7a = new Block(width/2+674,340,50, 60);

  box8a = new Block(width/2+404,280, 50, 60);
  box9a = new Block(width/2+458,280, 50, 60);
  box10a = new Block(width/2+512,280, 50, 60);
  box11a = new Block(width/2+566,280,50, 60);
  box12a= new Block(width/2+620,280,50, 60);

  box13a = new Block(width/2+458,220, 50, 60);
  box14a = new Block(width/2+512,220, 50, 60);
  box15a = new Block(width/2+566,220,50, 60);

  box16a = new Block(width/2+512,160, 50, 60);

}

function draw() {
  background("white");  

  Engine.update(engine);

  
  
  ground.display();
  ground1.display();
  ground2.display();

  fill("pink");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("cyan")
  box8.display();
  box9.display();
  box10.display();
  box11.display()
  box12.display()

  fill("lightgreen");
  box13.display();
  box14.display();
  box15.display();

  fill("yellow");
  box16.display();


  fill("pink");
  box1a.display();
  box2a.display();
  box3a.display();
  box4a.display();
  box5a.display();
  box6a.display();
  box7a.display();

  fill("cyan")
  box8a.display();
  box9a.display();
  box10a.display();
  box11a.display()
  box12a.display()

  fill("lightgreen");
  box13a.display();
  box14a.display();
  box15a.display();

  fill("yellow");
  box16a.display();

  rope.display();
 
  imageMode(CENTER);
  image(img, hexa.position.x, hexa.position.y, 40, 40 )

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}