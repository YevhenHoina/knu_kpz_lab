onEvent('recipes', event => {
    let cast_block = (fluid, item) => {
		event.custom({
			"type": "tconstruct:casting_basin",
			"fluid": { "name": fluid, "amount": 1296 },
			"result": { "item": item },
			"cooling_time": 150
		})
	}
	
	let cast_table = (fluid, amount, cast, item) => {
		event.custom({
			"type": "tconstruct:casting_table",
			"fluid": { "name": fluid, "amount": amount },
			"result": { "item": item },
			"cooling_time": 150,
			"cast": { "tag": cast},
			
		})
	}

	cast_table("tconstruct:molten_iron", 90, 'tconstruct:casts/multi_use/gear', 'kubejs:iron_cogwheel')
	cast_table("tconstruct:molten_iron", 90, 'tconstruct:casts/single_use/gear', 'kubejs:iron_cogwheel')
	

	event.custom({
		"type": "tconstruct:casting_table",
		"fluid": { "name": "tconstruct:molten_gold", "amount": 100 },
		"result": { "item": 'kubejs:iron_large_cogwheel_cast' },
		"cooling_time": 150,
		"cast": { "item": 'kubejs:iron_large_cogwheel'},
		
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"fluid": { "name": "tconstruct:molten_iron", "amount": 180 },
		"result": { "item": 'kubejs:iron_large_cogwheel' },
		"cooling_time": 150,
		"cast": { "item": 'kubejs:iron_large_cogwheel_cast'},
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"fluid": { "name": "tconstruct:molten_iron", "amount": 180 },
		"result": { "item": 'kubejs:iron_large_cogwheel' },
		"cooling_time": 150,
		"cast": { "item": 'kubejs:iron_large_cogwheel_sand_cast'},
		
	})

	event.custom({
		"type": "tconstruct:casting_table",
		"fluid": { "name": "tconstruct:molten_iron", "amount": 180 },
		"result": { "item": 'kubejs:iron_large_cogwheel' },
		"cooling_time": 150,
		"cast": { "item": 'kubejs:iron_large_cogwheel_red_sand_cast'},
		
	})
})