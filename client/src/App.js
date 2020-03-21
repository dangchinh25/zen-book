import React, { useState, useCallback } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import NavigationBar from "./shared/components/Navigations/NavigationBar"
import SignIn from "./users/pages/SignIn/SignIn"
import SignUp from "./users/pages/Sign Up/SignUp"
import ViewUser from "./users/pages/ViewUsers/ViewUser"
import { AuthContext } from "./shared/context/auth-context"
import NewReview from "./books/pages/NewReview/NewReview"
import AllReview from "./books/pages/AllReview/AllReview"

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
					<Route exact path="/" component={AllReview} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/viewuser" component={ViewUser} />
					<Route path="/newreview" component={NewReview} />
				</div>
			</Router>
		</AuthContext.Provider>
	)
}

export default App
