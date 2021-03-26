class Chain{
constructor(bodyA, bodyB){
var Options={
    bodyA:bodyA, 
    bodyB:bodyB,
    stiffness:0.05,
    length:10
    }
    this.chain = Constraint.create(Options);
    World.add(world, this.chain);
}
  display(){
    strokeWeight(3);
    stroke("black");
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
} 
}