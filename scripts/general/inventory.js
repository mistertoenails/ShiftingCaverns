function addHeal(slot, itemConfig){
  inventory.healing[slot] = itemConfig  

}
function addWeapon(slot, itemConfig){
  inventory.weapons[slot] = itemConfig
}
function addScroll(itemConfig){
  inventory.scroll = itemConfig
}
var inventory = {

healing: {
slot_1: {},
slot_2: {},
slot_3: {}  
},
weapons: {
slot_1: {},
slot_2: {}  
},
scroll: {},
openBools: {
healing: true,
scroll: true,
weapon: true
},
openSlots: {
healing: [],
weapons: []
},
}
inventory.openSlots.healing = [inventory.healing.slot_1, inventory.healing.slot_2, inventory.healing.slot_3]
inventory.openSlots.weapons = [inventory.weapons.slot_1, inventory.weapons.slot_2]