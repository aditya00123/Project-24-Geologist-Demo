class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':4.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      Translate(this.body.position.x, this.body.position.y);
      Rectangle(0,0,this.body.width,this.body.height);
      this.body.shapeColor = 'grey';
      strokeFill = 'black';
    }
    }