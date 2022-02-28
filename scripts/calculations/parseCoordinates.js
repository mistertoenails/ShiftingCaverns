
function getCoords(ky){





  const key = ky.split('')
var x = null
var y = null
  if(key.length === 4){
x = parseInt(key[1])
y = parseInt(key[3])
  }
  else if(key.length === 5){
if(key[1] === '-'){
x = 0 - parseInt(key[2])
y = parseInt(key[4])
}
else if(key[3] === '-'){
x = parseInt(key[1])
y = 0 - parseInt(key[4])
}
else if(key[1] !== '-' && key[2] !== 'y'){
x = parseInt(key[1]+key[2])
y = parseInt(key[4])
}
else if(key[3] !== '-' && key[4] != null){
 x = parseInt(key[1])
 y = parseInt(key[3] + key[4])
}


  }
  else if(key.length === 6){
if(key[3] === '-' && key[5] != undefined){
x = parseInt(key[1])
let firstY = parseInt(key[4]+key[5])
y = 0 - firstY
}
else if(key[1] === '-' && key[3] !== 'y'){
 let firstX = parseInt(key[2] + key[3])
x = 0 - firstX
y = parseInt(key[5])
}
else if(key[1] === '-' && key[4] === '-'){
x = 0 - parseInt(key[2])
y = 0 - parseInt(key[5])
}
else if(key[1] === '-' && key[3] === 'y' && key[4] !== '-'){

x = 0 - parseInt(key[2])
y = parseInt(key[4] + key[5])
}
else if(key[1] !== '-' && key[3] === 'y' && key[4] === '-'){

x = parseInt(key[1] + key[2])
y = 0 - parseInt(key[5])
}
else if(key[1] !== '-' && key[3] === 'y' && key[4] !== '-'){
x = parseInt(key[1] + key[2])
y = parseInt(key[4] + key[5])
}

  }
  else if(key.length === 7){
if(key[1] === '-' && key[4] === '-'){
let firstY = parseInt(key[5]+key[6])
y = 0 - firstY
x = 0 - parseInt(key[2])
}
else if(key[1] !== '-' && key[4] === '-'){
 x = parseInt(key[1]+key[2])
  let firstY = parseInt(key[5]+key[6])
y = 0 - firstY
}
else if(key[1] === '-' && key[3] !== 'y' && key[5] === '-'){
  //xdn yn
  let firstX = parseInt(key[2]+key[3])
x = 0 - firstX
y = 0 - parseInt(key[6])
}
else if(key[1] === '-' && key[3] !== 'y' && key[5] !== '-'){
// xdn yd
  let firstX = parseInt(key[2]+key[3])
x = 0 - firstX
y = parseInt(key[5]+key[6])
}

  }
  else if(key.length === 8){
  let firstX = parseInt(key[2]+key[3])
x = 0 - firstX
  let firstY = parseInt(key[6]+key[7])
y = 0 - firstY
  }
return({x: x, y: y})
  
}