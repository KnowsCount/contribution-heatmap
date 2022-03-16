import React from 'react'
import { render } from '@testing-library/react'
import { getRandomCount } from '../utils'
import { DAYS_IN_YEAR } from '../constants'

import Heatmap from './Heatmap'

describe('Heatmap', () => {
	test('renders the Heatmap component', () => {
		render(<Heatmap count={getRandomCount(DAYS_IN_YEAR)} />)
	})
})
