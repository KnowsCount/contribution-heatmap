import React from 'react'
import { months, weekDays, daysInYear } from '../constants'
import { getRandomInt } from '../utils'
import './Heatmap.css'
import type { Day } from '../types'

type Data = Array<Day>

export interface IProps {
	/**
	 * sample data
	 * {
	 *     date: '2020-01-01',
	 *     count: 2
	 * }
	 */
	data: Data
}

const TransformCount = (count: number) => {
	if (count == 0) {
		return 0
	} else if (count <= 10 && count !== 0) {
		return 1
	} else if (count >= 10 && count < 15) {
		return 2
	} else if (count >= 15 && count < 20) {
		return 3
	} else {
		return 4
	}
}

const Squares = (props: { count: number }, i: React.Key) => {
	const { count } = props
	let level = TransformCount(count)
	return (
		<li
			data-level={level}
			key={i}
			data-tooltip={count + ' contributions on this day'}
		></li>
	)
}

const Heatmap = () => {
	return (
		<>
			<div className="graph">
				<ul className="months">
					{months.map((months, i) => (
						<li key={i}>{months}</li>
					))}
				</ul>
				<ul className="days">
					{weekDays.map((weekDays, i) => (
						<li key={i}>{weekDays}</li>
					))}
				</ul>
				<ul className="squares">
					{[...Array(daysInYear)].map((i, data) => (
						<Squares key={i} count={getRandomInt(0, 21)} />
					))}
				</ul>
			</div>
		</>
	)
}

export default Heatmap
