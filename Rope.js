class Rope{
    constructor(body1,pointA){
        this.pointB = pointA;
        
        var options={
            bodyA:body1,
           
            pointB:pointA
        }
    this.rope = Matter.Constraint.create(options)
    World.add(world,this.rope);
    }
    display()
    {

        var pointA=this.rope.bodyA.position;
		var pointB=this.pointB

		strokeWeight(2);
		//line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}