var sword1 = {
type: "weapon",
config_data: {
configure_use_key: (scene)=>{
scene.useKey = scene.input.keyboard.addKey('Q')  
scene.useKey.on('down', this.use)
},
use: (scene)=>{
console.log('no sword yet!')  
},
deconfigure_use_key: (scene)=>{
  scene.useKey.destroy()
},
cooldown: 800
},
displayData: {
stat1Value: 5,
stat1Type: 'dmg',
stat2Type: 'spd',
stat2Value: 6,
loadSprite: (scene)=>{
scene.load.image('sword1', 'assets/menus/sword1.png')
},
key: 'sword1'
}  
}
//ITEM CONFIG LAYOUT
//CONFIG = {
//TYPE: string: WEAPON, HEAL, SCROLL
//CONFIG_DATA: {
//  configure_use_key: function
//  use: function
//  useCooldown: integer in miliseconds
//  
//  }
//DISPLAY_DATA: {
//  stat1value: integer
//  stat1type:  integer
//  stat2value: integer
//  stat2type:  string
//  loadSprite: function
//  spriteKey:  string
//
//}
//}