onEvent('recipes', event => {
    event.recipes.create.deploying('create:cogwheel',['create:shaft', 'kubejs:iron_cogwheel'])
  event.recipes.create.deploying('create:large_cogwheel',['create:shaft', 'kubejs:iron_large_cogwheel'])
//     event.recipes.create.deploying('glassential:glass_ghostly', ['quark:soul_bead','#forge:glass/colorless'])
// event.recipes.create.sandpaperPolishing([Item.of('kubejs:tested_pcb', 1).withChance(0.7),Item.of('pneumaticcraft:failed_pcb', 1).withChance(0.3)], 'kubejs:mystery_pcb')
})