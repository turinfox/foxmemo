var t_rex;
var animacion_1;
var piso;
var pisoIm;
var p2;
var nubeimag;
var cactusimag,cactusimag2,cactusimag3,cactusimag4,cactusimag5,cactusimag6,cactusimag7;
var ACDC;

function cactusf(){

  if(frameCount % 120 === 0){
   var cactus=createSprite(1280,550);
   cactus.velocityX=-20;
   cactus.lifetime=100;
   var obs=Math.round(random(1,6));
   switch (obs) {
    case 1:cactus.addImage("ror",cactusimag2);
      
      break;
      case 2:cactus.addImage("ror",cactusimag3);

      break;
      case 3:cactus.addImage("ror",cactusimag4);

      break;
      case 4:cactus.addImage("ror",cactusimag5);

      break;
      case 5:cactus.addImage("ror",cactusimag6);
      break;
      case 6:cactus.addImage("ror",cactusimag7);
      break;
      
    default:
      break;
  
   }


 }

  ACDC.add(cactus);


}

function nube(){

  if(frameCount % 120 === 0){
   var nube=createSprite(1280,280);
   nube.addImage("lel",nubeimag);
   nube.velocityX=-6;
   nube.y=Math.round(random(180,300)); 
   nube.lifetime=250;

  }
  

  
 

}



function preload(){
  animacion_1=loadAnimation("trex1.png","trex3.png","trex4.png");
  pisoIm=loadImage("ground2.png");
  nubeimag=loadImage("cloud.png");
  cactusimag2=loadImage("obstacle1.png");
  cactusimag3=loadImage("obstacle2.png");
  cactusimag4=loadImage("obstacle3.png");
  cactusimag5=loadImage("obstacle4.png");
  cactusimag6=loadImage("obstacle5.png");
  cactusimag7=loadImage("obstacle6.png");

}



function setup(){
  createCanvas(1200,600);
  piso=createSprite(100,570,1200,5);
  piso.addImage("sas",pisoIm);
  t_rex=createSprite(100,500);
  t_rex.addAnimation("ror",animacion_1);
  p2=createSprite(100,580,1000,5);
  p2.shapeColor=180;
  piso.x=piso.width/2;
  ACDC=createGroup();
} 





function draw(){
 background(180);
  drawSprites();
  if(keyDown("space")){
    t_rex.velocityY=-13;

  }

  t_rex.velocityY=t_rex.velocityY+1
  t_rex.collide(p2);
  piso.velocityX=-15
  if(piso.x<0){
    piso.x=piso.width/2;


  }
  nube();
  cactusf();
  if(ACDC.isTouching(t_rex)) {
    piso.velocityX=0;
    //t_rex.velocityY=0;
    //ACDC.setVelocityXEach(0);
  }
}