const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon, slinger;

function preload() {

}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    platform1 = new Floor(500, 550, 280, 10);
    block1 = new Box(520 - 140, 515, 40, 60);
    block2 = new Box(560 - 140, 515, 40, 60);
    block3 = new Box(600 - 140, 515, 40, 60);
    block4 = new Box(640 - 140, 515, 40, 60);
    block5 = new Box(680 - 140, 515, 40, 60);
    block6 = new Box(720 - 140, 515, 40, 60);
    block7 = new Box(760 - 140, 515, 40, 60);

    block8 = new Box(560 - 140, 435, 40, 60);
    block9 = new Box(600 - 140, 435, 40, 60);
    block10 = new Box(640 - 140, 435, 40, 60);
    block11 = new Box(680 - 140, 435, 40, 60);
    block12 = new Box(720 - 140, 435, 40, 60);

    block13 = new Box(600 - 140, 405, 40, 60);
    block14 = new Box(640 - 140, 405, 40, 60);
    block15 = new Box(680 - 140, 405, 40, 60);

    block16 = new Box(640 - 140, 375, 40, 60);

    polygon = Bodies.circle(50, 200, 20, { 'restitution': 0, 'friction': 1, 'density': 5 });
    World.add(world, polygon);

    slinger = new Sling(this.polygon, { x: 100, y: 200 });


}

function draw() {
    background(0);
    Engine.update(engine);
    platform1.display();
    fill("purple");
    block1.display();
    fill("cyan");
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill("purple");
    block7.display();
    block8.display();
    fill("cyan")
    block9.display();
    block10.display();
    fill("cyan");
    block11.display();
    fill("purple");
    block12.display();
    block13.display();
    fill("cyan")
    block14.display();
    fill("purple");
    block15.display();
    block16.display();
    debug: true;
    mouseDragged();
    mouseReleased();
    keyPressed();
}



function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {

}

function keyPressed() {
    if (keyCode === 32) {
        slinger.attach(polygon.body);
    }
}