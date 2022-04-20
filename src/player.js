class Player{
  constructor(x,y,size,pyshicsAplied){
    this.pA = pyshicsAplied;
    this.x = x;
    this.y = y;
    this.size = size;
    this.vel = 0;
    this.gravity = 0.6;
    this.lift = -15;
    this.img = loadImage("assets/player_fucked1.png")
  }
  update(){
    if(this.pA){
      this.vel += this.gravity;
      this.vel *= 0.9;
      this.y += this.vel;
      if (this.y < 0) {
        this.y = 0;
        this.vel = 0;
      }
    }
  }
  jump(){
    this.vel += this.lift
  }
  show(){
    fill(0);
    noStroke();
    image(this.img,this.x,this.y,this.size,this.size);
  }
}