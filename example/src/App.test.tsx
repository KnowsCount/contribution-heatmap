import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders dates', () => {
	render(<App />)
	const linkElement = screen.getByText(/Jan/i)
	expect(linkElement).toBeInTheDocument()
})
