
const prop_list = {
 camp: ["rock-1"] 
}
function getProps(area){
  if(area === 'camp'){
    let index = 0
    console.log(prop_list.camp[index])
    return(prop_list.camp[index])
    
  } 
}
function getStyle(roomObj){

if(roomObj.x === 0 && roomObj.y === 0){

return(()=>{


 let x = roomObj.add.tileSprite(0, 0, config.width, 630, 'pebble').setPipeline('Light2D').setDepth(1)
 x.setScale(3)


}) 
}

else if(roomObj.x >= -5 && roomObj.x < 5 && roomObj.y <= 5 && roomObj.y > -5){
 
return(()=>{
var propCount = Math.floor(Math.random() * 2) + 1;



  
 let x = roomObj.add.tileSprite(0, 0, config.width, 630, 'pebble').setPipeline('Light2D');
 roomObj.light1 = roomObj.add.sprite(500, 30, 'lantern').setScale(5).setScale(5).setDepth(3)
roomObj.light2 = roomObj.add.sprite(config.width - 500, 30, 'lantern').setScale(5).setScale(5).setDepth(3) 
roomObj.light3 = roomObj.add.sprite(500, 630 - 30, 'lantern').setScale(5).setScale(5).setDepth(3) 
    roomObj.light3.flipY = true
roomObj.light4 = roomObj.add.sprite(config.width - 500, 630 - 30, 'lantern').setScale(5).setScale(5).setDepth(3)
    roomObj.light4.flipY = true
roomObj.light5 = roomObj.add.sprite(20, 200, 'lantern').setScale(5).setScale(5).setDepth(3) 
roomObj.light6 = roomObj.add.sprite(config.width - 20, 200, 'lantern').setScale(5).setScale(5).setDepth(3) 
      
roomObj.light7 = roomObj.add.sprite(20, 630 - 200, 'lantern').setScale(5).setScale(5).setDepth(3)

roomObj.light8 = roomObj.add.sprite(config.width - 20, 630 - 200, 'lantern').setScale(5).setScale(5).setDepth(3)  

roomObj.light1.anims.pause()
roomObj.light2.anims.pause()
roomObj.light3.anims.pause()
roomObj.light4.anims.pause()
roomObj.light5.anims.pause()
roomObj.light6.anims.pause()
roomObj.light7.anims.pause()
roomObj.light8.anims.pause()
roomObj.light1.play('flame')
roomObj.light2.play('flame')
roomObj.light3.play('flame')
roomObj.light4.play('flame')
roomObj.light5.play('flame')
roomObj.light6.play('flame')
roomObj.light7.play('flame')
roomObj.light8.play('flame')


var light = roomObj.lights.addLight(500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = roomObj.lights.addLight(config.width - 500, 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]    
var light = roomObj.lights.addLight(500, 630 - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = roomObj.lights.addLight(config.width - 500,630 - 30,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = roomObj.lights.addLight(20, 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = roomObj.lights.addLight(config.width - 20, 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]     
var light = roomObj.lights.addLight(20, 630 - 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]
light = roomObj.lights.addLight(config.width - 20, - 200,  100, 5100);
light.radius = 500
light.color._rgb = [2, 1.3, 0]        
  x.setScale(3)
for(var prop = 0; prop < propCount; prop++){






}  
//20, 200
//20, height - 200
//width - 10, 200
//width - 20, height - 170
//555, height - 20   
//width - 555, height - 20
}) 

}


}