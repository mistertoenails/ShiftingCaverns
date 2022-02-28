 //This is the function that we'll use to get the data for how to generate the objects inside a new room. This could technically jut be in the makeNewRoom function, or even just not in a seperate file, but this is better organized.

//Here we declare the function and request a scene object to work from.
function getRoom(roomObj){
  var firstRoom;
  var returnList = []
  //here, we just check if we're generating the first room by checking the length of the rooms list.
if(rooms.length === 1){
firstRoom = true;
}
else{
firstRoom = false;
}
returnList.push(
()=>{
 
    

      roomObj.doorTop = roomObj.add.rectangle(config.width/2, 10, 150, 20)
 
},
()=>{
      roomObj.doorBottom = roomObj.add.rectangle(config.width/2 , config.height - 10, 150, 20)
},
()=>{
   
      roomObj.doorLeft = roomObj.add.rectangle(10, config.height/2, 20, 150)
}, 
()=>{
 
      roomObj.doorRight = roomObj.add.rectangle(config.width - 10, config.height/2, 20, 150)
   },
   ()=>{
roomObj.physics.add.collider(roomObj.player, roomObj.doorTop, ()=>{
roomObj.north()

   })

roomObj.physics.add.collider(roomObj.player, roomObj.doorBottom, ()=>{
roomObj.south()
})
roomObj.physics.add.collider(roomObj.player, roomObj.doorLeft, ()=>{
roomObj.east()
})
roomObj.physics.add.collider(roomObj.player, roomObj.doorRight, ()=>{
roomObj.west()
})

//GET RANDOM ELEMENTS










   }
)
return(returnList)
}