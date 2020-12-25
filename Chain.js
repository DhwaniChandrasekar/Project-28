class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 20
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.p = pointB
    }
    fly(){
    this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA !== null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.p;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}