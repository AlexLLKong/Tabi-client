import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { LandingPage } from './Components/LandingPage'
function App() {
	return (
		<Router>
			<div>
				<div>
					<Navbar />
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/users">
							<Users />
						</Route>
						<Route path="/">
							<LandingPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App

function About() {
	return <h2>About</h2>
}

function Users() {
	return <h2>Users</h2>
}
