class Paper{
 constructor(x,y,r){
     var options={
     restitution:0.3,
     density:1.2,
     isStatic:true,
    friction:0,

     }
     
     this.r=r
     this.x=x
     this.y=y
    this.body=Bodies.circle(this.x,this.y, (this.r-20)/2, options)
    this.image = loadImage("paper.png")
    World.add(world, this.body);
   
 }
 display()
 {
         var rubberpos=this.body.position;		
         push()
         translate(rubberpos.x, rubberpos.y);
         rectMode(CENTER)
         strokeWeight(4);
         stroke("black");
         fill("darkblue");
         
        image(this.image,0,0,this.r,this.r)

         pop()
 }

}