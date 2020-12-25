
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg, boy;
function preload()
{
boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	
 tree1 = new Tree(1050,380,10,100);
 
 stone1 = new Stone(600,200,50,50);
 
 
 
 mango1=new Mango(1100,185,30);
 mango2=new Mango(1170,178,30);
 mango3=new Mango(1010,170,30);
 mango4=new Mango(1000,180,30);
 mango5=new Mango(1200,175,30);
boy = createSprite(200,500,100,300);
boy.addImage(boyImg);
boy.scale = 0.15;
chain = new Chain(stone1.body,{x:120,y:410}); 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  tree1.display();
  ground.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  chain.display();
  drawSprites();
  
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
    }
    
    function mouseReleased(){
    chain.fly();
	}

  function detectollision(lstone,lmango){
 
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
      if(distance<=lmango.r+lstone.r)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


