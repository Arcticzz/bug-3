const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var arr = [0, "hello", true]
console.log(arr[1])

var arr2 = [[1,2],[3,4],arr]
console.log(arr2.length)
arr.push("world")
arr.pop()
console.log(arr)

var balls = []


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
 

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  //canonBall.display()
 for(var i = 0;i<balls.length;i++){
   showCannonBalls(balls[i],i)
 }


}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    //canonBall.shoot()
   canonBall = new CanonBall(cannon.x, cannon.y)
   balls.push(canonBall)
   
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length -1].shoot()
  }
}

function showCannonBalls(ball,index){
  ball.display()
}







