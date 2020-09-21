function step_color(step, color_range) {
	const COLOR_RANGE = 256
	// create normal color range
	for (var i = 0; i < COLOR_RANGE; i++) {
		color_range.push(i)
	}

	// generate color range by giving `s` step
	return color_range.filter(item => item % step == 0)
}

function rgb_picker(color_range, res, start) {
	
}

function algorithm(step) {
	let my_color_range = step_color(step, [])
	let res = [] // my color combinations result
	let start = 0

	rgb_picker(my_color_range, res, start)

	return res
}

module.exports.step_color = step_color;
module.exports.rgb_picker = rgb_picker;
module.exports.algorithm = algorithm;