class Plane {
 constructor(x,y) {

    this.x = x;
    this.y = y;
    this.width = 800;
    this.height = 10;

    var options = {
        isStatic:true
    }

     this.body = Bodies.rectangle(x,y,800,10,options);
     this.body.shapeColor = red;

     World.add(world, this.body);

 }

 display() {
     var pos = this.body.position;
     rectMode(CENTER);
     fill(163);
     stroke(0);
     rect(pos.x,pos.y,800,10);

     
 }
}