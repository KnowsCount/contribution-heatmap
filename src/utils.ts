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
