class Polygon {
    constructor(x, y, radius) {
        var options = {
            'restitution': 0,
            'friction': 1,
            'density': 5
        }
        polygon = Bodies.polygon(x, y, 5, radius, options);
    }
    display() {
        var stonepos = this.body.position;
        push()
        translate(stonepos.x, stonepos.y);
        // rectMode(CENTER)
        // rotate(this.body.angle)
        fill(255, 0, 255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius * 2, this.radius * 2)
        pop()
    }
}