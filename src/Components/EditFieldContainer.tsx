import React, { FC } from 'react'
type Props = { content: JSX.Element }
export const EditFieldContainer: FC<Props> = ({ content }) => (
	<div>{content}</div>
)
