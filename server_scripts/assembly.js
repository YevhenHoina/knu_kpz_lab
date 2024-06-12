// // priority: 300
// onEvent('tags.items', event => {
//   event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled')
//   event.add('forge:menril_logs', 'integrateddynamics:menril_log')
//   event.add('forge:saws', 'kubejs:saw')
//   event.add('forge:screwdrivers', 'kubejs:screwdriver')
// });

onEvent('recipes', event => {

  let t = 'kubejs:incomplete_kinetic_mechanism'
  event.recipes.createSequencedAssembly([
    'kubejs:kinetic_mechanism',
  ], 'kubejs:mechanism_base', [
    event.recipes.createDeploying(t, [t, 'create:shaft']),
    event.recipes.createDeploying(t, [t, 'create:cogwheel']),
    event.recipes.createDeploying(t, [t, 'create:large_cogwheel'])
  ]).transitionalItem('kubejs:incomplete_kinetic_mechanism').loops(1)
  })

// onEvent('tags.items', event => {
//       event.add('forge:menril_logs', 'integrateddynamics:menril_log_filled')
//       event.add('forge:menril_logs', 'integrateddynamics:menril_log')
//       event.add('forge:saws', 'kubejs:saw')
//       event.add('forge:screwdrivers', 'kubejs:screwdriver')
//     });

