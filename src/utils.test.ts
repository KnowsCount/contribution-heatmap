import {
	getRandomInt,
	getRandomCount,
	transformCount,
	transformPixelsToNumber,
} from './utils'

test('getRandomInt() returns integers between the given range', () => {
	let randomInt: number = getRandomInt(0, 10)
	expect(randomInt).toBeGreaterThanOrEqual(0)
	expect(randomInt).toBeLessThanOrEqual(10)
})

test('getRandomCount() returns an array of random integers between 0 and 25', () => {
	let randomCount: number[] = getRandomCount(5)
	expect(randomCount.length).toBe(5)
	randomCount.forEach((count) => {
		expect(count).toBeGreaterThanOrEqual(0)
		expect(count).toBeLessThanOrEqual(25)
	})
})

test('transformCount() returns the correct number of squares', () => {
	expect(transformCount(0)).toBe(0)
	expect(transformCount(10)).toBe(1)
	expect(transformCount(15)).toBe(2)
	expect(transformCount(20)).toBe(3)
	expect(transformCount(25)).toBe(4)
})

test('transformPixelsToNumber() extracts the correct number (without unit)', () => {
	expect(transformPixelsToNumber('0px')).toBe(0)
	expect(transformPixelsToNumber('10rem')).toBe(10)
	expect(transformPixelsToNumber('15em')).toBe(15)
	expect(transformPixelsToNumber('-20px')).toBe(-20)
	expect(transformPixelsToNumber('2520240394039304px')).toBe(2520240394039304)
})
