import React from 'react'
import { DAYS_IN_YEAR } from '../constants'
import { Heatmap } from '../index'
import { getRandomCount } from '../utils'

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

export const OtherColour = () => (
	<Heatmap
		colour={['#ebedf0', '#e2dbe9', '#bcaecc', '#5a4565', '#3e204f']}
		count={getRandomCount(DAYS_IN_YEAR)}
	/>
)
