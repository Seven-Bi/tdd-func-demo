const algorithm = require('./algorithm');


describe('Test Algorithm', () => {
	test('-> step_color with step 8 will have 32 length of array', () => {
		expect(algorithm.step_color(8, []).length).toBe(32);
	});

	test('-> step_color with step 10 will have 26 length of array', () => {
		expect(algorithm.step_color(10, []).length).toBe(26)
	});

	const expect_return = [
		0,   8,  16,  24,  32,  40,  48,  56,                                                                                                                                                                            
		64,  72,  80,  88,  96, 104, 112, 120,                                                                                                                                                                            
		128, 136, 144, 152, 160, 168, 176, 184,                                                                                                                                                                            
		192, 200, 208, 216, 224, 232, 240, 248 
	]
	test('-> step_color with step 8 and expect array return', () => {
		expect(algorithm.step_color(8, [])).toEqual(expect_return)
	});

	const sample_color_range = [
		0,   8,  16,  24,  32,  40,  48,  56,                                                                                                                                                                         
		64,  72,  80,  88,  96, 104, 112, 120,                                                                                                                                                                          
		128, 136, 144, 152, 160, 168, 176, 184,                                                                                                                                                                         
		192, 200, 208, 216, 224, 232, 240, 248
	]
	const expect_len = 32*32*32
	let res = []
	algorithm.rgb_picker(sample_color_range, [], 0, res)
	test('-> rgb_picker with sample color range (length 32), return expect length of combinations', () => {
		expect(res.length).toEqual(expect_len)
	});

	const sample_color_range2 = [                                                                                                                                                                           
		64,  72,  80,  88,  96,                                                                                                                                                                        
		128, 136, 144, 152, 160                                                                                                                                                   
	]
	const expect_len_2 = 10*10*10
	let res2 = []
	algorithm.rgb_picker(sample_color_range2, [], 0, res2)
	test('-> rgb_picker with sample color range (length 10), return expect length of combinations', () => {
		expect(res2.length).toEqual(expect_len_2)
	});		
});