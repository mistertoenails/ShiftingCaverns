function checkClear(index, rooms){
  if(roomArray[index].type === ''){
    return(true)
  }
  return(false)
}
function checkClear(rooms, index){
if(rooms[index - 10] == null ||
   rooms[index - 10].type === ''){
//north is good
if(rooms[index + 1] == null ||
   rooms[index + 1].type === ''){
//east is good
if(rooms[index + 10] == null ||
   rooms[index + 10].type === ''){
//south is good
if(rooms[index - 1] == null ||
   rooms[index - 1].type === ''){
//west is good
return(true)

}}}}
   return(false)
}
function getRoom(x, y, index, rooms){
var dir = Math.floor(Math.random()* 4)
while(dir === 0 && rooms[index].y === 5 || dir === 1 && rooms[index].x === 5 || dir === 2 && rooms[index].y === 5 || dir === 3 && rooms[index].x === -5){
  console.log('this would have resulted in an error')
dir = Math.floor(Math.random()* 4)
}
if(dir === 0){

return(index - 10)
}
if(dir === 1){

return(index + 1)
}
if(dir === 2){

return(index + 10)
}
if(dir === 3){

return(index - 1)
}
}

function generateRooms(area){
  
  var x = -5
  var y = 5
while( y > -5){
  while(x < 5){
   areas[area]['x' + x.toString() + 'y' + y.toString()]  = {}
   x++
  }
  x= -5
  y--

}

}
var areas = {
camp: {


}  
}
function generateArea(treasure, items, bossCount, bosses, enemy, enemies, weaponDrop, weaponDrops, wild, areaCenter ){

generateRooms('camp')
var roomIndexes = {}
var roomArray = [

{  generated: false, x: -5, y: 5,key: '', type: '', template: ''},
{  generated: false, x: -4, y: 5, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 5, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 5, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 5, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 5, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 5, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 5, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 5, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 5, key: '', type: '', template: ''},
{  generated: false, x: -5, y: 4, key: '', type: '', template: ''},
{  generated: false, x: -4, y: 4, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 4, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 4, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 4, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 4, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 4, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 4, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 4, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 4, key: '', type: '', template: ''},
{  generated: false, x: -5, y: 3, key: '', type: '', template: ''},
{  generated: false, x: -4, y: 3, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 3, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 3, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 3, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 3, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 3, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 3, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 3, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 3, key: '', type: '', template: ''},
{  generated: false, x: -5, y: 2, key: '', type: '', template: ''},
{  generated: false, x: -4, y: 2, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 2, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 2, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 2, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 2, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 2, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 2, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 2, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 2, key: '', type: '', template: ''},
{  generated: false, x: -5, y: 1, key: '', type: '', template: ''},
{  generated: false, x: -4, y: 1, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 1, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 1, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 1, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 1, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 1, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 1, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 1, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 1, key: '', type: '', template: ''},
{  generated: false, x: -5, y: 0, key: '', type: '', template: ''},
{  generated: false, x: -4, y: 0, key: '', type: '', template: ''},
{  generated: false, x: -3, y: 0, key: '', type: '', template: ''},
{  generated: false, x: -2, y: 0, key: '', type: '', template: ''},
{  generated: false, x: -1, y: 0, key: '', type: '', template: ''},
{  generated: false, x:  0, y: 0, key: '', type: '', template: ''},
{  generated: false, x:  1, y: 0, key: '', type: '', template: ''},
{  generated: false, x:  2, y: 0, key: '', type: '', template: ''},
{  generated: false, x:  3, y: 0, key: '', type: '', template: ''},
{  generated: false, x:  4, y: 0, key: '', type: '', template: ''},
{  generated: false, x: -5, y: -1, key: '', type: '', template: ''},
{  generated: false, x: -4, y: -1, key: '', type: '', template: ''},
{  generated: false, x: -3, y: -1, key: '', type: '', template: ''},
{  generated: false, x: -2, y: -1, key: '', type: '', template: ''},
{  generated: false, x: -1, y: -1, key: '', type: '', template: ''},
{  generated: false, x:  0, y: -1, key: '', type: '', template: ''},
{  generated: false, x:  1, y: -1, key: '', type: '', template: ''},
{  generated: false, x:  2, y: -1, key: '', type: '', template: ''},
{  generated: false, x:  3, y: -1, key: '', type: '', template: ''},
{  generated: false, x:  4, y: -1, key: '', type: '', template: ''},
{  generated: false, x: -5, y: -2, key: '', type: '', template: ''},
{  generated: false, x: -4, y: -2, key: '', type: '', template: ''},
{  generated: false, x: -3, y: -2, key: '', type: '', template: ''},
{  generated: false, x: -2, y: -2, key: '', type: '', template: ''},
{  generated: false, x: -1, y: -2, key: '', type: '', template: ''},
{  generated: false, x:  0, y: -2, key: '', type: '', template: ''},
{  generated: false, x:  1, y: -2, key: '', type: '', template: ''},
{  generated: false, x:  2, y: -2, key: '', type: '', template: ''},
{  generated: false, x:  3, y: -2, key: '', type: '', template: ''},
{  generated: false, x:  4, y: -2, key: '', type: '', template: ''},
{  generated: false, x: -5, y: -3, key: '', type: '', template: ''},
{  generated: false, x: -4, y: -3, key: '', type: '', template: ''},
{  generated: false, x: -3, y: -3, key: '', type: '', template: ''},
{  generated: false, x: -2, y: -3, key: '', type: '', template: ''},
{  generated: false, x: -1, y: -3, key: '', type: '', template: ''},
{  generated: false, x:  0, y: -3, key: '', type: '', template: ''},
{  generated: false, x:  1, y: -3, key: '', type: '', template: ''},
{  generated: false, x:  2, y: -3, key: '', type: '', template: ''},
{  generated: false, x:  3, y: -3, key: '', type: '', template: ''},
{  generated: false, x:  4, y: -3, key: '', type: '', template: ''},
{  generated: false, x: -5, y: -4, key: '', type: '', template: ''},
{  generated: false, x: -4, y: -4, key: '', type: '', template: ''},
{  generated: false, x: -3, y: -4, key: '', type: '', template: ''},
{  generated: false, x: -2, y: -4, key: '', type: '', template: ''},
{  generated: false, x: -1, y: -4, key: '', type: '', template: ''},
{  generated: false, x:  0, y: -4, key: '', type: '', template: ''},
{  generated: false, x:  1, y: -4, key: '', type: '', template: ''},
{  generated: false, x:  2, y: -4, key: '', type: '', template: ''},
{  generated: false, x:  3, y: -4, key: '', type: '', template: ''},
{  generated: false, x:  4, y: -4, key: '', type: '', template: ''},]

 //treasure: an object with the minimum and maximum number of rooms with chests.'
 //items: an object containing the items that can be found in these chests 
 //boss: the minimum and maximum number of boss rooms that can be in the area. The boss rooms will always have their own treasure room, not included in the treasure room count, and the loot tables will also be seperate, defined in the bosses' config.
 //bosses: the bosses possible for the boss rooms
 //enemy: the number of battle rooms that can generate
 //enemies: the enemies that generate in battle rooms
 //weaponDrop: a special type of battle room where an extra strong enemy drops a weapon.
 //weaponDrops: the enemies that can generate in these rooms.
 //wild: a wild card room, is empty, has a few weak enemies, or  maybe a healing item. Contains the probabilities for types of wild card rooms. Wild card rooms generate in the blank spaces left after other types of rooms generate.
//First, the bosses are generated.
for(index in roomArray){
roomArray[index].realX=roomArray[index].x+areaCenter.x
roomArray[index].realY=roomArray[index].y+areaCenter.y
roomArray[index].key='x'+roomArray[index].x+'y'+roomArray[index].y
}
var bossNumber = Math.floor(Math.random() * (bossCount.max - bossCount.min + 1) + bossCount.min)

var bossArray = []
for(var bossN = 0; bossN <= bossNumber; bossN++){

var boss = bosses[Math.floor(Math.random() * bosses.length)]; 
var room = Math.floor(Math.random() * 100)


while(roomArray[room].generated === true || !checkClear(room, roomArray) ){
  console.log('rerolling')
room = Math.floor(Math.random() * 100)
}


roomArray[room].generated = true

bossArray.push({boss: boss, index: room, x: roomArray[room].x, y: roomArray[room].y})
roomArray[room].type = 'boss'

room = getRoom(roomArray[room].x, roomArray[room].y, room, roomArray)


  roomArray[room].type = 'treasure'

}
var enemyRoomCount = Math.floor(Math.random() * (enemy.max - enemy.min + 1) + enemy.min)
for(var enemyRoom = 0; enemyRoom <= enemyRoomCount; enemyRoom++){
var battleRoom = enemies[Math.floor(Math.random() * enemies.length)]; 
var room = Math.floor(Math.random() * 100)
while(roomArray[room].generated === true){
  room = Math.floor(Math.random() * 100)
}
roomArray[room].type = 'battle'
roomArray[room].template = battleRoom

}

var dropRoomCount = Math.floor(Math.random() * (weaponDrop.max - weaponDrop.min + 1) + weaponDrop.min)

for(var dropRoom = 0; dropRoom <= dropRoomCount; dropRoom++){
var dropRoomTemplate = weaponDrops[Math.floor(Math.random() * weaponDrops.length)]; 
var room = Math.floor(Math.random() * 100)
while(roomArray[room].generated === true){
  room = Math.floor(Math.random() * 100)
}
roomArray[room].type = 'drop'
roomArray[room].template = dropRoomTemplate

}
 var lootRoomCount = Math.floor(Math.random() * (treasure.max - treasure.min + 1) + treasure.min)

for(var lootRoom = 0; lootRoom <= lootRoomCount; lootRoom++){
var lootRoomTemplate = items[Math.floor(Math.random() * items.length)]; 
var room = Math.floor(Math.random() * 100)
while(roomArray[room].generated === true){
  room = Math.floor(Math.random() * 100)
}
roomArray[room].type = 'loot'
roomArray[room].template = lootRoomTemplate

}

for(room in roomArray){
  if(roomArray[room].type === ''){
    roomArray[room].type = 'wild'
    var template = Math.floor(Math.random() * wild.length)
    roomArray[room].template = template
  }
}
  
return(roomArray)

}



