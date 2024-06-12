onEvent('fluid.registry', event => {
    event.create('dragon_breath')
    .thickTexture('0xd7c3db')
    .bucketColor('0xd7c3db')
    .displayName('Liquid dragon breath')

    // let item = compounds[1].replace(/^biomancy:/, '')
    // let color = parseInt(colors[1],16)

    // let numericColors = colors.map(colorString => parseInt(colorString, 16));
    // event.create('thick_fluid')
    // .thickTexture(color)
    // .bucketColor(color)
    // .displayName('thick fluid')
    // // function registerCompound(item, color)
    // // {
        
    // //     // let newLiqud = item
    // //     // newLiqud.replace(/^biomancy:/, '')
    // //     // let name = newLiqud
    // //     // name.replace(/_./g, match => match.charAt(1).toUpperCase())
    // //     // naem.replace(/_/g, ' ')

    // //     event.create(item)
    // //     .thickTexture(color)
    // //     .bucketColor(color)
    // //     .displayName(item)
    // //     .noBucket()
    // //     .noBlock()

    // //     // onEvent('recipes', recipes_event => {
    // //     //     recipes_event.recipes.create.filling(item, ['biomancy:glass_vial', Fluid.of(newLiqud, 125)])
    // //     //     // event.recipes.create.filling('pneumaticcraft:plastic',['biomancy:glass_vial', Fluid.of("pneumaticcraft:plastic", 500)])
    // //     //   })
    // // }

    // let compounds = [
    //     'biomancy:organic_compound',
    //     'biomancy:unstable_compound',
    //     'biomancy:genetic_compound',
    //     'biomancy:exotic_compound',
    //     'biomancy:healing_additive',
    //     'biomancy:corrosive_additive',
    //     'biomancy:rejuvenation_serum',
    //     'biomancy:ageing_serum',
    //     'biomancy:enlargement_serum',
    //     'biomancy:shrinking_serum',
    //     'biomancy:breeding_stimulant',
    //     'biomancy:absorption_boost',
    //     'biomancy:cleansing_serum',
    //     'biomancy:insomnia_cure'
    // ]
    // let colors = [
    //     0x43d3bb,
    //     0xea9448,
    //     0xf7ce54,
    //     0x54c6f7,
    //     0x1fd355,
    //     0x263c4c,
    //     0x68ff86,
    //     0x16fc44,
    //     0x00db2b,
    //     0x0ea02b,
    //     0xb20eaf,
    //     0xf7d331,
    //     0x4e06a0,
    //     0x7f5293
    // ]

    // for (let index = 0; index <= 13; index++)
    // {
    //     registerCompound(compounds[i], colors[i]);
    // }
    // event.create('superheated_anthracene')
    // .thickTexture(0xFFFFF)
    // .bucketColor(0xFFFFF)
    // .displayName('Superheated Anthracene')
    // .noBucket()
    // .noBlock()
    // .stillTexture('tconstruct:block/fluid/molten/still')
    // .flowingTexture('tconstruct:block/fluid/molten/flowing')
    
    
    // event.create('refined_oil') //for pneumaticraft fuels
    // .thinTexture(0x090909)
    // .bucketColor(0x090909)
    // .displayName('Refined Oil') 

    // event.create('dichromic_acid') 
    // .thinTexture(0x800020)
    // .bucketColor(0x800020)
    // .displayName('Dichromic Acid')
    
    // event.create('chromatic_waste') 
    // .thinTexture(0x3A4100)
    // .bucketColor(0x3A4100)
    // .displayName('Chromatic Waste') 

    // event.create('sulfuric_acid') 
    // .thinTexture(0x0AFFFFFF)
    // .bucketColor(0x0AFFFFFF)
    // .displayName('Sulfuric Acid') 

    // event.create('invar_slurry')
    // .thickTexture(0x333300)
    // .bucketColor(0x333300)
    // .displayName('Invar Slurry')

    // event.create('liquid_anthraquinone')
    // .thinTexture(0x9F2B68)
    // .bucketColor(0x9F2B68)
    // .displayName('Anthraquinone')

    // event.create('green_anthraquinone')
    // .thinTexture(0x03732F)
    // .bucketColor(0x03732F)
    // .displayName('Liquid Green Dye')
    
    // event.create('portal_actuation_fluid')
    // .thinTexture(0x03732F)
    // .bucketColor(0x03732F)
    // .displayName('Portal Actuation Fluid')

    // event.create('god_actuation_fluid')
    // .thinTexture(0x0AFFFFFF)
    // .bucketColor(0x0AFFFFFF)
    // .displayName('God Actuation Fluid')

    // event.create('aureal_essence')
    // .thinTexture(0xFFFFFF)
    // .bucketColor(0xFFFFFF)
    // .displayName('Aureal Essence')

    // event.create('liquid_egg')
    // .thinTexture(0xF0E5C2)
    // .bucketColor(0xF0E5C2)  
    // event.create('liquid_omlett')
    // .thinTexture(0xDAD37F)
    // .bucketColor(0xDAD37F)  


    
    // function SourceFluids(Name,id,bucket) {
    //     event.create(id)
    //     .displayName(Name)
    //     .stillTexture('kubejs:block/'+ id + "_still")
    //     .flowingTexture('kubejs:block/'+ id +'_flow')
    // }
    
    // const Source = [
    //     ['Sourceberry Juice','sourceberry_juice'],
    //     ['Magebloom Juice','magebloom_juice'],
    //     ['Magebloom Sourceberry Smoothie','magebloom_sourceberry_smoothie'],
    //     ['Impure Source','impure_source'],
    //     ['Source','source']

    // ]
    // Source.forEach(element => {
    //     SourceFluids(element[0],element[1])
        
    // }); 

    // function Essence(Name,id,color) {
    //     event.create(id + "_essence")
    //     .displayName(Name+ " Essence")
    //     .thinTexture(color)
    //     .stillTexture('tconstruct:block/fluid/molten/still')
    //     .flowingTexture('tconstruct:block/fluid/molten/flowing')
    //     .luminosity(8)
    // }
    // Essence("Source","source",0x9F2B68)
    // Essence("Soul","soul",0x000099)
    // Essence("Nature","nature",0x009933)
    // Essence("Dry","dry",0xffcc00)
    // Essence("Ice","ice",0x00ccff)


    // function juice(id,color) {
    //     event.create(id + "_juice")
    //     .thinTexture(color)
    //     .stillTexture('tconstruct:block/fluid/molten/still')
    //     .flowingTexture('tconstruct:block/fluid/molten/flowing')
    //     .luminosity(8)
    // }

    // juice("vexing",0x9F2B68)
    // juice("cascading",0x000099)
    // juice("flourishing",0x009933)
    // juice("blazing",0x800020)

    // event.create('inertia_essence')
    // .thinTexture(0x009933)
    // .bucketColor(0x009933)  

    
    // event.create("cae:lst")
    // .displayName("Liquid Space Time")
    // .stillTexture('cae:block/lst_still')
    // .flowingTexture('cae:block/lst_flow')

    // event.create('liquid_resent')
    // .stillTexture('kubejs:block/liquid_resent')
    // .displayName('Liquidified Resent')



    
});