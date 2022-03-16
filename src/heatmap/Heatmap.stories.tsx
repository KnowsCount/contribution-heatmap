import React from 'react'
import { DAYS_IN_YEAR } from '../constants'
import { Heatmap } from '../index'
import { getRandomCount } from '../utils'

export default {
	title: 'Example/Heatmap',
	component: Heatmap,
}

export const Default = () => (
	<Heatmap squareNumber={DAYS_IN_YEAR} count={getRandomCount(DAYS_IN_YEAR)} />
)

export const OtherColour = () => (
	<Heatmap
		colour={['#ebedf0', '#e2dbe9', '#bcaecc', '#5a4565', '#3e204f']}
		count={getRandomCount(DAYS_IN_YEAR)}
	/>
)
