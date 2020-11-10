import React from 'react'
import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import { EditFieldContainer } from './EditFieldContainer'
const pageContent = (
	<div>
		<h1 data-editable="true">Page Title</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Voluptates, est?
		</p>
	</div>
)
test('renders content', () => {
	render(<EditFieldContainer content={pageContent} />)
	screen.getByText(
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, est?'
	)
})
test('default element innerText changes on input', () => {
	render(<EditFieldContainer content={pageContent} />)
	const inputElement = screen.getByPlaceholderText('Edit selection')
	const changeEvent = createEvent.change(inputElement, {
		target: { value: 'test' },
	})
	fireEvent(inputElement, changeEvent)
	screen.getByText('test')
})
