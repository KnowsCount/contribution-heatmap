import React from 'react'
import { Heatmap } from 'contribution-heatmap'

const getRandomInt = (min: number, max: number): number => {
	min = Math.ceil(min)
	max = Math.floor(max)
	let randomInt: number = Math.floor(Math.random() * (max - min + 1)) + min
	return randomInt
}

const getRandomCount = (squares: number) => {
	let randomCount: number[] = []
	for (let i = 0; i < squares; i++) {
		randomCount.push(getRandomInt(0, 21))
	}
	return randomCount
}

function App() {
	return (
		<div>
			<Heatmap squaresNumber={365} count={getRandomCount(365)} />
		</div>
	)
}

export default App
