class Inimigo {
    constructor (x,y, velY, velX) {
        this.inimigo=createSprite (x,y,30,30)
        this.inimigo.shapeColor=color ("red")
        this.inimigo.velocity.y=velY
        this.inimigo.velocity.x=velX
    }
    mostrar () {
        drawSprites ();
 }
}