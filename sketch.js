

var raindrop1, raindrop2, raindrop3, raindrop4;

function setup(){

    createCanvas(250,200);
    
    raindrop1 = createSprite(50,10,10,10);
    raindrop1.shapeColor = "blue"
    raindrop1.velocityY = 5;

    raindrop2 = createSprite(100,10,10,10);
    raindrop2.shapeColor = "blue"
    raindrop2.velocityY = 6;

    raindrop3 = createSprite(150,10,10,10);
    raindrop3.shapeColor = "blue"
    raindrop3.velocityY = 4;

    raindrop4 = createSprite(200,10,10,10);
    raindrop4.shapeColor = "blue"
    raindrop4.velocityY = 8;  
}

function preload(){


}
function draw(){
    background(255);

    drawSprites();
}   

