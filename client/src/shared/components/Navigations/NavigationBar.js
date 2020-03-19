import React, { useContext } from "react"
import { Link } from "react-router-dom"

import "./NavigationBar.css"
import { AuthContext } from "../../context/auth-context"

function NavigationBar() {
	const auth = useContext(AuthContext)

	return (
		<header>
			<img
				className="logo"
				src="Logo.png"
				alt="logo"
				height="100px"
				width="100px"
			/>
			<nav>
				<ul className="nav-link">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a>Reviews</a>
					</li>
					<li>
						<Link to="/viewuser">People</Link>
					</li>
					{auth.isSignedIn && (
						<li>
							<a>New Review</a>
						</li>
					)}
					{!auth.isSignedIn && (
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
					)}
					{auth.isSignedIn && (
						<li>
							<Link to="/signin">Sign Out</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default NavigationBar
