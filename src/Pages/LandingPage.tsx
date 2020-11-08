import React, { MouseEvent, FC } from 'react'
import { Wrapper } from '../Components/Wrapper'
import { Button } from '../Components/Button'
import pageStyles from './Pages.module.css'
import styles from './LandingPage.module.css'
const tempFn = (e: MouseEvent<HTMLElement>): void => {
	e.preventDefault()
	console.log('Placeholder button on click handler clicked')
}

export const LandingPage: FC = () => (
	<Wrapper>
		<h1 className={pageStyles.title}>Tabi</h1>
		<p className={pageStyles.bodyText}>
			Just one more reason to go on that trip.
		</p>
		{/* Should consider changing this Button to a navlink instead */}
		<Button
			className={styles.btn}
			onClick={tempFn}
			children={<strong>Start Planning</strong>}
		/>
		<span className={styles.bgCharacter}>旅</span>
	</Wrapper>
)
