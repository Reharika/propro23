const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ellipseMode(RADIUS);
	var ball_options = {
	  restitution:1.2, 
            friction:0.01,
             density:1.5
	}
	ball = Bodies.circle(320,380,20,ball_options)
    World.add(world,ball);

	ball2 = Bodies.circle(360,380,20,ball_options)
    World.add(world,ball2);

    ball3 = Bodies.circle(400,380,20,ball_options)
    World.add(world,ball3);

    ball4 = Bodies.circle(440,380,20,ball_options)
     World.add(world,ball4);

	 ball5 = Bodies.circle(480,380,20,ball_options)
     World.add(world,ball5);

     rope1 = new Rope(ball,{x:320,y:100});
     rope2 = new Rope(ball2,{x:360,y:100});
     rope3 = new Rope(ball3,{x:400,y:100});
     rope4 = new Rope(ball4,{x:440,y:100});
     rope5 = new Rope(ball5,{x:480,y:100});


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20);

  ellipse(ball2.position.x,ball2.position.y,20);

  ellipse(ball3.position.x,ball3.position.y,20);

  ellipse(ball4.position.x,ball4.position.y,20);

  ellipse(ball5.position.x,ball5.position.y,20);
 
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:-50,y:15})
  }
}
