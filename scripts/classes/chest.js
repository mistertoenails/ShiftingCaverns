class Chest extends Phaser.GameObjects.Sprite{
/*
scene: the scene config file
x: the X coordinate on the screen for the chest
y: the Y coordinate on the screen for the chest

  skin {
    regular: the normal skin, as a texture string
    highlight: the highlighted skin, as a texture string
    open: the animation to open the chest, as an animation key
  }
  
  item: {

  stat1: the first stat value for the item, an integer
  stat2: the second stat value for the item, an integer
  item_var:  a variable, pointing to an item declared in  Files/data/item_configs.js
  type:  a string, weapon, consumable, or scroll

  }

*/
  constructor(scene, x, y, skin, item){
    console.log('invoked chest class')
  super(scene, x, y, "chest", 1)
    console.log("Called super, parameters:")
  console.log("X:  " + x)
  console.log("Y:  " + y)
  console.log('SCENE_KEY:  ' + scene.key)
 console.log(this.anims)
scene.add.existing(this)

let chestHitbox = scene.add.rectangle(config.width/2, 630/2 - 7, 100, 50)
scene.physics.add.existing(chestHitbox)
chestHitbox.body.immovable = true
scene.physics.add.collider(chestHitbox, scene.player)
scene.immovables.push(chestHitbox)
    this.setDepth(100)
  scene.interactibles.push(this)
this.highlight = ()=>{
  this.setTexture(skin.highlighted)
}
this.unHighlight = ()=>{
 this.setTexture(skin.regular) 
}
this.interact = ()=>{
  this.play(skin.open)
  setTimeout(()=>{
    displayItem(scene, item.stat1, item.stat2, item.item_var, item.type)
  }, 500)
}
}
}
