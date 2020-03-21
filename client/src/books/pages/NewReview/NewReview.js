import React, { useState } from "react"
import "./NewReview.css"
import ImageUpload from "../../../shared/components/ImageUpload/ImageUpload"
import ReviewInput from "./ReviewInput"
import AuthButton from "../../../shared/components/Button/AuthButton"

function NewReview() {
	const [reviewData, setReviewData] = useState({
		title: "",
		author: "",
		desc: "",
		image: {
			value: null,
			isValid: false
		}
	})

	const onChange = input => e => {
		setReviewData({
			...reviewData,
			[input]: e.target.value
		})
	}

	const onImageUpload = (value, isValid) => {
		setReviewData({
			...reviewData,
			image: {
				value: value,
				isValid: isValid
			}
		})
	}

	return (
		<div className="new-review">
			<ImageUpload onInput={onImageUpload} />
			<div className="text">
				<ReviewInput
					element="input"
					placeholder="Title"
					onChange={onChange("title")}
				/>
				<ReviewInput
					element="input"
					placeholder="Author"
					onChange={onChange("author")}
				/>
				<ReviewInput
					element="textarea"
					placeholder="Your thought"
					onChange={onChange("desc")}
				/>
				<button>Submit</button>
			</div>
		</div>
	)
}

export default NewReview
