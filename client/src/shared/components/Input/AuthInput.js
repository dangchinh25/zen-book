import React from "react"
import "./AuthInput.css"

function AuthInput({ type, placeholder, onChange }) {
	return (
		<input
			type={type}
			className="auth-input"
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default AuthInput
