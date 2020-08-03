class divisions {
    constructor(x,y,r){
        var options = {
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.r=10
        World.add(world,this,body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white")
        
    }
}