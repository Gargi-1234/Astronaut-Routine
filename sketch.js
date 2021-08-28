var bg, bg2, bg2Img;
var sleep, brush, gym1, gym2, eat, drink, move1, move2, bath, reparing, data
var astronaut;
var topEdge, BottomEdge, rightEdge, leftEdge;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move1 = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");
  move2 = loadAnimation("images/moveLeft.png", "images/move1Left.png");
  reparing = loadAnimation("images/fixing.png")
  bg2Img = loadImage("images/space.jpg")
  data = loadAnimation("images/reshearch.png")
}

function setup() {
  createCanvas(400, 400);


  bg2 = createSprite(200,200)
  bg2.addImage(bg2Img)
  bg2.scale = 1.7
  bg2.visible = false

  astronaut = createSprite(200, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.08;
  astronaut.setCollider("rectangle", 0, 0, 1055, 2055);


  topEdge = createSprite(200, 10, 400, 10);
  topEdge.visible = false;
  bottomEdge = createSprite(200, 390, 400, 10);
  bottomEdge.visible = false;
  rightEdge = createSprite(390, 200, 10, 400);
  rightEdge.visible = false;
  leftEdge = createSprite(10, 200, 10, 400);
  leftEdge.visible = false;

  
}

function draw() {
  background(bg);

  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);
  astronaut.bounceOff(rightEdge);
  astronaut.bounceOff(leftEdge);

  if (keyDown("UP_ARROW")) {
    bg2.visible = false
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("DOWN_ARROW") && keyDown("1")) {
    bg2.visible = false
    astronaut.addAnimation("running", gym1);
    astronaut.changeAnimation("running");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("DOWN_ARROW") && keyDown("2")) {
    bg2.visible = false
    astronaut.addAnimation("exercise", gym2);
    astronaut.changeAnimation("exercise");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("RIGHT_ARROW") && keyDown("1")) {
    bg2.visible = false
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.scale = 0.08;
  }
  
   if (keyDown("RIGHT_ARROW") && keyDown("2")) {
    bg2.visible = false
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("LEFT_ARROW")) {
    bg2.visible = false
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("s")){
    bg2.visible = true
    astronaut.x = 200;
    astronaut.y = 200;
    astronaut.addAnimation("fixing", reparing);
    astronaut.changeAnimation("fixing");
    astronaut.setVelocity(0, 0);
  }

  console.log(astronaut.x)

  if (keyDown("m") ) {
    bg2.visible = false
    astronaut.addAnimation("moving", move2);
    astronaut.changeAnimation("moving");
    astronaut.setVelocity(-1, -1);
    astronaut.scale = 0.08;
  }

  if (keyDown("0")) {
    bg2.visible = false
    astronaut.changeAnimation("sleeping");
    astronaut.x = 200;
    astronaut.y = 230;
    astronaut.setVelocity(0, 0);
    astronaut.scale = 0.08;
  }

  if (keyDown("r")){
    astronaut.x = 200;
    astronaut.y = 250;
    bg2.visible = false
    astronaut.addAnimation("sendingAndReciving", data);
    astronaut.changeAnimation("sendingAndReciving");
    astronaut.setVelocity(0, 0);
  }

  fill("white");
  textSize(20);
  text("Instruction :", 10, 20);
  textSize(10);
  text("Up Arrow = Brushing", 10, 40);
  textSize(10);
  text("Down Arrow and 1 = Gymming", 10, 50);
  textSize(10);
  text("Down Arrow and 2 = Gymming", 10, 60);
  textSize(10);
  text("Right Arrow and 1 = Eating", 10, 70);
  textSize(10);
  text("Right Arrow and 2 = Drinking", 10, 80);
  textSize(10);
  text("Left Arrow = Bathing", 10, 90);
  textSize(10);
  text("m Key = Move ", 10, 100)
  textSize(10);
  text("s key = Repairing station", 10, 110)
  textSize(10);
  text("r key = Sending and Reciving data", 10, 120)
  textSize(10);
  text("0 key = sleeping", 10, 130)
  drawSprites();
}
