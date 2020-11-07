import React, { MouseEvent, FC } from 'react'
type Props = { onClick(e: MouseEvent<HTMLElement>): void }
export const Button: FC<Props> = ({ onClick: handleClick, children }) => (
	<button onClick={handleClick}>{children}</button>
)
