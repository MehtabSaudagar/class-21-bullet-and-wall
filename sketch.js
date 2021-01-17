var bullet, wall, weight, speed, damage,thickness;
var state="do";
var def;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 bullet= createSprite(50, 200, 30, 10);
 bullet.shapeColor="yellow";
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor="black"

 speed=random(223,321);
  weight=random(30,52);
 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  textSize(50)
      fill("red")
   
      if(keyDown("space")&&state==="done"){
        state="do"
        bullet.x=50;
        speed=random(223,321);
        weight=random(30,52);
        bullet.velocityX=speed;
        bullet.shapeColor="yellow";
        wall.shapeColor="black";
        thickness=random(22,83);
        wall.width=thickness;
      }
    
     
  if(hasCollided(wall,bullet)){
    text("The Wall is "+def+" against the Bullet",250,100);
    if(state==="do"){
    bullet.velocityX=0;
    bullet.x=wall.x-wall.width/1.4;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
      def="not effective";
      
    }

    else{
      wall.shapeColor="green";
      def="effective";
    }

    state="done";
  }
}

  drawSprites();
}

function hasCollided(w,bull){
  if(w.x-bull.x<w.width/2+bull.width/2){
    return true;
  }
  else{
    return false;
  }
}