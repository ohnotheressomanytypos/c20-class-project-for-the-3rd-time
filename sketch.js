var cat
var catIMG1,catIMG2,catIMG3,catIMG4;

var mouse
var mouseIMG1,mouseIMG2,mouseIMG3,mouseIMG4;

var background
var backgroundIMG

function preload() {
    backgroundIMG=loadImage("images/garden.png");
    catIMG1=loadAnimation("images/cat1.png");
    catIMG2=loadAnimation("images/cat2.png");
    catIMG3=loadAnimation("images/cat3.png");
    catIMG4=loadAnimation("images/cat4.png");
    mouseIMG1=loadAnimation("images/mouse1.png");
    mouseIMG2=loadAnimation("images/mouse2.png");
    mouseIMG3=loadAnimation("images/mouse3.png");
    mouseIMG4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catIMG1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseIMG1);
    mouse.scale = 0.15;

}

function draw() {

    background(backgroundIMG);
    
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catstop",catIMG4);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catstop");
        
        mouse.addAnimation("mousestop",mouseIMG4);
        mouse.scale=0.16;
        mouse.changeAnimation("mousestop");
    }

    drawSprites();
}


function keyPressed(){
if(keyCode==LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catIMG2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouseIMG2);
}
}
