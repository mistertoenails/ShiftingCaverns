//power and speed on a scale of 1 to 24

function displayItem(scene, power, speed, itemConfig, type){
if(type === 'weapon'){
  
var itemBck = scene.add.image(config.width/2, config.height/2 - 75, 'itemBck').setScale(8)
itemBck.depth = 100
var itemOverlay;
  setTimeout(()=>{
itemOverlay = scene.add.image(config.width/2, config.height/2 - 75, 'sword1').setScale(8)
  
  itemOverlay.depth = 101}, 300)
  var takeSlot1 = scene.add.image(config.width/2 - 390,  config.height/2 +150,     'takeSlot1').setScale(4).setOrigin(0, 0)
takeSlot1.depth  = 100
var takeSlot2 = scene.add.image(config.width/2 - 140,  config.height/2 +150,     'takeSlot2').setScale(4).setOrigin(0, 0)
takeSlot2.depth = 100
var putBack = scene.add.image(config.width/2 + 110,  config.height/2 + 150,     'putBack').setScale(4).setOrigin(0, 0)
putBack.depth = 100
putBack.alpha = 0
takeSlot1.alpha = 0
takeSlot2.alpha = 0  
  itemBck.alpha = 0
  takeSlot1.setInteractive()
takeSlot1.on('pointermove', function(pointer, x, y, event) {
  takeSlot1.setTexture('takeSlot1Highlighted').setScale(4.2)
})
takeSlot1.on('pointerout', function(){
  takeSlot1.setTexture('takeSlot1').setScale(4)
})

takeSlot2.setInteractive()
takeSlot2.on('pointermove', function(pointer, x, y, event) {
  takeSlot2.setTexture('takeSlot2Highlighted').setScale(4.2)
})
takeSlot2.on('pointerout', function(){
  takeSlot2.setTexture('takeSlot2').setScale(4)
})

putBack.setInteractive()
putBack.on('pointermove', function(pointer, x, y, event) {
  putBack.setTexture('putBackHighlighted').setScale(4.2)
})
putBack.on('pointerout', function(){
  putBack.setTexture('putBack').setScale(4)
})
takeSlot1.on('pointerdown', ()=>{
addWeapon('slot_1', itemConfig)  
scene.tweens.add({
  targets: putBack,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot1,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot2,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemBck,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemOverlay,
  alpha: 0,
  duration: 400
})
})
takeSlot2.on('pointerdown', ()=>{
addWeapon('slot_2', itemConfig)  
scene.tweens.add({
  targets: putBack,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot1,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot2,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemBck,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemOverlay,
  alpha: 0,
  duration: 400
})
})
putBack.on('pointerdown', ()=>{
scene.chest.playReverse('openChest')
  scene.interactibles.push(scene.chest)
scene.tweens.add({
  targets: putBack,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot1,
  alpha: 0,
  duration: 400
})
  scene.tweens.add({
  targets: takeSlot2,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemBck,
  alpha: 0,
  duration: 400
})
scene.tweens.add({
  targets: itemOverlay,
  alpha: 0,
  duration: 400
})
})
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

