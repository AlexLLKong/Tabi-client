import React, { MouseEvent, FC } from 'react'
import { Wrapper } from './Wrapper'
import { Button } from './Button'

const tempFn = (e: MouseEvent<HTMLElement>): void => {
	e.preventDefault()
	console.log('Placeholder button on click handler clicked')
}

export const LandingPage: FC = () => (
	<Wrapper>
		<h1>Tabi</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
			soluta impedit doloremque tenetur mollitia quis, ratione eum ad est
			consequatur?
		</p>
		<Button onClick={tempFn} children={'Start Planning'} />
	</Wrapper>
)
