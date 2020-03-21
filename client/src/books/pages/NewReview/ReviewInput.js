import React from "react"
import "./ReviewInput.css"

function ReviewInput({ element, placeholder, onChange }) {
	const renderElement =
		element === "input" ? (
			<input
				className="review-input"
				placeholder={placeholder}
				onChange={onChange}
			/>
		) : (
			<textarea
				className="review-textarea"
				placeholder={placeholder}
				onChange={onChange}
			/>
		)

	return renderElement
}

export default ReviewInput
