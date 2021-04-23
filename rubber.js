class Rubber {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 50;

        circMode(CENTER);

        var options = {
            'density': 1,
            'friction': 5,
            'restitution': 0.3
        }

        this.body = Matter.Bodies.Circle(x, y, radius, options);
        World.add(world, this.body);
    }

    display() {

    }
}