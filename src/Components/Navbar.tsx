import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom'
import styles from './Navbar.module.css'
import navlinkStyles from './Navlink.module.css'
export default function Navbar() {
	return (
		<Router>
			<div>
				<div>
					<nav className={styles.navbar}>
						<NavLink className={navlinkStyles.brandLink} to="/">
							Tabi
						</NavLink>
						<ul>
							<li className={navlinkStyles.navlink}>
								<NavLink to="/about">About</NavLink>
							</li>
							<li className={navlinkStyles.navlink}>
								<NavLink to="/users">Users</NavLink>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}
function Home() {
	return <h2>Tabi</h2>
}

function About() {
	return <h2>About</h2>
}

function Users() {
	return <h2>Users</h2>
}
