onEvent('recipes', event => {
  // event.shaped('2x create:belt_connector', [
  //   '   ',
  //   'SSS',
  //   'SSS'
  // ], {
  //   S: 'kubejs:enriched_rubber'
  // })
  event.shaped('createdieselgenerators:basin_lid', [
      'SSS'
    ], {
      S: 'create:andesite_alloy'
    })

  event.shaped('waterstrainer:strainer_base', [
      'H H',
      'P P',
      'PCP'
    ], {
      H: Item.of('tconstruct:tough_handle'),
      P: '#minecraft:planks',
      C: 'minecraft:chest'
    })
  event.shaped('kubejs:kinetic_mechanism', [
      'BSC',
      'SCL',
      'BH '
    ], {
      B: 'kubejs:mechanism_base',
      C: 'create:cogwheel',
      L: 'create:large_cogwheel',
      H: Item.of('cobbled_paths:sledgehammer').ignoreNBT(),
      S: 'create:shaft'
    }).damageIngredient(0).keepIngredient('cobbled_paths:sledgehammer')
})
