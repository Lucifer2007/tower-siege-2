class Box2{
    constructor(x,y,width,height){

    var options = {

       isStatic:false,
       restitution:0.4,
       
    }
    this.Visibility = 255;
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   
    
    World.add(world,this.body);
    }

      display(){
         if(this.body.speed<9){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle)
            rectMode(CENTER);
            fill("purple");
            rect(0,0,this.width,this.height);
            pop();

         }else{

        World.remove(world,this.body);
        push();
          this.Visiblity = this.Visiblity-1;
          tint(255,this.Visiblity);
          
          pop();


         }
     
}
}