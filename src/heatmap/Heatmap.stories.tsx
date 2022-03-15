import React from 'react'
import { DAYS_IN_YEAR } from '../constants'
import { Heatmap } from '../index'
import { getRandomCount } from '../utils'

export default {
	title: 'Example/Heatmap',
	component: Heatmap,
}

export const LightMode = () => (
	<Heatmap
		squaresNumber={DAYS_IN_YEAR}
		count={getRandomCount(DAYS_IN_YEAR)}
	/>
)
