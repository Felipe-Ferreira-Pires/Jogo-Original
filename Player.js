class Player {
 constructor (x,y) {
  this.player = createSprite (x,y,15,15);
  this.player.shapeColor = color (61,46,34);
  this.x=x
  this.y=y
 }

 mostrar () {

  drawSprites ()
  
 }

 andar () {
    /*if (keyDown("w")){
      this.player.y-=7
    }
    if (keyDown("s")){
      this.player.y+=7
    }
    if (keyDown("a")){
      this.player.x-=7
    }
    if (keyDown("d")){
      this.player.x+=7
    }*/
      this.player.x=mouseX
      this.player.y=mouseY
      //console.log (mouseY,mouseX)
 }
}