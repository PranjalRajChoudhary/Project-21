var canvas;
var music;
var edges;
var surface1,surface2,surface3,surface4;
var block;

function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(1355,620);

    //create 4 different surfaces
    surface1 = createSprite(1,1,2800,50);
    surface3 = createSprite(1,620,2800,50);
    surface2 = createSprite(1,1,50,1500);
    surface4 = createSprite(1350,620,50,1500);

    surface1.shapeColor = "red";
    surface2.shapeColor = "green";
    surface3.shapeColor = "yellow";
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    block = createSprite(1350/2,620/2,30,30);
    block.x = Math.round(random(200,400));
    block.shapeColor = "white";
    block.setVelocity(-3,2);
}

function draw() {
    background("pink");

    //create edgeSprite
    edges = createEdgeSprites();
   
    //add condition to check if box touching surface and make it box

    if(block.isTouching(surface2)){
        block.shapeColor = "green";
        block.bounceOff(surface2);
        }   
    if(block.isTouching(surface3)){
            block.shapeColor = "yellow";
            block.bounceOff(surface3);
            }   
    if(block.isTouching(surface4)){
                block.shapeColor = "blue";
                block.bounceOff(surface4);
                block.setVelocity(0,0);
     }   
     if(block.isTouching(surface1)){
        block.shapeColor = "red";
        block.bounceOff(surface1);
        }  
        drawSprites();
   
}


