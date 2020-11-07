import React from 'react'
import { render, screen } from '@testing-library/react'
import { LandingPage } from './LandingPage'

test('renders app name', () => {
	render(<LandingPage />)
	screen.getByText('Tabi')
})
