class Bullet{
  constructor(size, speed){
    this.size = size;
    this.y = Math.floor(Math.random()*24)*20;
    this.x = 640;
    this.speed = speed;
  
    this.img = loadImage("assets/Bitch.png");
  }
  update(){
    this.x -= this.speed;
    if(this.x <= 0){
      this.x = 640;
      this.y = Math.floor(Math.random()*24)*20;
    }
  }
  show(){
    fill(0);
    noStroke();              
    image(this.img,this.x,this.y,this.size*2,this.size);
  }
  getCoords(){
    return (this.x,this.y);
  }
}