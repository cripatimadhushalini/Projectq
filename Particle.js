class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false,
        }
        this.traj = [];

        this.r = 10;
        this.part = Bodies.circle(x, y, this.r, options);
        this.part = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.part);
    }

    display() {
        var pos = this.part.position;
        var angle = this.part.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};