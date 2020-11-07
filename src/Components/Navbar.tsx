import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
export default function Navbar() {
	return (
		<Router>
			<div>
				<div>
					<nav className={styles.navbar}>
						<ul>
							<li>
								<Link to="/">Tabi</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
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
