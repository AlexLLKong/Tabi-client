import React, { FC, useEffect, useState } from 'react'
type Props = { content: JSX.Element }
const useInput = (type: string): [string, JSX.Element] => {
	const [value, setValue] = useState('')
	const input = (
		<input
			value={value}
			onChange={e => setValue(e.target.value)}
			type={type}
			placeholder="Edit selection"
		/>
	)
	return [value, input]
}
export const EditFieldContainer: FC<Props> = ({ content }) => {
	let [editElement, setEditElement] = useState<HTMLElement | null>(null)
	let [newValue, newValueInput] = useInput('text')

	useEffect(
		() =>
			setEditElement(editElement =>
				document.querySelector("[data-editable = 'true']")
			),
		[]
	)
	useEffect(() => {
		if (editElement) editElement.innerHTML = newValue
	}, [newValue, editElement])
	return (
		<div>
			{newValueInput}
			{content}
		</div>
	)
}
