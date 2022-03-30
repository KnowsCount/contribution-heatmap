export const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min)
	max = Math.floor(max)
	let randomInt: number = Math.floor(Math.random() * (max - min + 1)) + min
	return randomInt
}

export const getRandomCount = (squares: number) => {
	let randomCount: number[] = []
	for (let i = 0; i < squares; i++) {
		randomCount.push(getRandomInt(0, 25))
	}
	return randomCount
}

export const transformCount = (count: number) => {
	if (count == 0) {
		return 0
	} else if (count <= 10 && count !== 0) {
		return 1
	} else if (count > 10 && count <= 15) {
		return 2
	} else if (count > 15 && count <= 20) {
		return 3
	} else {
		return 4
	}
}

export const transformPixelsToNumber = (pixel: string) => {
	let exp = /-?\d+/g
	return parseInt(exp.exec(pixel.toString())[0])
}

export const hexBlend = (
	colour1: string,
	colour2: string,
	res: number,
	blend: number
) => {
	const wrongChar: RegExp = /[^0-9a-f]/i

	if (
		colour1.length !== 6 ||
		colour2.length !== 6 ||
		wrongChar.test(colour1) ||
		wrongChar.test(colour2)
	)
		return -1

	const getcolourFromRange = (range: number[], res: number, arg: number) =>
		((range[1] - range[0]) / res) * arg + range[0]

	const [RGB1, RGB2]: any = [colour1.match(/.{2}/g), colour2.match(/.{2}/g)]

	return [
		~~getcolourFromRange(
			[parseInt(RGB1[0], 16), parseInt(RGB2[0], 16)],
			res,
			blend
		),
		~~getcolourFromRange(
			[parseInt(RGB1[1], 16), parseInt(RGB2[1], 16)],
			res,
			blend
		),
		~~getcolourFromRange(
			[parseInt(RGB1[2], 16), parseInt(RGB2[2], 16)],
			res,
			blend
		),
	]
		.map((el) => el.toString(16).padStart(2, '0'))
		.join('')
}

export const paletteGen = (startColour: string, endColour: string) => {
	let arr: string[] = new Array(5)
	let middleColour: string = `#${hexBlend(arr[0], arr[4], 4, 2)}`
	let secondColour: string = `#${hexBlend(arr[0], middleColour, 4, 1)}`
	let thirdColour: string = `#${hexBlend(middleColour, arr[4], 4, 3)}`
	arr[0] = startColour
	arr[1] = secondColour
	arr[2] = middleColour
	arr[3] = thirdColour
	arr[4] = endColour
}
