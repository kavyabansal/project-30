const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stage1,stage2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var polygon,polygon2,slingShot;

function setup() {

    createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,490,1200,20);
    stage1 = new Ground(650,350,250,10);
    stage2 = new Ground(940,230,190,10);
//level 1 (stage 1)
    block1 = new Box(560,325,30,40);
    block2 = new Box(590,325,30,40);
    block3 = new Box(620,325,30,40);
    block4 = new Box(650,325,30,40);
    block5 = new Box(680,325,30,40);
    block6 = new Box(710,325,30,40);
    block7 = new Box(740,325,30,40);
//level 2 (stage 1)
    block8 = new Box(590,295,30,40);
    block9 = new Box(620,295,30,40);
    block10 = new Box(650,295,30,40);
    block11 = new Box(680,295,30,40);
    block12 = new Box(710,295,30,40);
//level 3 (stage 1)
    block13 = new Box(620,265,30,40);
    block14 = new Box(650,265,30,40);
    block15 = new Box(680,265,30,40); 
//level 4 (stage 1)
    block16 = new Box(650,235,30,40);  
// level 1 (stage 2)
    block17 = new Box(880,205,30,40);
    block18 = new Box(910,205,30,40);
    block19 = new Box(940,205,30,40);
    block20 = new Box(970,205,30,40);
    block21 = new Box(1000,205,30,40);
//level 2 (stage 2)
    block22 = new Box(910,165,30,40);
    block23 = new Box(940,165,30,40);
    block24 = new Box(970,165,30,40);
// level 3 (stage 2)
    block25 = new Box(940,125,30,40);  

    polygon = new Polygon(250,280,80,80);
    slingShot = new SlingShot(polygon.body,{x:250,y:200});
    
}

function draw() {

    background("black");
    Engine.update(engine);
    
    stroke("black");
    fill("white");
    textSize(25);
    text("Drag the Hexagon and release it twards the blocks",50,50);
    text("Press Space Bar to get a second chance",50,85);

    ground.display();
    stage1.display();
    stage2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    slingShot.display();
    polygon.display();
    

}

function keyPressed(){
    if(keyCode===32) {
        slingShot.attach(polygon.body);
    }
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingShot.fly();
}

