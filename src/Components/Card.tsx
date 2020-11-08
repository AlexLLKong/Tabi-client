import React, { FC } from 'react'

type Props = { className: string }

export const Card: FC<Props> = ({ className, children }) => (
	<div className={className}>{children}</div>
)
