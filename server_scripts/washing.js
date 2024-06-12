onEvent('recipes', event => {
  // event.recipes.createSplashing(['minecraft:petrified_oak_slab'],'minecraft:oak_slab')
  // event.recipes.create.splashing('10x minecraft:iron_nugget', 'create:crushed_raw_iron')
  event.recipes.create.splashing(['create:crushed_raw_gold', Item.of('create:copper_nugget').withChance(0.3)], "#forge:raw_materials/gold")
})