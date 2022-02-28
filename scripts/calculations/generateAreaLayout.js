
var ix1y5 = 0
var ix2y5 = 1
var ix3y5 = 2
var ix4y5 = 3
var ix5y5 = 4
var ix1y4 = 5
var ix2y4 = 6
var ix3y4 = 7
var ix4y4 = 8
var ix5y4 = 9
var ix1y3 = 10
var ix2y3 = 11
var ix3y3 = 12
var ix4y3 = 13
var ix5y3 = 14
var ix1y2 = 15
var ix2y2 = 16
var ix3y2 = 17
var ix4y2 = 18
var ix5y2 = 19
var ix1y1 = 20
var ix2y1 = 21
var ix3y1 = 22
var ix4y1 = 23
var ix5y1 = 24

var x1y5 = {origin:{   x: -25,   y: 25} ,generated: false, rooms: [] }
var x2y5 = {origin:{   x: -15,   y: 25} ,generated: false, rooms: [] }
var x3y5 = {origin:{   x: -5,   y: 25} ,generated: false, rooms: [] }
var x4y5 = {origin:{   x: 5,   y: 25}, generated: false, rooms: []}
var x5y5 = {origin:{   x: 15,   y: 25},generated: false, rooms: [] } 
var x1y4 = {origin:{   x: -25,   y: 15},generated: false, rooms: []  }
var x2y4 = {origin:{   x: -15,   y: 15} ,generated: false, rooms: [] }
var x3y4 = {origin:{   x: -5,   y: 15},generated: false, rooms: [] } 
var x4y4 = {origin:{   x: 5,   y: 15},generated: false, rooms: []  }
var x5y4 = {origin:{   x: 15,   y: 15},generated: false, rooms: []  }
var x1y3 = {origin:{   x: -25,   y: 5} ,generated: false, rooms: [] }
var x2y3 = {origin:{   x: -15,   y: 5},generated: false, rooms: [] } 
var x3y3 = {origin:{   x: -5,   y: 5} ,generated: false, rooms: [] }
var x4y3 = {origin:{   x: 5,   y: 5} ,generated: false, rooms: [] }
var x5y3 = {origin:{   x: 15,   y: 5 } ,generated: false, rooms: [] }
var x1y2 = {origin:{   x: -25,   y: -5 },generated: false, rooms: [] } 
var x2y2 = {origin:{   x: -15,   y: -5 },generated: false, rooms: [] } 
var x3y2 = {origin:{   x: -5,   y: -5 } ,generated: false, rooms: [] }
var x4y2 = {origin:{   x: 5,   y: -5 } ,generated: false, rooms: [] }
var x5y2 = {origin:{   x: 15,   y: -5 },generated: false, rooms: [] } 
var x1y1 = {origin:{   x: -25,   y: -15 },generated: false, rooms: [] } 
var x2y1 = {origin:{   x: -15,   y: -15 } ,generated: false, rooms: [] }
var x3y1 = {origin:{   x: -5,   y: -15} ,generated: false, rooms: [] }
var x4y1 = {origin:{   x: 5,   y: -15 },generated: false, rooms: [] } 
var x5y1 = {origin:{   x: 15,   y: -15 } ,generated: false, rooms: [] }

//STEP 1:
//generate these:
//0 = start, x = to generate, . = ignore for now

// . . . . .
// . X X X .
// . X 0 X .
// . X X X .
// . . . . .

//STEP 2:
//generate these

// X X X X X
// X . . . X
// X . 0 . X
// X . . . X
// X X X X X

function getNextTo(x, y, excludeNorth = false, excludeEast = false, excludeSouth = false, excludeWest = false){
  var dir = Math.floor(Math.random() * 4)
if(dir === 0){
return({x: x, y: y-5, dir: dir})  
}
if(dir === 1){
return({x: x+5, y: y, dir: dir})  
}
if(dir === 2){
return({x: x, y: y-5, dir: dir})  
}
if(dir === 3){
  return({x: x - 5, y: y, dir: dir})
}

//         NORTH
//          |0|
//          |||
//     -----|||-----
//WEST 3-----X-----1 EAST
//     -----|||-----
//          |||
//          |2|
//         SOUTH

}

function getAreaLayout(){

var array = [null, null, null, null, null,

             null, null, null, null, null,

             null, null, null, null, null, 

             null, null, null, null, null,

             null, null, null, null, null]  


 var start =  {
   origin: {
     x: -5, y: 5
   },
    name: 'camp',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}

  }

array[ix3y3] = start
var ruins = {
origin: null,
name: 'ruins',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}
}
var mines = {origin: null,
name: 'mines',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
} 
}
var jungle ={ origin: null,
name: 'jungle',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}
}  
var moss = {origin: null,
name: 'moss',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}
}
var gem_caverns = {origin: null,
name: 'gem caverns',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
} }
var rooted_caverns = {origin: null,
name: 'rooted caverns',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var stone_cavern = {origin: null,
name: 'stone cavern',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var lake = {origin: null,
name: 'lake',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
} }
var innerRing = [ruins, mines, jungle, moss, gem_caverns, rooted_caverns, stone_cavern, lake]
var tl = Math.floor(Math.random() * innerRing.length)
innerRing[tl].origin = {x: -15, y: 15}
array[ix2y2] = innerRing[tl]

innerRing.splice(tl, 1)

var tm = Math.floor(Math.random() * innerRing.length)
innerRing[tm].origin = {x: -5, y: 15}
array[ix3y2] = innerRing[tm]
innerRing.splice(tm, 1)

var tr = Math.floor(Math.random() * innerRing.length)
  innerRing[tr].origin = {x: 5, y: 15}
array[ix4y2] = innerRing[tr]
innerRing.splice(tr, 1)

var ml = Math.floor(Math.random() * innerRing.length)
    innerRing[ml].origin = {x: -15, y: 5}
array[ix2y3] = innerRing[ml]
innerRing.splice(ml, 1)

var mr = Math.floor(Math.random() * innerRing.length)
  innerRing[mr].origin = {x: 5, y: 5}
array[ix4y3] = innerRing[mr]
innerRing.splice(mr, 1)

var bl = Math.floor(Math.random() * innerRing.length)
  innerRing[bl].origin = {x: -15, y: -5}
array[ix2y4] = innerRing[bl]
innerRing.splice(bl, 1)

var bm = Math.floor(Math.random() * innerRing.length)
  innerRing[bm].origin = {x: -5, y: -5}
array[ix3y4] = innerRing[bm]
innerRing.splice(bm, 1)

var br = Math.floor(Math.random() * innerRing.length)
  innerRing[br].origin = {x: 5, y: -5}
array[ix4y4] = innerRing[br]
innerRing.splice(br, 1)

var things_domain = {origin: null,
name: "thing's domain",
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var spider_den = {origin: null,
name: 'spider den',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var dark_caves = {origin: null,
name: 'dark caves',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var lava = {origin: null,
name: 'lava',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var cliffs = {origin: null,
name: 'cliffs',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
} }
var blood_caverns = {origin: null,
name: 'blood caverns',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var storm_caverns = {origin: null,
name: 'storm caverns',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var murky_aquifer = {origin: null,
name: 'murky aquifer',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var fallen_citadel =  {origin: null,
name: 'fallen citadel',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var flowered_caves = {origin: null,
name: 'flowered caves',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var beasts_lair = {origin: null,
name: "beast's lair",
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var bedrock_caves = {origin: null,
name: 'bedrock caves',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var ice_caves = {origin: null,
name: 'ice caves',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var void_dungeon = {origin: null,
name: 'void dungeon',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var laborotory = {origin: null,
name: 'laborotory',
generationValues: {
  treasure: {min: 0, max: 0},
  battleRooms: {min: 0, max: 0},
  dropRooms: {min: 0, max: 0},
  bossRooms: {min: 0, max: 0},
},
configs:{
bosses: [],
items: [],
enemies: [],
drops: [],
wild: []
}}
var outerRing = [things_domain, spider_den, dark_caves, lava, cliffs, blood_caverns, storm_caverns, murky_aquifer, fallen_citadel,  flowered_caves, beasts_lair, bedrock_caves,  ice_caves, void_dungeon,  laborotory]
 
 
var tl = Math.floor(Math.random() * outerRing.length)
array[ix1y1] = outerRing[tl]
outerRing.splice(tl, 1)

var tml = Math.floor(Math.random() * outerRing.length)
array[ix2y1] = outerRing[tml]
outerRing.splice(tml, 1)

var tm = Math.floor(Math.random() * outerRing.length)
array[ix3y1] = outerRing[tm]
outerRing.splice(tm, 1)

var tmr = Math.floor(Math.random() * outerRing.length)
array[ix4y1] = outerRing[tmr]
outerRing.splice(tmr, 1)

var tr = Math.floor(Math.random() * outerRing.length)
array[ix5y1] = outerRing[tr]
outerRing.splice(tr, 1)

var mtl = Math.floor(Math.random() * outerRing.length)
array[ix1y2] = outerRing[mtl]
outerRing.splice(mtl, 1)

var mtr = Math.floor(Math.random() * outerRing.length)
array[ix5y2] = outerRing[mtr]
outerRing.splice(mtr, 1)

var ml = Math.floor(Math.random() * outerRing.length)
array[ix1y3] = outerRing[ml]
outerRing.splice(ml, 1)


var mr = Math.floor(Math.random() * outerRing.length)
array[ix5y3] = outerRing[mr]
outerRing.splice(mr, 1)

var mbl = Math.floor(Math.random() * outerRing.length)
array[ix1y4] = outerRing[mbl]
outerRing.splice(mbl, 1)

var mbr = Math.floor(Math.random() * outerRing.length)
array[ix5y4] = outerRing[mbr]
outerRing.splice(mbr, 1)

var bl = Math.floor(Math.random() * outerRing.length)
array[ix1y5] = outerRing[bl]
outerRing.splice(bl, 1)

var bml = Math.floor(Math.random() * outerRing.length)
array[ix2y5] = outerRing[ml]
outerRing.splice(bml, 1)

var bm = Math.floor(Math.random() * outerRing.length)
array[ix3y5] = outerRing[bm]
outerRing.splice(bm, 1)

var bmr = Math.floor(Math.random() * outerRing.length)
array[ix4y5] = outerRing[bmr]
outerRing.splice(bmr, 1)

var br = Math.floor(Math.random() * outerRing.length)
array[ix5y5] = outerRing[br]
outerRing.splice(br, 1)
return(array)
}


