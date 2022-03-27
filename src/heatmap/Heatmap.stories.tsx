import React from 'react'
import { DAYS_IN_YEAR } from '../constants'
import { Heatmap } from '../index'
import { getRandomCount, getRandomInt } from '../utils'
const randomColours = require('nice-color-palettes')

export default {
	title: 'Example/Heatmap',
	component: Heatmap,
	parameters: {
		controls: {
			sort: 'requiredFirst',
		},
		layout: 'centered',
	},
	argTypes: {
		squareNumber: {
			control: { type: 'range', min: 0, max: 365, step: 1 },
		},
	},
}

const Template = (args) => {
	return <Heatmap {...args} />
}

export const Default = Template.bind({})
Default.args = {
	args: {
		squareNumber: DAYS_IN_YEAR,
		count: getRandomCount(DAYS_IN_YEAR),
	},
}

export const PurpleTheme = Template.bind({})
PurpleTheme.args = {
	args: {
		squareNumber: DAYS_IN_YEAR,
		count: getRandomCount(DAYS_IN_YEAR),
		colours: ['#ebedf0', '#e2dbe9', '#bcaecc', '#5a4565', '#3e204f'],
	},
}

export const RandomColour = () => {
	console.log(randomColours.length)
	return (
		<Heatmap
			colour={randomColours[getRandomInt(0, 99)]}
			count={getRandomCount(DAYS_IN_YEAR)}
		/>
	)
}
