var ball_img,paddle,ball,paddle_img;
function preload() {
ball_img=loadImage("ball.png")
  paddle_img = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20)
  ball.addImage(ball_img)
  ball.velocityX = 9;
  
  paddle=createSprite(350,200,20,100)
  paddle.addImage(paddle_img)

}

function draw() {
  background(205,153,0);
edges = createEdgeSprites();
  ball.bounceOff(edges[0])
   ball.bounceOff(edges[2])
   ball.bounceOff(edges[3])
   ball.bounceOff(paddle,explosion)
  
  paddle.collide(edges);
 
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y+20;
  }
  drawSprites();
  
}

function explosion()
{
ball.velocityY = random(-9,9);
}

