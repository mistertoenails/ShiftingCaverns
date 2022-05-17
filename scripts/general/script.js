var oneTimeInteractibles = {
  
}
generateWorld()
//area config = {
//origin: {
//   x: top left x,
//   y: top left Y
//   }  
//name: 'name of area',
//generationValues: {
//      treasure: desired treasure value,
//      danger: desired danger value
//      enemies: [a list of the enemies that can spawn in this area],
//      bosses: [a list of the bosses that can spawn in this area],
//      items: [a list of the items that can spawn in this area]
//     }
//}
var currentKey = ''
var firstTimeGenerating = true
var previousRoomX = 0
var previousRoomY = 0
var rooms = []
var roomPermanents = {}
var config = {
  width: 1260,
  height:  700,
  scene: [Menu, Inventory],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  pixelArt: true
}
var game = new Phaser.Game(config)
function addNewRoom(x, y, sceneThis) {
rooms.push('x' + x + 'y' + y)
  class Scene extends Phaser.Scene {
    constructor() {
      super('x' + x + 'y' + y)
    }
    preload() {
this.propList = []
      if(firstTimeGenerating){
   let coords = getCoords(this.scene.key)
   this.x = coords.x
   this.y = coords.y
    }
      this.load.image('slot1', 'assets/menus/weapon_slot_1.png')
          this.load.image('slot12', 'assets/menus/weapon_slot_2.png')
      this.load.spritesheet('healthBar', 'assets/menus/healthBar.png', {
        frameWidth: 64, 
        frameHeight: 64
      })
      this.load.image('hud', 'assets/menus/hud.png')
    this.load.spritesheet('chestHighlighted', 'assets/interactibles/chest.highlighted.png', {frameWidth: 64, frameHeight: 64})
    this.load.spritesheet('chest', 'assets/interactibles/chest.beginning.open.png', {frameWidth: 64, frameHeight: 64})
this.load.spritesheet('downWalk', 'assets/sam/sam_down.png', {
  frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('upWalk', 'assets/sam/sam_up.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('leftWalk', 'assets/sam/sam_left.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('rightWalk', 'assets/sam/sam_right.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('down-leftWalk', 'assets/sam/sam_downleft.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('up-leftWalk', 'assets/sam/sam_upleft.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('up-rightWalk', 'assets/sam/sam_upright.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('down-rightWalk', 'assets/sam/sam_downright.png', {
    frameWidth:64,
  framwHeight: 64
})
this.load.spritesheet('lantern', 'assets/props/lantern.png', {
  frameWidth: 64, 
  frameHeight: 64
})
this.load.spritesheet('lantern2', 'assets/props/lantern2.png', {
  frameWidth: 64, 
  frameHeight: 64
})
this.load.spritesheet('chestOpened', 'assets/interactibles/chest.beginning.open.png', {
  frameWidth: 64, 
  frameHeight: 64
})
this.load.image('sword1', 'assets/menus/sword1.png')
this.load.image('rock-1', 'assets/props/boulder_camp_1.png')
this.load.image('takeSlot2Highlighted', 'assets/menus/slot2Highlighted.png')
this.load.image('takeSlot1Highlighted', 'assets/menus/slot1Highlighted.png')
this.load.image('putBackHighlighted', 'assets/menus/rejectHighlighted.png')
this.load.image('takeSlot1', 'assets/menus/takeSlot1.png')
this.load.image('takeSlot2', 'assets/menus/takeSlot2.png')
this.load.image('take', 'assets/menus/take.png')
this.load.image('putBack', 'assets/menus/putBack.png')
this.load.image('itemBck', 'assets/menus/item.png')
this.load.image('wall1', 'assets/walls_and_floors/wall1.png')
this.load.image('wall2', 'assets/walls_and_floors/wall2.png')
this.load.image('pebble', 'assets/walls_and_floors/pebbletile.png')
this.load.image('scroll_edge', 'assets/menus/one_side_paper.png')
this.load.image('scroll_corner', 'assets/menus/2_sides_paper.png')
this.load.image('specialIcon', 'assets/menus/specialType.png')
this.startingNewScene = null
      var south = this.y - 1
      var north = this.y + 1
      var left = this.x - 1
      var right = this.x + 1
      this.roomKeyDown = 'x' + this.x.toString() + 'y' + south.toString()
      this.roomKeyUp = 'x' + this.x.toString() + 'y' + north.toString()
      this.roomKeyLeft = 'x' + left.toString() + 'y' + this.y.toString()
      this.roomKeyRight = 'x' + right.toString() + 'y' + this.y.toString()
    }
    north() {
     previousRoomY = this.y
     previousRoomX = this.x
      this.playerSprite.destroy()
      this.player.destroy()
      this.startingNewScene = true
            if (rooms.includes(this.roomKeyUp)) {
     firstTimeGenerating = false
      }
      else {
        firstTimeGenerating = true
        let x = rooms.length
        this.startingNewScene = true
        this.player.destroy()
        let numY = parseInt(this.y)
        addNewRoom(this.x, numY + 1, this)
      }
           this.cameras.main.fadeOut(200, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) =>  {
		this.scene.launch(this.roomKeyUp)
    this.scene.stop()
	})
}  
    south(){
      previousRoomY = this.y
      previousRoomX = this.x
      this.playerSprite.destroy()
      this.player.destroy()
      this.startingNewScene = true
            if (rooms.includes(this.roomKeyDown)) {
     firstTimeGenerating = false
      }
      else {
        firstTimeGenerating = true
        let x = rooms.length
        this.startingNewScene = true
        this.player.destroy()
        let numY = parseInt(this.y)
        addNewRoom(this.x, numY - 1, this)
      }
           this.cameras.main.fadeOut(200, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {    
		this.scene.launch(this.roomKeyDown)
    this.scene.stop()
	})
    }
    east(){
     previousRoomX = this.x
     previousRoomY = this.y
           this.playerSprite.destroy()
      this.player.destroy()
      this.startingNewScene = true
            if (rooms.includes(this.roomKeyLeft)) {
     firstTimeGenerating = false
      }
      else {
        firstTimeGenerating = true
        let x = rooms.length
        this.startingNewScene = true
        this.player.destroy()
        let numX = parseInt(this.x)
        addNewRoom(numX - 1, this.y, this)
      }
           this.cameras.main.fadeOut(200, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
		this.scene.launch(this.roomKeyLeft)
    this.scene.stop()
	})
    }
    west(){
         previousRoomX = this.x
         previousRoomY = this.y
               this.playerSprite.destroy()
      this.player.destroy()
      this.startingNewScene = true
            if (rooms.includes(this.roomKeyRight)) {
     firstTimeGenerating = false
      }
      else {
        firstTimeGenerating = true
        let x = rooms.length
        this.startingNewScene = true
        this.player.destroy()
        let numX = parseInt(this.x)
        addNewRoom(numX + 1, this.y, this)
      }
           this.cameras.main.fadeOut(200, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
		this.scene.launch(this.roomKeyRight)
    this.scene.stop()
	})
    }
    inventory(){
                this.cameras.main.fadeOut(500, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
             this.scene.pause()
         this.scene.launch('inventory')
	})
    }
  create(){
    this.immovables = []
    //immovables are hitbox rectangles for things like props and chests
    
    this.anims.create({
  key: 'openChest',
  frames: this.anims.generateFrameNumbers('chestHighlighted', {start: 0,end: 12 }),
  frameRate: 15,
  repeat: 0,
  hideOnComplete: false
})
      this.anims.create({
        key: 'flame',
        frames: this.anims.generateFrameNumbers('lantern'),
        frameRate: 12,
        repeat: -1
      })
           this.anims.create({
        key: 'flame2',
        frames: this.anims.generateFrameNumbers('lantern2'),
        frameRate: 12,
        repeat: -1
      })
          this.anims.create({
      key: 'u',
      frames: this.anims.generateFrameNumbers('upWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'd',
      frames: this.anims.generateFrameNumbers('downWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'l',
      frames: this.anims.generateFrameNumbers('leftWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'r',
      frames: this.anims.generateFrameNumbers('rightWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'ul',
      frames: this.anims.generateFrameNumbers('up-leftWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'ur',
      frames: this.anims.generateFrameNumbers('up-rightWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'dl',
      frames: this.anims.generateFrameNumbers('down-leftWalk'),
      frameRate: 7,
      repeat: -1
    })
      this.anims.create({
      key: 'dr',
      frames: this.anims.generateFrameNumbers('down-rightWalk'),
      frameRate: 7,
      repeat: -1
    })
    if(this.x === 0 && this.y === 0){
      this.light1 = this.add.sprite(500, 30, 'lantern').setScale(5).setDepth(3) 
this.light2 = this.add.sprite(config.width - 500, 30, 'lantern').setScale(5).setDepth(3) 
this.light3 = this.add.sprite(500, 630 - 30, 'lantern').setScale(5).setDepth(3) 
    this.light3.flipY = true
this.light4 = this.add.sprite(config.width - 500, 630 - 30, 'lantern').setScale(5).setDepth(3)
    this.light4.flipY = true
this.light5 = this.add.sprite(20, 200, 'lantern').setScale(5).setDepth(3) 
this.light6 = this.add.sprite(config.width - 20, 200, 'lantern').setScale(5).setDepth(3)      
this.light7 = this.add.sprite(20, 630 - 200, 'lantern').setScale(5).setDepth(3)
this.light8 = this.add.sprite(config.width - 20, 630 - 200, 'lantern').setScale(5).setDepth(3) 
this.light1.play('flame')
this.light2.play('flame')
this.light3.play('flame')
this.light4.play('flame')
this.light5.play('flame')
this.light6.play('flame')
this.light7.play('flame')
this.light8.play('flame')
var light = this.lights.addLight(500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = this.lights.addLight(config.width - 500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]    
var light = this.lights.addLight(500, 630 - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = this.lights.addLight(config.width - 500,630 - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = this.lights.addLight(20, 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = this.lights.addLight(config.width - 20, 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]     
var light = this.lights.addLight(20, 630 - 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = this.lights.addLight(config.width - 20,630 - 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]        
    }
      this.interactibles = []
currentKey = this.scene.key
      this.cameras.main.fadeIn(400, 0, 0, 0)
      let y = getStyle(this)
      y()
      this.player = this.add.rectangle(config.width / 2, 630 / 2, 50, 80, '#000000', 0)
      this.playerSprite = this.add.sprite(this.player.x, this.player.y,'upWalk').setScale(4).setPipeline('Light2D')
      this.playerSprite.depth = 50
      this.physics.add.existing(this.player)
      let rect = this.add.image(0, 0, 'wall1').setScale(5).setOrigin(0, 0).setDepth(2)
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true 
               rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 555, 0, 'wall1').setScale(5).setOrigin(0, 0).setDepth(2)
      rect.flipX = true
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true   
             rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, 630 - 20, 'wall1').setScale(5).setOrigin(0, 0).setDepth(2)
      this.physics.add.existing(rect)
        rect.body.immovable = true      
          rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 555, 630 - 20, 'wall1').setScale(5).setOrigin(0, 0).setDepth(2)
      rect.flipX = true
      this.physics.add.existing(rect)
        rect.body.immovable = true    
            rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, 0, 'wall2').setScale(5).setOrigin(0, 0).setDepth(2)
      this.physics.add.existing(rect)
        rect.body.immovable = true        
        rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, 630 - 240, 'wall2').setScale(5).setOrigin(0, 0).setDepth(2)
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true    
            rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 20, 0, 'wall2').setScale(5).setOrigin(0, 0).setDepth(2)
      rect.flipX = true
      this.physics.add.existing(rect)
        rect.body.immovable = true     
           rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width  - 20, 630 - 240, 'wall2').setScale(5).setOrigin(0).setDepth(2)
      rect.flipX = true
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true    
            rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      this.debugText = this.add.text(100, 25, 'x:' + this.x + ' Y: ' + this.y, { color: '#ffffff', backgroundColor: '#000000' })
  this.lights.enable()
      this.additions = getRoom(this)
      for (x in this.additions) {
        this.additions[x]()
      }
      this.physics.add.existing(this.doorTop)
      this.physics.add.existing(this.doorLeft)
      this.physics.add.existing(this.doorBottom)
    this.physics.add.existing(this.doorRight)
var pause = this.input.keyboard.addKey('C')
var pause = this.input.keyboard.addKey('C')
pause.on('down', ()=>{
this.cameras.main.fadeOut(400, 0, 0, 0)
this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
this.scene.launch('inventory')
this.scene.stop()
})})
if(previousRoomY < this.y){
this.player.x = config.width/2
this.player.y = 630 - 80}
else if(previousRoomY > this.y){
this.player.x = config.width/2
this.player.y = 80}
if(previousRoomX > this.x){
this.player.x = config.width - 50
this.player.y = 630/2}
if(previousRoomX < this.x){
 this.player.x =  50
 this.player.y = 630/2
}
var interact = this.input.keyboard.addKey('E')
interact.on('down', ()=>{
getInteractable(this.player.x, this.player.y,this,  this.currentDir)
      })
    this.chest = new Chest(this, config.width/2, 630/2 - 7, {
     regular: "chest",
     highlighted: "chestHighlighted",
     open: "openChest"
    },
    {
    stat1: 10,
    stat2: 10,
    item_var: sword1,
    type: "weapon"

      
    })
    this.chest.setDepth(6).setScale(6)
    this.chest.setTexture('chest')
/* this.chest = this.add.sprite(config.width/2, 630/2, 'chest').setScale(6).setDepth(3)
    console.log(this.key)
oneTimeInteractibles[this.key] = []
    oneTimeInteractibles[this.key].push({name})
this.interactibles.push(this.chest)
this.chestHitbox = this.add.rectangle(config.width/2, 630/2 - 7, 100, 50)
this.physics.add.existing(this.chestHitbox)
this.chestHitbox.body.immovable = true
this.physics.add.collider(this.chestHitbox, this.player)

this.chest.highlight = ()=>{
  this.chest.setTexture('chestHighlighted') 
}
this.chest.unHighlight = ()=>{
  this.chest.setTexture('chest')
}
this.chest.interact = ()=>{
this.chest.play('openChest')
setTimeout(()=>{displayItem(this, 10, 10, sword1, 'weapon')}, 500)
}  */
  this.inMenu = false 
for(index in this.propList){
  this.physics.add.collider(this.propList[index], this.player)
  this.propList[index].body.immovable = true
}

    this.hudBackground = roomObj.add.tileSprite(0, 0, config.width, 630, '').setPipeline('Light2D');
//   this.hudBackground = this.add.image(0, 630, 'hud').setOrigin(0, 0).setScale(2).setDepth(2)
this.healthBar = this.add.sprite(380, config.height + 50,'healthBar').setScale(5).setDepth(5)
this.weapon1 = this.add.image(40, config.height - 35, 'slot1').setDepth(5).setScale(2)
this.weapon2 = this.add.image(80, config.height - 35, 'slot2').setScale(2).setDepth(5) 
    }
    update() {
//console.log(this.player.x + ', ' + this.player.y)  
      if(this.interactibles != null){
highlightInteractable(this.player.x, this.player.y, this, this.currentDir)
      }
this.moveTick  = ()=>{
        if (this.startingNewScene == null) {
        var up = this.input.keyboard.addKey('W');
        var left = this.input.keyboard.addKey('A')
        var right = this.input.keyboard.addKey('D')
        var down = this.input.keyboard.addKey('S')
        if (up.isDown) {
          this.player.body.velocity.y = -380
        }
        else if (down.isDown) {
          this.player.body.velocity.y = 380
        }
        else {
          this.player.body.velocity.y = 0
        }
        if (left.isDown) {
          this.player.body.velocity.x = -380
        }
        else if (right.isDown) {
          this.player.body.velocity.x = 380
        }
        else {
          this.player.body.velocity.x = 0
        }
      }
}
      if(!this.inMenu){
        this.moveTick()
      }
this.playerSprite.x = this.player.x
this.playerSprite.y = this.player.y
try{
if(this.player.body.velocity.x > 0 && this.player.body.velocity.y === 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x > 0 && this.player.body.velocity.y === 0 && this.playerSprite.texture.key !== 'rightWalk'){
  this.playerSprite.anims.pause()
 this.playerSprite.setTexture('rightWalk')
 this.playerSprite.play('r')
 this.currentDir = 'r'
}
else if(this.player.body.velocity.x < 0 && this.player.body.velocity.y === 0 && !this.playerSprite.anims.isPlaying  || this.player.body.velocity.x < 0 && this.player.body.velocity.y === 0 && this.playerSprite.texture.key !== 'leftWalk'){
   this.playerSprite.setTexture('leftWalk')
 this.playerSprite.play('l')
 this.currentDir = 'l'
}
else if(this.player.body.velocity.y > 0 && this.player.body.velocity.x === 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x === 0 && this.player.body.velocity.y > 0 && this.playerSprite.texture.key !== 'downWalk'){
   this.playerSprite.setTexture('downWalk')
 this.playerSprite.play('d')
 this.currentDir = 'd'
}
else if(this.player.body.velocity.y < 0 && this.player.body.velocity.x === 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x === 0 && this.player.body.velocity.y < 0 && this.playerSprite.texture.key !== 'upWalk'){
   this.playerSprite.setTexture('upWalk')
 this.playerSprite.play('u')
 this.currentDir = 'u'
}
else if(this.player.body.velocity.y > 0 && this.player.body.velocity.x > 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x > 0 && this.player.body.velocity.y > 0 && this.playerSprite.texture.key !== 'down-rightWalk'){
   this.playerSprite.setTexture('down-rightWalk')
 this.playerSprite.play('dr')
 this.currentDir = 'dr'
}
else if(this.player.body.velocity.y > 0 && this.player.body.velocity.x < 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x < 0 && this.player.body.velocity.y > 0 && this.playerSprite.texture.key !== 'down-leftWalk'){
   this.playerSprite.setTexture('down-leftWalk')
 this.playerSprite.play('dl')
 this.currentDir = 'dl'
}
else if(this.player.body.velocity.y < 0 && this.player.body.velocity.x > 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x > 0 && this.player.body.velocity.y < 0 && this.playerSprite.texture.key !== 'up-rightWalk'){
   this.playerSprite.setTexture('up-rightWalk')
 this.playerSprite.play('ur')
 this.currentDir = 'ur'
}
else if(this.player.body.velocity.y < 0 && this.player.body.velocity.x < 0 && !this.playerSprite.anims.isPlaying || this.player.body.velocity.x < 0 && this.player.body.velocity.y < 0 && this.playerSprite.texture.key !== 'up-leftWalk'){
   this.playerSprite.setTexture('up-leftnWalk')
 this.playerSprite.play('ul')
 this.currentDir = 'ul'
}
else if(this.player.body.velocity.y === 0 && this.player.body.velocity.x === 0){
this.playerSprite.anims.pause()
}
}
catch{}
    }  
  } 
  sceneThis.scene.add('x' + x + 'y' + y, Scene)
  return ('x' + x + 'y' + y)
}