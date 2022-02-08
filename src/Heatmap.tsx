import React from 'react'
import { months, days } from './constants'
import './Heatmap.css'

const Heatmap = () => {
	const level = Math.floor(Math.random() * 3)
	const daysInYear = 365
	return (
		<>
			<div className="graph">
				<ul className="months">
					{months.map((months, i) => <li key={i}>{months}</li> )}
				</ul>
				<ul className="days">
					{days.map((days, i) => <li key={i}>{days}</li> )}
				</ul>
				<ul className="squares">
					{[...Array(daysInYear)].map((_, i) => <li data-level={level} key={i}></li> )}
				</ul>
			</div>
		</>
	)
}

export default Heatmap