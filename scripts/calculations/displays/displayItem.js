//power and speed on a scale of 1 to 24

function displayItem(scene, power, speed, itemConfig, type){
if(type === 'weapon'){
var itemBck = scene.add.image(config.width/2, config.height/2 - 75, 'itemBck').setScale(8)
itemBck.depth = 100
var takeSlot1 = scene.add.image(config.width/2 - 460,  config.height/2 +80,     'takeSlot1').setScale(4).setOrigin(0, 0)
takeSlot1.depth  = 100
var takeSlot2 = scene.add.image(config.width/2 - 250,  config.height/2 +80,     'takeSlot2').setScale(4).setOrigin(0, 0)
takeSlot2.depth = 100
var putBack = scene.add.image(config.width/2 - 40,  config.height/2 +80,     'putBack').setScale(4).setOrigin(0, 0)
putBack.depth = 100
putBack.alpha = 0
takeSlot1.alpha = 0
takeSlot2.alpha = 0 
  itemBck.alpha = 0
function alphaUp(){
if(putBack.alpha < 1){
  putBack.alpha += 0.01
takeSlot1.alpha += 0.01
takeSlot2.alpha += 0.01
  itemBck.alpha += 0.01
  setTimeout(alphaUp, 3)
}
}
alphaUp()
}
}

