import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

test('renders users link', () => {
	render(<Navbar />)
	const linkElement = screen.getByText(/Users/i)
	expect(linkElement).toBeInTheDocument()
})
