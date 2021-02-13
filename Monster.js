class Monster {
    constructor(x,y,r){
var options={
    density:1,
    frictionAir:0.005,
}
this.body = Bodies.circle(x,y,r,options)
this.image = loadImage("Monster.png")
this.r = r
World.add(world,this.body)
    }

    display(){
console.log(this.body.position.x)
console.log(this.body.position.y)
var pos = this.body.position
push();
translate(pos.x,pos.y)
image(this.image,0,0,this.r,this.r)
pop();
    }

  
    score(){
        if(this.body.position.y>700 && this.body.position.y<5000){
    score++
    this.body.y
        }
    }


}