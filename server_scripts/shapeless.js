onEvent('recipes', event => {
  //event.shapeless('kubejs:sealed_mechanism', ['2x kubejs:enriched_rubber', '#create:kinetic_mechanisms'])
  //event.shapeless('create:empty_blaze_burner',["blocky_siege:brazier_off","minecraft:netherrack"])
  const drills = [
    "netherite",
    "diamond"
  ]
  // function drill(In) {event.shapeless("createoreexcavation:" + In + "_drill", "pneumaticcraft:drill_bit_" + In)}

  // drills.forEach(element => {
  //     drill(element)
  //     })
  event.shapeless('tconstruct:gear_red_sand_cast',['tconstruct:blank_red_sand_cast'])
  event.shapeless('tconstruct:gear_sand_cast',['tconstruct:blank_sand_cast'])
  event.shapeless('create:cogwheel',['create:shaft', 'kubejs:iron_cogwheel'])
  event.shapeless('create:large_cogwheel',['create:shaft', 'kubejs:iron_large_cogwheel'])
  event.shapeless('kubejs:iron_large_cogwheel_red_sand_cast',['tconstruct:gear_red_sand_cast'])
  event.shapeless('kubejs:iron_large_cogwheel_sand_cast',['tconstruct:gear_sand_cast'])
  event.shapeless('tconstruct:blank_red_sand_cast',['kubejs:iron_large_cogwheel_red_sand_cast'])
  event.shapeless('tconstruct:blank_sand_cast',['kubejs:iron_large_cogwheel_sand_cast'])
  event.shapeless('create:andesite_casing',['9x kubejs:mechanism_base'])
})