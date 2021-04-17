class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.jpg");
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
    
var pos=this.body.position;
var angle=this.body.angle;

   if(this.body.speed<3) {
     push()
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image( this.image,0, 0, this.width, this.height);
    pop()
   }else{
      World.remove(world,this.body);
      push()
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop()
      }
    }
  }