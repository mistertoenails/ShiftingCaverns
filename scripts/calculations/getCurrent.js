function getCurrentArea(x, y){


  //Y = 5
  //====================================
  if(y > 15 && y <= 25) {
if(x >= 15 && x < 25){
  return(x5y5)
} 
if(x >= 5 && x  < 15){
  return(x4y5)
}
if(x >= -5 && x < 5) {
  return(x3y5) 
}
if(x >= -15 && x <-5){
  return(x2y5)
}
if(x >= -25 && x <-15){
  return(x1y5)
}
  }
//=======================================




  //Y = 4
  //====================================
  if(y > 5 && y <= 15) {
if(x >= 15 && x < 25){
  return(x5y4)
} 
if(x >= 5 && x  < 15){
  return(x4y4)
}
if(x >= -5 && x < 5) {
  return(x3y4) 
}
if(x >= -15 && x <-5){
  return(x2y4)
}
if(x >= -25 && x <-15){
  return(x1y4)
}
  }
//=======================================


  //Y = 3
  //====================================


if(y >  -5 && y <= 5){

if(x >= 15 && x < 25){
  return(x5y3)
} 
if(x >= 5 && x  < 15){
  return(x4y3)
}
if(x >= -5 && x < 5) {
  return(x3y3) 
}
if(x >= -15 && x <-5){
  return(x2y3)
}
if(x >= -25 && x <-15){
  return(x1y3)
}
}
  //====================================



  //Y = 2
  //====================================
  if(y > -15 && y <= -5) {
if(x >= 15 && x < 25){
  return(x5y2)
} 
if(x >= 5 && x  < 15){
  return(x4y2)
}
if(x >= -5 && x < 5 ){
  return(x3y2) 
}
if(x >= -15 && x <-5){
  return(x2y2)
}
if(x >= -25 && x <-15){
  return(x1y2)
}
  }
//=======================================





  //Y = 1
  //====================================
  if(y > -25 && y <= -15) {
if(x >= 15 && x < 25){
  return(x5y1)
} 
if(x >= 5 && x  < 15){
  return(x4y1)
}
if(x >= -5 && x < 5) {
  return(x3y1) 
}
if(x >= -15 && x <-5){
  return(x2y1)
}
if(x >= -25 && x <-15){
  return(x1y1)
}
  }
//=======================================
}