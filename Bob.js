class Bob {
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            'restitution':1.0,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        //this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display(){
        
        //var angle = this.body.angle;

        //push();
        //translate(pos.x, pos.y);
        //rotate(angle); 
        ellipseMode(RADIUS);
        fill(254,0,255);
        circle(this.body.position.x, this.body.position.y, this.radius);
        //pop();
    }
}

