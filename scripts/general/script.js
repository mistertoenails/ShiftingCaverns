
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
  height: 630,
  scene: [Menu, Inventory],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
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

      if(firstTimeGenerating){
   let coords = getCoords(this.scene.key)
   this.x = coords.x
   this.y = coords.y
    }
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
this.load.image('elementalIcon', 'assets/menus/elementalType.png')
this.load.image('grenadeIcon', 'assets/menus/grenadeType.png')
this.load.image('trapIcon', 'assets/menus/trapType.png')
this.load.image('knifeIcon', 'assets/menus/knifeType.png')
this.load.image('crossbowIcon', 'assets/menus/crossbowType.png')
this.load.image('spearIcon', 'assets/menus/spearType.png')
this.load.image('bowIcon', 'assets/menus/bowType.png')
this.load.image('heavyIcon', 'assets/menus/heavyType.png')
this.load.image('swordIcon', 'assets/menus/swordType.png')
this.load.image('takeSlot2Highlighted', 'assets/menus/slot2Highlighted.png')
this.load.image('takeSlot1Highlighted', 'assets/menus/slot1Highlighted.png')
this.load.image('putBackHighlighted', 'assets/menus/rejectHighlighted.png')
this.load.image('takeSlot1', 'assets/menus/takeSlot1.png')
this.load.image('takeSlot2', 'assets/menus/takeSlot2.png')
this.load.image('take', 'assets/menus/take.png')
this.load.image('putBack', 'assets/menus/putBack.png')
this.load.image('power1', 'assets/menus/power1.png')
this.load.image('power2', 'assets/menus/power2.png')
this.load.image('power3', 'assets/menus/power3.png')
this.load.image('power4', 'assets/menus/power4.png')
this.load.image('power5', 'assets/menus/power5.png')
this.load.image('power6', 'assets/menus/power6.png')
this.load.image('power7', 'assets/menus/power7.png')
this.load.image('power8', 'assets/menus/power8.png')
this.load.image('power9', 'assets/menus/power9.png')
this.load.image('power10', 'assets/menus/power10.png')
this.load.image('power11', 'assets/menus/power11.png')
this.load.image('power12', 'assets/menus/power12.png')
this.load.image('power13', 'assets/menus/power13.png')
this.load.image('power14', 'assets/menus/power14.png')
this.load.image('power15', 'assets/menus/power15.png')
this.load.image('power16', 'assets/menus/power16.png')
this.load.image('power17', 'assets/menus/power17.png')
this.load.image('power18', 'assets/menus/power18.png')
this.load.image('power19', 'assets/menus/power19.png')
this.load.image('power20', 'assets/menus/power20.png')
this.load.image('power21', 'assets/menus/power21.png')
this.load.image('power22', 'assets/menus/power22.png')
this.load.image('power23', 'assets/menus/power23.png')
this.load.image('power24', 'assets/menus/power24.png')
this.load.image('itemBck', 'assets/menus/item.png')
this.load.image('wall1', 'assets/walls_and_floors/wall1.png')
this.load.image('wall2', 'assets/walls_and_floors/wall2.png')
this.load.image('pebble', 'assets/walls_and_floors/pebbletile.png')
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
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
       
		this.scene.launch(this.roomKeyUp)
    this.scene.sleep()
    
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
    this.scene.sleep()
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
    this.scene.sleep()
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
    this.scene.sleep()
	})
    }
    inventory(){
 
                this.cameras.main.fadeOut(500, 0, 0, 0)
      	this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
             this.scene.pause()
         this.scene.launch('inventory')
	})
   
      
    }
    create() { 
      this.interactibles = []
currentKey = this.scene.key
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
   
      this.cameras.main.fadeIn(400, 0, 0, 0)
   

      let y = getStyle(this)
      y()
   
     
      this.player = this.add.rectangle(config.width / 2, config.height / 2, 50, 80, '#000000', 0)
      this.playerSprite = this.add.sprite(this.player.x, this.player.y,'upWalk').setScale(4).setPipeline('Light2D')
      this.playerSprite.depth = 50

     
      this.physics.add.existing(this.player)
      let rect = this.add.image(0, 0, 'wall1').setScale(5).setOrigin(0, 0)
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true 
               rect.setPipeline('Light2D');
    
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 555, 0, 'wall1').setScale(5).setOrigin(0, 0)
      rect.flipX = true
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true   
             rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, config.height - 20, 'wall1').setScale(5).setOrigin(0, 0)
      this.physics.add.existing(rect)
        rect.body.immovable = true      
          rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 555, config.height - 20, 'wall1').setScale(5).setOrigin(0, 0)
      rect.flipX = true
      this.physics.add.existing(rect)
        rect.body.immovable = true    
            rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, 0, 'wall2').setScale(5).setOrigin(0, 0)
      this.physics.add.existing(rect)
        rect.body.immovable = true        
        rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(0, config.height - 240, 'wall2').setScale(5).setOrigin(0, 0)
      rect.flipY = true
      this.physics.add.existing(rect)
        rect.body.immovable = true    
            rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width - 20, 0, 'wall2').setScale(5).setOrigin(0, 0)
      rect.flipX = true
      this.physics.add.existing(rect)
        rect.body.immovable = true     
           rect.setPipeline('Light2D');
      this.physics.add.collider(rect, this.player)
      rect = this.add.image(config.width  - 20, config.height - 240, 'wall2').setScale(5).setOrigin(0)
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
this.add.sprite(500, 30, 'lantern').play('flame').setScale(5) 
this.add.sprite(config.width - 500, 30, 'lantern').play('flame').setScale(5) 

this.add.sprite(500, config.height - 30, 'lantern').play('flame').setScale(5) 
this.add.sprite(config.width - 500, config.height - 30, 'lantern').play('flame').setScale(5)
      
      
      if(firstTimeGenerating){

var light = this.lights.addLight(500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]

light = this.lights.addLight(config.width - 500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
       
var light = this.lights.addLight(500, config.height - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]

light = this.lights.addLight(config.width - 500,config.height - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]

        
}

    
      

        var pause = this.input.keyboard.addKey('C')
          var pause = this.input.keyboard.addKey('C')
pause.on('down', ()=>{

  this.cameras.main.fadeOut(400, 0, 0, 0)
 this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
this.scene.launch('inventory')
this.scene.sleep()
  })



})

    
if(previousRoomY < this.y){
 
  this.player.x = config.width/2
  this.player.y = config.height - 80
}
else if(previousRoomY > this.y){
this.player.x = config.width/2
this.player.y = 80
}
if(previousRoomX > this.x){
 this.player.x = config.width - 50
 this.player.y = config.height/2
}
if(previousRoomX < this.x){
 this.player.x =  50
 this.player.y = config.height/2
}
 


   var interact = this.input.keyboard.addKey('E')
      
        interact.on('down', ()=>{
         getInteractable(this.player.x, this.player.y,this,  this.currentDir)
        })

this.chest = this.add.sprite(config.width/2, config.height/2, 'chest').setScale(6)
this.interactibles.push(this.chest)
this.chestHitbox = this.add.rectangle(config.width/2, config.height/2 - 7, 100, 50)

this.physics.add.existing(this.chestHitbox)
this.chestHitbox.body.immovable = true
this.physics.add.collider(this.chestHitbox, this.player)
this.chestHitbox.depth = 200

this.chest.highlight = ()=>{
  this.chest.setTexture('chestHighlighted')
  
}
this.chest.unHighlight = ()=>{
  this.chest.setTexture('chest')

}
this.chest.interact = ()=>{
this.chest.play('openChest')
setTimeout(()=>{displayItem(this, 10, 10, {name: 'sword'}, 'weapon')}, 500)
}
    

  
    }
    update() {
      if(this.interactibles != null){
highlightInteractable(this.player.x, this.player.y, this, this.currentDir)
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
  
  }
  
  sceneThis.scene.add('x' + x + 'y' + y, Scene)
  return ('x' + x + 'y' + y)

}


