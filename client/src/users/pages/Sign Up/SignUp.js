import React, { useState, useContext } from "react"
import "./SignUp.css"
import { Link } from "react-router-dom"
import axios from "axios"
import AuthInput from "../../../shared/components/Input/AuthInput"
import AuthButton from "../../../shared/components/Button/AuthButton"
import { AuthContext } from "../../../shared/context/auth-context"
import ImageUpload from "../../../shared/components/ImageUpload/ImageUpload"

function SignUp() {
	const [signupData, setSignUpData] = useState({
		fullname: "",
		username: "",
		email: "",
		password: "",
		image: {
			value: null,
			isValid: false
		}
	})

	const auth = useContext(AuthContext)

	const signUpSubtmit = e => {
		e.preventDefault()

		try {
			const formData = new FormData()
			formData.append("fullname", signupData.fullname)
			formData.append("username", signupData.username)
			formData.append("email", signupData.email)
			formData.append("password", signupData.password)
			formData.append("image", signupData.image.value)

			const respons = axios.post(
				"http://localhost:5000/users/signup",
				formData,
				{ headers: { "content-type": "multipart/form-data" } }
			)
			auth.signin()
		} catch (err) {
			console.log(err)
		}
	}

	const onChange = input => e => {
		setSignUpData({
			...signupData,
			[input]: e.target.value
		})
	}

	const onImageUpload = (value, isValid) => {
		setSignUpData({
			...signupData,
			image: {
				value: value,
				isValid: isValid
			}
		})
	}

	return (
		<div className="signup">
			<form onSubmit={signUpSubtmit}>
				<h1 className="title">Sign Up</h1>

				<AuthInput
					placeholder={"Full Name"}
					type="text"
					onChange={onChange("fullname")}
				/>
				<AuthInput
					placeholder={"Username"}
					type="text"
					onChange={onChange("username")}
				/>
				<ImageUpload id="image" onInput={onImageUpload} />
				<AuthInput
					placeholder={"Email address"}
					type="email"
					onChange={onChange("email")}
				/>
				<AuthInput
					placeholder={"Password"}
					type="password"
					onChange={onChange("password")}
				/>
				<AuthInput
					placeholder={"Confirm password"}
					type="password"
				/>
				<AuthButton buttonName="Sign Up" />

				<h3 className="switch-auth">
					Already had an account?,
					<Link to="/signin">Sign In</Link>
				</h3>
			</form>
		</div>
	)
}

export default SignUp
