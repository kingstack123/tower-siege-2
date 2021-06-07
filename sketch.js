
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2, floor;
var box, slingShot, polygon;

function preload() {    

}

function setup(){
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Stand(800, 300, 170, 10)
    stand2 = new Stand(550, 500, 240, 10)

    var locX, locY;
    for(i=0; i < 25; i++) {
        if (i < 7) {
            locX = 460 + (i*30);
            locY = 480;
        } else if (i >=7 && i < 12) {
            locX = 485 + ((i - 7)*30);
            locY = 460;
        } else if (i>=12 && i<15) {
            locX = 510 + ((i-12)*30);
            locY = 440;
        } else if (i==15) {
            locX = 535;
            locY = 420;
        } else if (i>=16 && i<21){
            locX = 740 + ((i - 16)*30);
            locY = 280;
        } else if(i>=21 && i<24){
            locX = 765 + ((i - 21)*30);
            locY = 260;
        } else if (i==24){
            locX = 790;
            locY = 240;
        }
          

        box[i] = new Box(locX, locY, 30, 40); 
    }

  //polygon = Bodies.circle(50,200,20);
  polygon = new Polygon(50, 200, 30);
  slingShot = new SlingShot(polygon.body, {x: 150, y: 200});

  floor = new Floor(600,595,1200,10);   
}

function draw(){
    background("grey");
    Engine.update(engine);    

    for (i=0; i<25; i++){
        box[i].display();
    }

    polygon.display();
    slingShot.display();

    stand1.display();
    stand2.display();

    floor.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
if (keyCode === 32) {
    slingShot.attach(polygon.body);
    }
}


