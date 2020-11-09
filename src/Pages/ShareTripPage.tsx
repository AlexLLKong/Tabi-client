import React, { FC } from 'react'

type Props = { title: string }
export const ShareTripPage: FC<Props> = ({ title }) => (
	<div>
		<h1 className="">{title}</h1>
	</div>
)
