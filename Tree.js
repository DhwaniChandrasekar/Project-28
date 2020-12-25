class Tree{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            
        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.tree = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
          var pos = this.body.position;
       imageMode(CENTER);
       image(this.tree,pos.x,pos.y,450,600);
    
      }
}