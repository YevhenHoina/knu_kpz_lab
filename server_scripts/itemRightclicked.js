// onEvent('item.entity_interact', event =>{
// 	if (event.item.id == 'tconstruct:tool_handle'){
// 		if (target.entity.type == 'immortuoscalyx:infecteddiver') {
//             event.player.give('kubejs:immortuos_eggs_sample')
//             event.item.count--
//         }
// 	}
// })
onEvent('item.entity_interact', event => {
    if (event.item == Item.of('tconstruct:tool_handle', '{Material:"tconstruct:bone"}') && event.target.type == "immortuoscalyx:infecteddiver" && event.player.isCrouching()) {
        event.item.setCount(event.item.getCount() - 1)
        event.server.runCommandSilent(`give ${event.player} kubejs:immortuos_eggs_sample`)
    }
})

onEvent('PlayerInteractEvent.EntityInteract', event => {
    if (getAction ( ) == Action . RIGHT_CLICK) {
        if (event.item.id == 'minecraft:diamond_sword') {
            event.server.runCommand('/give' + event.player + 'kubejs:immortuos_eggs_sample')
        }
    }
})        


// onEvent('block.right_click', event =>{
//     if (event.block.id == 'cae:skystone_catalyst' && event.item.id == "minecraft:wooden_axe") {
//         event.block.set('air')
//         event.block.offset(0,10,0).set('cae:skystone_catalyst')
//     }  
// 	if (event.item == "pneumaticcraft:pneumatic_wrench" && event.block.id.startsWith("create:")) {
// 		event.player.statusMessage = 'We\'ve prevented this item from interacting with Create components due to a possible Crash.'
// 		event.cancel()
// 	}
// })