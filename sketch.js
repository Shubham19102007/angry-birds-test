const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig
var log
var bird

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,350,50,50);
    box2 = new Box(820,350,50,50);
    ground = new Ground(500,height,1000,20)
    pig=new Pig (720,350)
    log1= new Log (810,260,300,PI/2)
    log2=new Log (810,180,300,-PI/2)
    bird= new Bird (800,350,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    bird.display();
    log1.display();
    log2.display();   

}