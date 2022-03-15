import React from 'react'
import {
	MONTHS,
	WEEK_DAYS,
	DAYS_IN_YEAR,
	DEFAULT_SQUARE_GAP,
	DEFAULT_SQUARE_SIZE,
} from '../constants'
import {
	getRandomCount,
	transformCount,
	transformPixelsToNumber,
} from '../utils'
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
	let squaresNumber: number = props.squaresNumber || DAYS_IN_YEAR
	let count: number[] = getRandomCount(squaresNumber)
	let level: number[] = count.map((i: number) => transformCount(i))
	let squareGap: string = props.squareGap || DEFAULT_SQUARE_GAP
	let squareSize: string = props.squareSize || DEFAULT_SQUARE_SIZE
	let weekWidth: string =
		String(
			transformPixelsToNumber(squareGap) +
				transformPixelsToNumber(squareSize)
		) + 'px'
	// styles
	const Wrapper = styled.div`
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
			Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-size: 12px;
		ul {
			padding-inline-start: 0;
		}
	`
	const Graph = styled.div`
		padding: 20px;
		border: 1px #e1e4e8 solid;
		margin: 20px;
		display: inline-grid;
		grid-template-areas:
			'empty months'
			'days squares';
		grid-template-columns: auto 1fr;
		grid-gap: 10px;
	`
	const Months = styled.ul`
		padding-inline-start: 0;
		grid-area: months;
		margin-bottom: 0;
		display: grid;
		grid-template-columns:
			calc(${weekWidth} * 4) /* jan */
			calc(${weekWidth} * 4) /* feb */
			calc(${weekWidth} * 4) /* mar */
			calc(${weekWidth} * 5) /* apr */
			calc(${weekWidth} * 4) /* may */
			calc(${weekWidth} * 4) /* jun */
			calc(${weekWidth} * 5) /* jul */
			calc(${weekWidth} * 4) /* aug */
			calc(${weekWidth} * 4) /* sep */
			calc(${weekWidth} * 5) /* oct */
			calc(${weekWidth} * 4) /* nov */
			calc(${weekWidth} * 5) /* dec */;
	`
	const Days = styled.ul`
		margin-block-end: 0;
		margin-block-start: 0;
		grid-area: days;
		display: grid;
		grid-gap: ${squareGap};
		grid-template-rows: repeat(7, ${squareSize});
		li:nth-child(odd) {
			visibility: hidden;
		}
	`
	const SquaresList = styled.ul`
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
	const SquareListItem = styled.li`
		border-radius: 3px;
		border: 1px rgba(27, 31, 35, 0.06) solid;
		background-color: ${colour[0]};
	`
	return (
		<Wrapper>
			<Graph>
				<Months>
					{MONTHS.map((MONTHS, i) => (
						<li key={i}>{MONTHS}</li>
					))}
				</Months>
				<Days>
					{WEEK_DAYS.map((WEEK_DAYS, i) => (
						<li key={i}>{WEEK_DAYS}</li>
					))}
				</Days>
				<SquaresList>
					{[...Array(squaresNumber)].map((key: React.Key, i) => (
						<SquareListItem
							className="squares"
							data-level={level[i]}
							key={key}
							data-tooltip={
								count[i] + ' contributions on this day'
							}
						></SquareListItem>
					))}
				</SquaresList>
			</Graph>
		</Wrapper>
	)
}

export default Heatmap
