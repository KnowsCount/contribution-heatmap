import React from 'react'
import { months, weekDays, daysInYear } from '../constants'
import { getRandomCount, TransformCount } from '../utils'
import styled from 'styled-components'
import './Heatmap.css'

export interface IProps {
	/**
	 * @description the colour of the squares from lightest to darkest, for each data-level from 0 to 4. remember the prop name is `colour`, not `color`. (WIP)
	 * @default ['#ebedf0', '#c6e48b', '#40c463', '#30a14e', '#216e39']
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
	/**
	 * @description gap between squares.
	 * @default 4px
	 */
	squareGap?: string
	/**
	 * @description size of squares.
	 * @default 15px
	 */
	squareSize?: string
}

const Heatmap: React.FC<IProps> = (props: {
	colour?: string[]
	squaresNumber?: number
	count: number[]
	squareGap?: string
	squareSize?: string
}) => {
	// variables
	let colour = props.colour || [
		'#ebedf0',
		'#c6e48b',
		'#40c463',
		'#30a14e',
		'#216e39',
	]
	let squaresNumber = props.squaresNumber || daysInYear
	let count = getRandomCount(squaresNumber)
	let level: number[] = count.map((i: number) => TransformCount(i))
	let squareGap = props.squareGap || '4px'
	let squareSize = props.squareSize || '15px'
	// styles
	const SquaresList = styled.div`
		margin-top: 0;
		margin-block-start: 0;
		grid-area: squares;
		display: grid;
		grid-gap: ${squareGap};
		grid-template-rows: repeat(7, ${squareSize});
		z-index: 1;
		grid-auto-flow: column;
		grid-auto-columns: ${squareSize};
	`
	const SquareListItem = styled.div`
		border-radius: 3px;
		border: 1px rgba(27, 31, 35, 0.06) solid;
		background-color: ${colour[0]};
	`
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
				<SquaresList>
					{[...Array(squaresNumber)].map((key: React.Key, i) => (
						<SquareListItem
							// colour={level[i]}
							data-level={level[i]}
							key={key}
							data-tooltip={
								count[i] + ' contributions on this day'
							}
						></SquareListItem>
					))}
				</SquaresList>
			</div>
		</>
	)
}

export default Heatmap
