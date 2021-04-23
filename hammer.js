class Hammer {
    constructor() {
        
        
        var options = {
            'density' : 2.0,
            'restitution' : 0.5,
            'friction' : 1.0
        }

        this.width = 70;
        this.height = 20;


        this.body = Bodies.rectangle(x,y,70,20,options);
        this.x = mouseX;
        this.y = mouseY;
        World.add(world, this.body);

    }

    display() {
var pos = this.body.position
push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(255);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,70,20);
        pop()
        
    }
}