import React, { useState, useCallback } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import NavigationBar from "./shared/components/Navigations/NavigationBar"
import SignIn from "./users/pages/SignIn/SignIn"
import SignUp from "./users/pages/Sign Up/SignUp"
import ViewUser from "./users/pages/ViewUsers/ViewUser"
import { AuthContext } from "./shared/context/auth-context"

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false)

	const signin = useCallback(() => {
		setIsSignedIn(true)
	}, [])

	const signout = useCallback(() => {
		setIsSignedIn(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isSignedIn: isSignedIn,
				signin: signin,
				signout: signout
			}}
		>
			<Router>
				<div className="App">
					<NavigationBar />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/viewuser" component={ViewUser} />
				</div>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
