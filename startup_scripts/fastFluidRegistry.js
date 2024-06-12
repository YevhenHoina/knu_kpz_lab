let compounds = [
    'biomancy:organic_compound',
    'biomancy:unstable_compound',
    'biomancy:genetic_compound',
    'biomancy:exotic_compound',
    'biomancy:healing_additive',
    'biomancy:corrosive_additive',
    'biomancy:rejuvenation_serum',
    'biomancy:ageing_serum',
    'biomancy:enlargement_serum',
    'biomancy:shrinking_serum',
    'biomancy:breeding_stimulant',
    'biomancy:absorption_boost',
    'biomancy:cleansing_serum',
    'biomancy:insomnia_cure',
    
]
let colors = [
    '0x43d3bb',
    '0xea9448',
    '0xf7ce54',
    '0x54c6f7',
    '0x1fd355',
    '0x263c4c',
    '0x68ff86',
    '0x16fc44',
    '0x00db2b',
    '0x0ea02b',
    '0xb20eaf',
    '0xf7d331',
    '0x4e06a0',
    '0x7f5293'
]

onEvent('fluid.registry', event => {

    for (let index = 0; index <= 13; index++)
    {
        let item = compounds[index].replace(/^biomancy:/, '')
        let color = parseInt(colors[index], 16)
        let name = compounds[index].replace(/^biomancy:/, '')
        name = 'Liqud ' + name.replace(/_/g, ' ');
        event.create(item)
        .thickTexture(color)
        .bucketColor(color)
        .displayName(name)
    }
});

onEvent('recipes', event => {

    for (let index = 0; index <= 13; index++)
      {
  
          let liqud = 'kubejs:' + compounds[index].replace(/^biomancy:/, '');
          let item = compounds[index];
          event.recipes.createFilling(item, ['biomancy:glass_vial', Fluid.of(liqud, 125)])
      }
    // event.recipes.create.filling('kubejs:magebloom_sourceberry_smoothie_bowl', ['minecraft:bowl', Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100)])
    // event.recipes.create.filling('pneumaticcraft:plastic',['create:sturdy_sheet', Fluid.of("pneumaticcraft:plastic", 500)])
  })
