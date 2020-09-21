// import { step_color, rgb_picker, algorithm } from './algorithm';
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
});