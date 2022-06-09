var path,runner;
var pathImg,runnerImg;



function preload(){
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  

}

function setup(){
  
//crie uma tela


 createCanvas(320,500);


path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//crie o menino correndo
runner = createSprite(width/2,height-20,20,20);
runner.addAnimation("runnerImg",runnerImg);
runner.scale=0.08;
runner.x = World.mouseX;  
  


}

function draw() {


  runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  runner.collide(edges);
  


   if(path.y > height ){
     path.y = height/2;
   }
  


        


        
       
        
       
     
    
  
  
  drawSprites();
  fill(255);
  
  }








