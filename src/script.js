var player;
var bullets = [];
var overlapping = false;
var b;
var c;
var ded = false;
var score = 0;
var a;

function setup(){
  createCanvas(640,480).center();
  b = loadImage("assets/Landscape.png");
  c = loadImage("assets/URFUCKED.jpg");
  for(let i = 0;i<10;i++){
    bullets.push(new Bullet(32,Math.floor((Math.random()+1)*4)));
  }
  player = new Player(75,50,64,true);
}
function draw(){
  image(b,0,0,640,480)
  player.update();
  player.show();
  for(let i =0;i<bullets.length;i++){
    bullets[i].update();
    bullets[i].show();
    
    if(dist(player.x,player.y,bullets[i].x,bullets[i].y) <= 48 || player.y >= 480){
      ded = true;
    }
    if(ded){
      image(c,0,0,640,480);
    }
  }
}
function keyPressed(){
  if(key == ' ' || key == "ArrowUp" || key == "w"){
    player.jump();
  }
}
function mousePressed(){
  player.jump();
}