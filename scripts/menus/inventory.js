class Inventory extends Phaser.Scene{
  constructor(){
    super('inventory')
  }
  preload(){
    this.load.spritesheet('sam', 'assets/sam/sam-down.png',{
      frameWidth: 64,
      frameHeight: 64
    })
    this.load.image('slot', 'assets/menus/slot.png')
    this.load.image('bck','assets/menus/menu_bck.png')
    this.load.image('inventory', 'assets/menus/inventory.png')
    this.load.image('back_unclicked', 'assets/menus/back_unclicked.png')
    this.load.image('back_clicked', 'assets/menus/back_clicked.png')
  }
  create(){
this.add.sprite(0, 0, 'bck').setScale(10).setOrigin(0, 0)
this.cameras.main.fadeIn(400, 0, 0, 0)
this.add.sprite(config.width/2 + 50, 125, 'inventory').setScale(2.5)
this.btn = this.add.sprite(120, config.height - 30, 'back_unclicked')
this.btn.setInteractive()
  
this.btn.on('pointerdown', ()=>{
  this.cameras.main.fadeOut(400, 0, 0, 0)
 this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
  this.scene.wake(currentKey)
  
  this.scene.sleep()
  })

})
          var pause = this.input.keyboard.addKey('C')
pause.on('down', ()=>{
 
  this.cameras.main.fadeOut(400, 0, 0, 0)
 this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
  this.scene.wake(currentKey)
  
  this.scene.sleep()
  })



})
  }
}