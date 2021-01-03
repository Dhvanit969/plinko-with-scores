class Divisions {
    constructor(x, y, w, h) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);

        var particleset=null;

        if(particle!=null)
        {
            particle.display();

            if(particle.body.position.y>760)
            {
                if(particle.body.position.x<300)
                {
                    score=score+500;
                    particle=null;
                    if(count>= 5) gameState ="end";
                }
            }
        }
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
};