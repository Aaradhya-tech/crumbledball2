class papers{
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.rectangle(x,y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("pap.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };