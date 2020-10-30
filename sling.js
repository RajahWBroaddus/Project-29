class Sling {
    /* constructor(bodyA, pointB) {
         var options = {
             bodyA: bodyA,
             pointB: pointB,
             stiffness: 0.04,
             length: 10
         }
         this.bodyA = bodyA
         this.pointB = pointB
         this.sling = Constraint.create(options);
         World.add(world, this.sling);

     }
     attach(body) {
         this.sling.bodyA = body;
     }
     fly() {
         this.sling.bodyA = null;
     }*/
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);

    }
    attach(body) {
        this.sling.bodyA = body;
    }
    fly() {
        this.sling.bodyA = null;

    }
}