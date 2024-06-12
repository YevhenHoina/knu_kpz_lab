onEvent('jei.hide.items', event => {
    event.hide('createindustry:lpg_engine_back')
    event.hide('createindustry:lpg_engine')
    event.hide('custommachinery:creature_infuser/dragon_breath_hidden')
    event.hide('custommachinery:creature_infuser/quartz_crab_hidden')
    event.hide('custommachinery:creature_infuser/redstone_silverfish_hidden')
    event.hide({output: /^createdieselgenerators:pumpjack.*/ })
    event.hide({output: 'createdieselgenerators:distillation_controller'})
    event.hide({output: 'createdieselgenerators:oil_scanner'})
  })
  onEvent('jei.hide.fluids', event => {
    event.hide('pneumaticcraft:crude_oil')
    event.hide('createdieselgenerators:diesel')
    event.hide('createdieselgenerators:biodiesel')
    event.hide('createdieselgenerators:gasoline')
    event.hide('createdieselgenerators:ethanol')
    event.hide('pneumaticcraft:crude_oil_bucket')
    event.hide('createdieselgenerators:diesel_bucket')
    event.hide('createdieselgenerators:biodiesel_bucket')
    event.hide('createdieselgenerators:gasoline_bucket')
    event.hide('createdieselgenerators:ethanol_bucket')
  })