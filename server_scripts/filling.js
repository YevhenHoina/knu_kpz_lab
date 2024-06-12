// let liquids = [
//   'kubejs:organic_compound',
//   'kubejs:unstable_compound',
//   'kubejs:genetic_compound',
//   'kubejs:exotic_compound',
//   'kubejs:healing_additive',
//   'kubejs:corrosive_additive',
//   'kubejs:rejuvenation_serum',
//   'kubejs:ageing_serum',
//   'kubejs:enlargement_serum',
//   'kubejs:shrinking_serum',
//   'kubejs:breeding_stimulant',
//   'kubejs:absorption_boost',
//   'kubejs:cleansing_serum',
//   'kubejs:insomnia_cure'
// ]
// let compounds = [
//   'biomancy:organic_compound',
//   'biomancy:unstable_compound',
//   'biomancy:genetic_compound',
//   'biomancy:exotic_compound',
//   'biomancy:healing_additive',
//   'biomancy:corrosive_additive',
//   'biomancy:rejuvenation_serum',
//   'biomancy:ageing_serum',
//   'biomancy:enlargement_serum',
//   'biomancy:shrinking_serum',
//   'biomancy:breeding_stimulant',
//   'biomancy:absorption_boost',
//   'biomancy:cleansing_serum',
//   'biomancy:insomnia_cure'
// ]

// onEvent('recipes', event => {

//   for (let index = 0; index <= 13; index++)
//     {

//         let liqud = 'kubejs:' + compounds[index].replace(/^biomancy:/, '');
//         let item = compounds[index];
//         event.recipes.createFilling(item, ['biomancy:glass_vial', Fluid.of(liqud, 125)])
//     }
//   // event.recipes.create.filling('kubejs:magebloom_sourceberry_smoothie_bowl', ['minecraft:bowl', Fluid.of('kubejs:magebloom_sourceberry_smoothie', 100)])
//   // event.recipes.create.filling('pneumaticcraft:plastic',['create:sturdy_sheet', Fluid.of("pneumaticcraft:plastic", 500)])
// })