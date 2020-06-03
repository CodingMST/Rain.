var ball_options ={
            restitution: 1.0
        }

     this.body = Bodies.rectangle(random(0,400),0,100,20,random(10,40), ball_options);
   this.width=20;
   this.height=random(10,40);
 World.add(world,this.body);

this.image=loadImage("sprites/rain.jpg");

display()
{
       var pos=this.body.position;
       fill("white");
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
    }