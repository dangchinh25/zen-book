import React, { useState, useContext } from "react"
import "./SignIn.css"
import { Link } from "react-router-dom"
import axios from "axios"
import AuthInput from "../../../shared/components/Input/AuthInput"
import AuthButton from "../../../shared/components/Button/AuthButton"
import { AuthContext } from "../../../shared/context/auth-context"

function SignIn() {
	const auth = useContext(AuthContext)

	const [signinData, setSignInData] = useState({
		username: "",
		password: ""
	})

	const onChange = input => e => {
		setSignInData({
			...signinData,
			[input]: e.target.value
		})
	}

	const authSubmit = async e => {
		e.preventDefault()

		try {
			const responseData = await axios.post(
				"http://localhost:5000/users/signin",
				signinData
			)
			auth.signin()
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="signin">
			<form onSubmit={authSubmit}>
				<h1 className="title">Login</h1>
				<AuthInput
					type="text"
					placeholder={"Username"}
					onChange={onChange("username")}
				/>
				<AuthInput
					type="password"
					placeholder={"Password"}
					onChange={onChange("password")}
				/>
				<AuthButton buttonName="Sign In" />
				<h3 className="switch-auth">
					Not have an account?, <Link to="/signup">Sign Up</Link>
				</h3>
			</form>
		</div>
	)
}

export default SignIn
