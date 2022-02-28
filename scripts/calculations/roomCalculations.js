// 0 is starting room, 1 is starting area
function getStyle(roomObj){

if(roomObj.x === 0 && roomObj.y === 0){

return(()=>{


 let x = roomObj.add.tileSprite(0, 0, config.width, config.height, 'pebble').setPipeline('Light2D'); 
 x.setScale(3)
}) 
}

else if(roomObj.x >= -5 && roomObj.x < 5 && roomObj.y <= 5 && roomObj.y > -5){
 
return(()=>{
 let x = roomObj.add.tileSprite(0, 0, config.width, config.height, 'pebble').setPipeline('Light2D');
 x.setScale(3)




  //20, 200
  //20, height - 200
  //width - 10, 200
//width - 20, height - 170
//555, height - 20   
//width - 555, height - 20

}) 
}



}