import React from 'react'
import { render, screen } from '@testing-library/react'
import { ShareTripPage } from './ShareTripPage'

test('render with title', () => {
	render(<ShareTripPage title="test" />)
	screen.getByText('test')
})
