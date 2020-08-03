function setup() {
  createCanvas(480,800);
  createSprite(200, 800, 900, 50);
  
  createSprite(20, 800, 20, 500);
  createSprite(100, 800, 20, 500);
  createSprite(180, 800, 20, 500);
  createSprite(260, 800,20, 500);
  createSprite(340, 800, 20, 500);
  createSprite(420, 800, 20, 500);
  
}
particles=[]
plinkos=[]
division=[]
var divisionHeight=300






function draw() {
  background(255,255,255);  
  drawSprites();
  if (frameCount%60===0){
    part= new Particle(200,200)
  }

  
}

