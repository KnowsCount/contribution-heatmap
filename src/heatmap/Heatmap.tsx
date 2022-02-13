import React from 'react'
import { months, weekDays, daysInYear } from '../constants'
import './Heatmap.css'

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
					{[...Array(daysInYear)].map((_, i) => (
						<li
							data-level={Math.floor(Math.random() * 4)}
							key={i}
							data-tooltip={
								Math.floor(Math.random() * 4) +
								' contributions on this day'
							}
						></li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Heatmap
