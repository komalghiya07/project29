class Polygon{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            density:0.5  
        }
        this.body=Bodies.circle(x,y,20,options);
        //this.image=loadImage("paper.png");
        this.r=20;
        World.add(world,this.body); 
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("white");
        rotate(angle);
        ellipse(this.image,pos.x,pos.y,20,20);
        pop();
            
    }
    
}
