function getDistance(x1, y1, x2, y2){
  var a = x1 - x2;
var b = y1 - y2;
var c = Math.sqrt( a*a + b*b );
return(c)
}

function getInteractable(x, y, sceneObj,  direction){

for(index in sceneObj.interactibles){
var interactible = sceneObj.interactibles[index]
if(getDistance(interactible.x,interactible.y, x, y) < 150){
    sceneObj.interactibles.splice(index, 1)
  interactible.interact()

}
}

}
function highlightInteractable(x, y, sceneObj,  direction){

for(index in sceneObj.interactibles){
var interactible = sceneObj.interactibles[index]
if(getDistance(interactible.x,interactible.y, x, y) < 150){
  interactible.highlight()
}
else{
  interactible.unHighlight()
}
}

}