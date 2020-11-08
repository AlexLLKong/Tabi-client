import React, { FC } from 'react'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
export const MyTripsPage: FC = () => (
	<Wrapper>
		<h1>My Trips</h1>
		<Wrapper>
			<Card children={<h3>Example Card</h3>}></Card>
		</Wrapper>
	</Wrapper>
)
