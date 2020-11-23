const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = "end"
var turn = 0;
var score = 0;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    


    ground1 = new Ground(46,789,80,20);
    ground2 = new Ground(116,789,80,20);
    ground3 = new Ground(199,789,80,20);
    ground4 = new Ground(276,789,80,20);
    ground5 = new Ground(360,789,80,20);
    ground6 = new Ground(437,789,80,20);

    for (var k = 0; k <=width; k = k + 80) {
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
      }
   
   
    
    for (var j = 10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 10; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}

function draw(){
    background("blue");
    Engine.update(engine);
    text("Score  " + score, 200, 200)
    text(mouseX+","+mouseY,mouseX,mouseY)
   

   

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();

    function mousePressed() {

   if (gameState!=="end") {
      count++
      particle=new Particle(mouseX,10,10,10)
   }
}

    if (particle!==null) 
    {
       particle.display();

       if (particle.body.position.y >760) 
       {
         if (particle.body.position.x < 300) 
         {
            score=score+500;
            particle=null;

            if (count>= 5) gameState = "end"

         }
       }
      }
   
    
    
      for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }

       for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
    
 

    
}

function mousePressed() {

   if (gameState!=="end") {

      count++;
      particle=new Particle(mouseX,10,10,10);
   }
}


