import React from 'react'
import { render, screen } from '@testing-library/react'
import { EditFieldContainer } from './EditFieldContainer'

test('renders content', () => {
	const pageContent = (
		<div>
			<h1>Page Title</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Voluptates, est?
			</p>
		</div>
	)
	render(<EditFieldContainer content={pageContent} />)
	screen.getByText(
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, est?'
	)
})
