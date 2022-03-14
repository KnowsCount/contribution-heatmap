import React from 'react'
import { daysInYear } from '../constants'
import { Heatmap } from '../index'
import { getRandomCount } from '../utils'

export default {
	title: 'Example/Heatmap',
	component: Heatmap,
}

export const LightMode = () => (
	<Heatmap squaresNumber={daysInYear} count={getRandomCount(daysInYear)} />
)
