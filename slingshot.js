class SlingShot{
    constructor(bodyA, pointB,offsetX,offsetY){
       
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
        this.pointB = pointB
         this.offsetX = offsetX
        this.offsetX = offsetY
        
    }
        display(){

           var pointA = this.sling.bodyA.position;
             var pointB = this.pointB;
             push()
             stroke("red")
             strokeWeight(5);
             line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }
    }  