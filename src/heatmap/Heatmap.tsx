import React from 'react'
import { months, weekDays, daysInYear } from '../constants'
import { getRandomCount, TransformCount } from '../utils'
import './Heatmap.css'

export interface IProps {
	/**
	 * @description the colour of the squares from lightest to darkest, for each data-level from 0 to 4. remember the prop name is `colour`, not `color`. (WIP)
	 * @example ['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']
	 */
	colour?: string[]
	/**
	 * @description the number of squares to display.
	 * @default daysInYear (365)
	 * @example 365
	 */
	squaresNumber?: number
	/**
	 * @description an array of contribution (commit) count for each square.
	 * @example [5, 4, 3, 1, 5]
	 */
	count: number[]
}

const Heatmap: React.FC<IProps> = (props: {
	colour?: string[]
	squaresNumber?: number
	count: number[]
}) => {
	let squaresNumber = props.squaresNumber || daysInYear
	let count = getRandomCount(squaresNumber)
	let level: number[] = count.map((i: number) => TransformCount(i))
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
					{[...Array(squaresNumber)].map((key: React.Key, i) => (
						<li
							data-level={level[i]}
							key={key}
							data-tooltip={
								count[i] + ' contributions on this day'
							}
						></li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Heatmap
